import markdown from "@wcj/markdown-to-html";
import textFormatter from "./textFormatter";

export const parseToHtml = (text: string) => {
  if (text.includes("*/*")) {
    return textFormatter(text);
  }
  const parsed = markdown(text).toString();
  return parsed;
};
