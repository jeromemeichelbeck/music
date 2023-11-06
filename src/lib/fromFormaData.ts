import type z from "zod";

export function fromFormData<T>(formData: FormData, schema: z.Schema<T>) {
  const data = Object.fromEntries(formData.entries());

  return schema.parse(data);
}
