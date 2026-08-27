/**
 * Sanity Studio config, embedded into this Next.js app at /studio.
 * See https://www.sanity.io/docs/configuration
 */
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool(),
    // Vision lets you run GROQ queries from inside the Studio, dev-only convenience.
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
