export default function dispatchCustomEvent(name: string): void {
  window.dispatchEvent(new CustomEvent(`x-${name}`));
}
