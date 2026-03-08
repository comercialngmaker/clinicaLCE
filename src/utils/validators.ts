export const getValidUrl = (url?: string): string => {
  const baseUrl = new URL(import.meta.env.SITE);

  const ensureTrailingSlash = (u: URL): string => {
    if (!u.pathname.endsWith("/")) u.pathname = `${u.pathname}/`;
    return u.toString();
  };

  if (url?.startsWith("/")) {
    try {
      const redirectUrl = new URL(url, baseUrl);
      const isValid = redirectUrl.origin === baseUrl.origin;
      return isValid
        ? ensureTrailingSlash(redirectUrl)
        : ensureTrailingSlash(baseUrl);
    } catch {
      return ensureTrailingSlash(baseUrl);
    }
  }
  return ensureTrailingSlash(baseUrl);
};
