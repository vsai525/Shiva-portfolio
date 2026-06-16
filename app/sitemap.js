export default function sitemap() {
  const base = "https://deepak.dev"; // ← update to your real domain when you deploy
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
