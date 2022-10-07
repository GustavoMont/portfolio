export default function textFormatter(text: string) {
  const textReplacedWithStrongTag = text
    .replaceAll("**", "<strong>")
    .replaceAll("*/*", "</strong>");
  return textReplacedWithStrongTag;
}
