export default interface Input {
  label: string;
  value: string;
  name: string;
  required?: boolean;
  onChange: (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}
