import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  // Location of Post source files (relative to `contentDirPath`)
  filePathPattern: "posts/*.mdx",
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "About the post",
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Post],
});
