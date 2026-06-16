export default function robots() {
  const base = "https://deepak.dev"; // ← update to your real domain when you deploy
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
