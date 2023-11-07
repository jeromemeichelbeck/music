"use server";

import { fromFormData } from "@/lib/utils/from-form-data.util";
import { insertBand, insertBandSchema } from "@/server/models/band.model";

export async function addBand(formData: FormData) {
  try {
    const band = fromFormData(formData, insertBandSchema);

    return insertBand(band);
  } catch (error) {
    console.log(error);
  }
}
