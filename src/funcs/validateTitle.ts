export default function validateTitle(title: string): boolean {
  return !!title.match(/^[a-z0-9\s._-]+$/i);
}
