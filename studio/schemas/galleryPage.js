export default {
  name: "galleryPage",
  title: "Gallery Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      hidden: true,
      initialValue: "Page Info",
    },
    {
      title: "Section One",
      name: "sectionOne",
      type: "object",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Youtube video ID",
          name: "videoId",
          type: "string",
          validation: (Rule) => Rule.required(),
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
      ],
    },
    {
      title: "Section Two",
      name: "sectionTwo",
      type: "object",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: "Section Three",
      name: "sectionThree",
      type: "object",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
};
