"use server";

import { fromFormData } from "@/lib/fromFormaData";
import { insertBand, insertBandSchema } from "@/server/models/bands";

export async function addBand(formData: FormData) {
  try {
    const band = fromFormData(formData, insertBandSchema);

    return insertBand(band);
  } catch (error) {
    console.log(error);
  }
}
