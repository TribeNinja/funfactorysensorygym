import { MdCardGiftcard } from "react-icons/md";

export default {
  name: "giftcard",
  title: "Gift Cards",
  icon: MdCardGiftcard,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },

    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "inStock",
      title: "In stock?",
      type: "boolean",
      initialValue: true,
    },
  ],
};
