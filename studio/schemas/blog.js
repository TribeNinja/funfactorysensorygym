import { RiNewspaperLine } from "react-icons/ri";

export default {
  name: "blog",
  title: "Blogs",
  icon: RiNewspaperLine,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      validation: (Rule) =>
        Rule.max(68).error("Titles are usually better when its below 68"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 75,
      },
    },
    {
      name: "excerpt",
      description: "Write a short pararaph of this post (For SEO Purposes)",
      title: "Excerpt",
      rows: 5,
      type: "text",
      validation: (Rule) =>
        Rule.max(260).error(
          "SEO descriptions are usually better when its below 260"
        ),
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessiblity.",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
      preview: {
        select: {
          images: "images",
          image: "images.0",
        },
        prepare(selection) {
          const { images, image } = selection;

          return {
            title: `Gallery block of ${Object.keys(images).length} images`,
            subtitle: `Alt text: ${image.alt}`,
            media: image,
          };
        },
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
  ],
};
