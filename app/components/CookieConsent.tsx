"use client";

import { useEffect, useState } from "react";
import { Cookie, Shield, X } from "lucide-react";

type CookiePrefs = {
  analytics: boolean;
  ads: boolean;
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [locale, setLocale] = useState<"en" | "fr">("en");

  useEffect(() => {
    const currentLocale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
    setLocale(currentLocale);

    try {
      const raw = localStorage.getItem("cookies_preferences");
      if (!raw) {
        setVisible(true);
      } else {
        const prefs: CookiePrefs = JSON.parse(raw);
        maybeLoadScripts(prefs);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const savePreference = (prefs: CookiePrefs) => {
    localStorage.setItem("cookies_preferences", JSON.stringify(prefs));
    setVisible(false);
    maybeLoadScripts(prefs);
  };

  const maybeLoadScripts = (prefs: CookiePrefs) => {
    if (prefs.ads) {
      if (!(window as any).fbq) {
        (function (f: any, b: any, e: any, n?: any, t?: any, s?: any) {
          if (f.fbq) return;
          n = f.fbq = function () {
            (n as any).callMethod ? (n as any).callMethod.apply(n, arguments) : (n as any).queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          (n as any).push = n;
          (n as any).loaded = true;
          (n as any).version = "2.0";
          (n as any).queue = [];
          t = b.createElement(e);
          t.async = true;
          t.src = "https://connect.facebook.net/en_US/fbevents.js";
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        })(window, document, "script");
        (window as any).fbq("init", "24288009300898224");
        (window as any).fbq("track", "PageView");
      }
    }
  };

  const content = {
    en: {
      title: "Cookie Preferences",
      description:
        "We use cookies and third-party tools (Meta Pixel, etc.) to improve your experience and for analytics purposes. You can manage your preferences below.",
      acceptAll: "Accept All",
      acceptAnalytics: "Analytics Only",
      rejectAll: "Reject All",
      privacy: "Privacy Policy",
    },
    fr: {
      title: "Préférences de cookies",
      description:
        "Nous utilisons des cookies et des outils tiers (Meta Pixel, etc.) pour améliorer votre expérience et à des fins d'analyse. Vous pouvez gérer vos préférences ci-dessous.",
      acceptAll: "Tout accepter",
      acceptAnalytics: "Analyse uniquement",
      rejectAll: "Tout refuser",
      privacy: "Politique de confidentialité",
    },
  };

  const t = content[locale];

  if (!visible) return null;

  return (
    <div
      id="cookie-consent"
      className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-5 duration-500"
    >
      <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-gray-50/50" />

          <div className="relative px-6 py-6 sm:px-8 sm:py-8">
            <button
              onClick={() => savePreference({ analytics: false, ads: false })}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1 pr-8">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30">
                    <Cookie className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                    {t.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                  {t.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-shrink-0">
                <button
                  id="accept-ads"
                  onClick={() => savePreference({ analytics: true, ads: true })}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-base"
                >
                  <span className="relative z-10">{t.acceptAll}</span>
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 transition-opacity group-hover:opacity-100" />
                </button>

                <button
                  id="accept-analytics"
                  onClick={() => savePreference({ analytics: true, ads: false })}
                  className="rounded-xl border-2 border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50 hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-base"
                >
                  {t.acceptAnalytics}
                </button>

                <button
                  id="reject-cookies"
                  onClick={() => savePreference({ analytics: false, ads: false })}
                  className="rounded-xl border-2 border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-500 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-base"
                >
                  {t.rejectAll}
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4">
              <Shield className="h-4 w-4 text-gray-400" />
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-gray-700 hover:decoration-gray-500"
              >
                {t.privacy}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


