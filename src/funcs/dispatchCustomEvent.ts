export default function dispatchCustomEvent(name: string, params?: object): void {
  window.dispatchEvent(new CustomEvent(`x-${name}`, { detail: params }));
}
