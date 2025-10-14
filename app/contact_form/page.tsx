"use client";

import { useState } from "react";
import { createTranslator } from "@/utils/i18n";
import { COUNTRIES, Country } from "@/utils/countries";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactPage() {
  const t = createTranslator("en");

  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: null as Country | null,
    phone: "",
    phoneDisplay: "",
    profession: "",
    structure_size: "",
    objectives: [] as string[],
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleCountryChange = (code: string) => {
    const country = COUNTRIES.find((c) => c.countryCode === code);
    if (country) {
      setSelectedCountry(country);
      setFormData((prev) => ({
        ...prev,
        country,
        phoneDisplay: "",
        phone: "",
      }));
    }
  };

  const handlePhoneChange = (val: string) => {
    const clean = val.replace(/\s/g, "");
    setFormData((prev) => ({
      ...prev,
      phoneDisplay: val,
      phone: selectedCountry ? `${selectedCountry.dialCode}${clean}` : clean,
    }));
  };

  const handleStructureSizeToggle = (size: string) => {
    setFormData((prev) => ({
      ...prev,
      structure_size: size,
    }));
  };

  const handleObjectiveToggle = (value: string) => {
    setFormData((prev) => {
      const objectives = prev.objectives.includes(value)
        ? prev.objectives.filter((o) => o !== value)
        : [...prev.objectives, value];
      return { ...prev, objectives };
    });
  };

  const buildPayload = () => {
    const structureFr = structureSizes.find(s => s.value === formData.structure_size)?.frValue || formData.structure_size;
    const objectivesFr = formData.objectives.map(obj => {
      const found = objectives.find(o => o.value === obj);
      return found?.frValue || obj;
    });
    const professionFr = professionMapping[formData.profession] || formData.profession;

    return {
      lead_proff: { labels: [professionFr] },
      company_t_structure: { labels: [structureFr] },
      first_name: formData.firstname,
      last_name: formData.lastname,
      primary_goal: { labels: objectivesFr },
      website_message: formData.message,
      lead_email: { email: formData.email, text: formData.email },
      lead_phone: {
        phone: formData.phone,
        countryShortName: formData.country?.countryCode || "",
      },
      company_pays: {
        countryCode: formData.country?.countryCode || "",
        countryName: formData.country?.countryName || "",
      },
      qualif_source: { labels: ["Inbound"] },
      lead_source: { label: "Site web" },
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess("");
    setError("");

    const payload = buildPayload();
    console.log("📤 Payload sent:", payload);

    const webhook = "https://nextmotion.app.n8n.cloud/webhook/64acc710-9131-4868-9bdd-51d46fdc81f3";

    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Server error");
      setSuccess(t("contact.success"));
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        country: null,
        phone: "",
        phoneDisplay: "",
        profession: "",
        structure_size: "",
        objectives: [],
        message: "",
      });
      setSelectedCountry(null);
    } catch {
      setError(t("contact.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const structureSizes = [
    { key: "solo", label: t("contact.structureSizes.solo"), value: "Single practitioner office", frValue: "Cabinet individuel (Un seul praticien)" },
    { key: "small", label: t("contact.structureSizes.small"), value: "Small structure (2–3 practitioners)", frValue: "Petite structure (2–3)" },
    { key: "medium", label: t("contact.structureSizes.medium"), value: "Medium structure (4–10 practitioners)", frValue: "Moyenne structure (4-10 praticien)" },
    { key: "large", label: t("contact.structureSizes.large"), value: "Large structure (10+ practitioners)", frValue: "Grande structure (plus de 10 praticiens)" },
  ];

  const objectives = [
    { key: "rentabilite", label: t("contact.objectivesList.rentabilite"), value: "Improve profitability", frValue: "Optimiser la rentabilité de mon activité" },
    { key: "patients", label: t("contact.objectivesList.patients"), value: "Attract more patients", frValue: "Attirer plus de patients" },
    { key: "temps", label: t("contact.objectivesList.temps"), value: "Save time on administration", frValue: "Gagner du temps sur la gestion administrative" },
    { key: "digitaliser", label: t("contact.objectivesList.digitaliser"), value: "Digitize / automate my practice", frValue: "Digitaliser / automatiser ma pratique" },
    { key: "ia", label: t("contact.objectivesList.ia"), value: "Discover AI's potential", frValue: "Découvrir les apports de l'intelligence artificielle" },
  ];

  const professionMapping: { [key: string]: string } = {
    "Doctor": "Médecin",
    "Manager": "Manager",
    "Assistant": "Assistant.e",
    "Secretary": "Secrétaire",
    "Other": "Autre"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 py-20 px-4">
      <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Contact us to learn more about Nextmotion
            </h1>
            <p className="text-gray-600 mb-8">
              Tell us where you want to go, we&apos;ll show you how to get there.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First name<span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    value={formData.firstname}
                    onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                    placeholder="Enter your first name"
                    required
                    className="h-11"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last name<span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    value={formData.lastname}
                    onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                    placeholder="Enter your last name"
                    required
                    className="h-11"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email<span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email address"
                  required
                  className="h-11"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country<span className="text-red-500">*</span></label>
                <Select onValueChange={handleCountryChange} required>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {COUNTRIES.map((country) => (
                      <SelectItem key={country.countryCode} value={country.countryCode}>
                        {country.flag} {country.countryName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone number<span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="w-[60px] h-11 border border-gray-300 rounded-md flex items-center justify-center text-gray-600">
                    {selectedCountry?.flag || '+'}
                  </div>
                  <Input
                    type="tel"
                    value={formData.phoneDisplay}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    disabled={!selectedCountry}
                    placeholder={selectedCountry?.phonePlaceholder || "Select your country first"}
                    required
                    className="flex-1 h-11"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your profession<span className="text-red-500">*</span>
                </label>
                <Select onValueChange={(val) => setFormData({ ...formData, profession: val })} required>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select your profession" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Doctor">{t("contact.professions.medecin")}</SelectItem>
                    <SelectItem value="Manager">{t("contact.professions.manager")}</SelectItem>
                    <SelectItem value="Assistant">{t("contact.professions.assistant")}</SelectItem>
                    <SelectItem value="Secretary">{t("contact.professions.secretaire")}</SelectItem>
                    <SelectItem value="Other">{t("contact.professions.autre")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  How many practitioners work in your structure?<span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  {structureSizes.map((size) => (
                    <label
                      key={size.key}
                      className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.structure_size === size.value
                          ? "border-[#1650ef] bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="structure_size"
                        checked={formData.structure_size === size.value}
                        onChange={() => handleStructureSizeToggle(size.value)}
                        className="w-4 h-4 text-[#1650ef]"
                      />
                      <span className="text-sm text-gray-700">{size.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  What is your main objective?
                </label>
                <div className="space-y-3">
                  {objectives.map((obj) => (
                    <label
                      key={obj.key}
                      className={`flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.objectives.includes(obj.value)
                          ? "border-[#1650ef] bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Checkbox
                        checked={formData.objectives.includes(obj.value)}
                        onCheckedChange={() => handleObjectiveToggle(obj.value)}
                        className="mt-0.5"
                      />
                      <span className="text-sm text-gray-700">{obj.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional information
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1650ef] text-white font-semibold py-6 rounded-lg hover:bg-[#0e3cd3] transition disabled:opacity-50 disabled:cursor-not-allowed text-base h-auto"
              >
                {isSubmitting ? t("contact.sending") : t("contact.submit")}
              </Button>

              {success && <p className="text-green-600 font-semibold text-center">{success}</p>}
              {error && <p className="text-red-600 font-semibold text-center">{error}</p>}
            </form>
          </div>
      </div>
    </div>
  );
}
