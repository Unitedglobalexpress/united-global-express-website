export const metadata = {
  title: "United Global Express LLC",
  description:
    "Warehousing, pallet storage, fulfillment, cross-docking, container unloading and logistics services in New Jersey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
}
