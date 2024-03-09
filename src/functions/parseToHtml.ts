import markdown from "@wcj/markdown-to-html";

export const parseToHtml = (text: string) => {
  return markdown(text).toString();
};
