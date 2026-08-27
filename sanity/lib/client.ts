import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // `false` if you want to ensure fresh data (e.g. drafts, most recent posts)
  useCdn: process.env.NODE_ENV === "production",
});
