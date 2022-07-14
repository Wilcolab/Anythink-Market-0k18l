export function isValidURL(maybeUrl) {
  try {
    return Boolean(new URL(maybeUrl));
  } catch (_) {
    return false;
  }
}
