import { z } from "zod";

export const paginationSchema = z.object({
  page: z.number().int().min(1, 'Page must be at least 1').default(1),
  perPage: z.number().int().min(1, 'Per page must be at least 1').max(100, 'Per page cannot exceed 100').default(10),
});

export const validateForm = <T>(schema: z.ZodSchema<T>, data: unknown): { isValid: boolean; errors: Record<string, string[]>; data?: T } => {
  try {
    const validatedData = schema.parse(data);
    return { isValid: true, errors: {}, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string[]> = {};
      error.errors.forEach((err) => {
        const field = err.path.join('.');
        if (!errors[field]) {
          errors[field] = [];
        }
        errors[field].push(err.message);
      });
      return { isValid: false, errors };
    }
    return { isValid: false, errors: { _form: ['Validation failed'] } };
  }
};
