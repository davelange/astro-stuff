// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: null,
  // Get this from tina.io
  token: null,
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: "Callout",
                label: "Callout",
                fields: [
                  {
                    name: "text",
                    label: "Content",
                    type: "string"
                  }
                ]
              },
              {
                name: "Banner",
                label: "Banner",
                fields: [
                  {
                    name: "title",
                    label: "Title",
                    type: "string"
                  },
                  {
                    name: "description",
                    label: "Description",
                    type: "string"
                  },
                  {
                    name: "image",
                    label: "Image",
                    type: "image"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
