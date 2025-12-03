import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";
import baseUrl from "@/lib/baseUrl";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disabled to always fetch fresh published data
  perspective: "published", // Only fetch published documents
  stega: {
    studioUrl: `${baseUrl}/studio`,
  },
});
