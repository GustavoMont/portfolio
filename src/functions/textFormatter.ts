export default function textFormatter(text: string) {
  const textReplacedWithStrongTag = text
    .replace(/\*\*/g, "<strong>")
    .replace(/\*\/\*/g, "</strong>");
  return textReplacedWithStrongTag;
}
