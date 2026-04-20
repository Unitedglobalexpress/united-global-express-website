export const metadata = {
  title: "United Global Express LLC",
  description:
    "Warehousing, pallet storage, fulfillment, cross-docking, container unloading",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="6siwQgMp4yEf6xkxrSdtQwwxdynA6LkB479bW0p5oLE"
        />
      </head>
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
}
