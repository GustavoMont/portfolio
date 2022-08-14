export default interface Input {
  label: string;
  value: string;
  name: string;
  onChange: (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
