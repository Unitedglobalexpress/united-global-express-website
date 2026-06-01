export default function sitemap() {
  const baseUrl = "https://unitedglobalexpress.com";

  const routes = [
    "",
    "/cross-dock-new-jersey",
    "/container-unloading-new-jersey",
    "/pallet-restocking-new-jersey",
    "/pallet-storage-new-jersey",
    "/fulfillment-new-jersey",
    "/transloading-new-jersey",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.9,
  }));
}
