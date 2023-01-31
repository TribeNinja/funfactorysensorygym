import { SiHomeassistant } from "react-icons/si";

export default {
  name: "categories",
  title: "Home categories",
  icon: SiHomeassistant,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
