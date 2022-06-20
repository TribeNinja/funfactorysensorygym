import { BiBuildingHouse } from "react-icons/bi";

export default {
  name: "commercial",
  title: "Commercials",
  icon: BiBuildingHouse,
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
      name: "body",
      title: "Body",
      type: "blockContent",
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
    {
      name: "gymInformation",
      title: "Gym information",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "location",
          title: "Location of the gym",
          type: "string",
        },
        {
          title: "Geolocation",
          name: "geolocation",
          type: "geopoint",
        },
        {
          name: "website",
          title: "Website",
          type: "url",
        },
        {
          name: "email",
          title: "E-mail",
          type: "string",
        },
        {
          name: "secondaryEmail",
          title: "Secondary E-mail",
          type: "string",
        },
        {
          name: "phone",
          title: "Phone",
          type: "number",
        },
        {
          name: "secondaryPhone",
          title: "Secondary Phone",
          type: "number",
        },
        {
          name: "socials",
          title: "Social informations",
          type: "object",
          fields: [
            {
              name: "instagram",
              title: "Instagram",
              type: "url",
            },
            {
              name: "twitter",
              title: "Twitter",
              type: "url",
            },
            {
              name: "facebook",
              title: "Facebook",
              type: "url",
            },
            {
              name: "linkedin",
              title: "LinkedIn",
              type: "url",
            },
            {
              name: "youtube",
              title: "YouTube",
              type: "url",
            },
          ],
        },
      ],
    },

    {
      name: "tags",
      title: "Therapy",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
      validation: (Rule) => [Rule.required(), Rule.unique()],
    },
    // {
    //   name: "publishedAt",
    //   title: "Published at",
    //   type: "datetime",
    //   validation: (Rule) => Rule.required(),
    // },
  ],
};
