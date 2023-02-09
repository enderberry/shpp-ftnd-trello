export default function useLoading(
  func: (...args: any[]) => any,
  setLoading?: (loading: boolean) => void
): (...args: any[]) => Promise<void> {
  return async function (...args): Promise<void> {
    setLoading?.(true);
    await func(...args);
    setLoading?.(false);
  };
}
