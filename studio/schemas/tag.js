import { RiPsychotherapyLine } from "react-icons/ri";

export default {
  name: "tag",
  title: "Therapies",
  icon: RiPsychotherapyLine,
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
