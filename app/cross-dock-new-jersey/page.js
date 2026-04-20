export const metadata = {
  title: "Cross-Dock Services in New Jersey | United Global Express LLC",
  description:
    "Cross-dock services in New Jersey near Port Newark. Fast freight transfers, pallet restocking, short-term storage and container unloading in Branchburg, NJ.",
};

export default function CrossDockPage() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f4f7fb", color: "#0f172a", minHeight: "100vh" }}>
      <section style={{ padding: "60px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <span
          style={{
            display: "inline-block",
            padding: "8px 12px",
            borderRadius: "999px",
            background: "#dbeafe",
            color: "#0b3a82",
            fontWeight: 700,
            fontSize: "13px",
            marginBottom: "16px",
          }}
        >
          Cross-Dock Services
        </span>

        <h1 style={{ fontSize: "48px", lineHeight: 1.1, marginBottom: "18px" }}>
          Cross-Dock Services in New Jersey Near Port Newark
        </h1>

        <p style={{ fontSize: "18px", lineHeight: 1.7, maxWidth: "850px", color: "#475569" }}>
          United Global Express LLC provides fast and reliable cross-dock services in New Jersey for
          importers, distributors, freight brokers and trucking companies. Our Branchburg location
          near Port Newark supports same-day freight transfers, pallet restocking, container unloading
          and short-term storage.
        </p>

 <div style={{ marginTop: "28px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
  <a
    href="/"
    style={{
      background: "#ffffff",
      color: "#0b3a82",
      textDecoration: "none",
      padding: "14px 18px",
      borderRadius: "12px",
      border: "2px solid #dbeafe",
      fontWeight: 800,
    }}
  >
    ← Home
  </a>

  <a
    href="tel:8482283535"
    style={{
      background: "#f59e0b",
      color: "#111827",
      textDecoration: "none",
      padding: "14px 18px",
      borderRadius: "12px",
      fontWeight: 800,
    }}
  >
    Call 848-228-3535
  </a>

  <a
    href="/#quote"
    style={{
      background: "#ffffff",
      color: "#0b3a82",
      textDecoration: "none",
      padding: "14px 18px",
      borderRadius: "12px",
      border: "2px solid #dbeafe",
      fontWeight: 800,
    }}
  >
    Request Quote
  </a>
</div>
      </section>

      <section style={{ padding: "0 20px 70px", maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            {
              title: "Fast Freight Transfer",
              text: "Move inbound freight quickly from one truck, trailer or container to outbound equipment without unnecessary delays.",
            },
            {
              title: "Container Unloading",
              text: "Unload floor-loaded and palletized freight near Port Newark with practical warehouse support.",
            },
            {
              title: "Pallet Restocking",
              text: "Restack shifted pallets, rebuild damaged freight and prepare loads for safe outbound shipping.",
            },
            {
              title: "Short-Term Storage",
              text: "Hold freight temporarily when delivery timing, dock schedules or routing need flexibility.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "24px",
                boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
              }}
            >
              <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>{item.title}</h2>
              <p style={{ lineHeight: 1.7, color: "#475569" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 20px 80px", maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            background: "#0b3a82",
            color: "#ffffff",
            borderRadius: "24px",
            padding: "32px",
          }}
        >
          <h2 style={{ fontSize: "34px", marginBottom: "16px" }}>
            Why businesses use our cross-dock service
          </h2>
          <ul style={{ lineHeight: 2, paddingLeft: "20px", margin: 0 }}>
            <li>Near Port Newark</li>
            <li>24/7 availability by appointment</li>
            <li>Cross-dock and pallet restocking support</li>
            <li>Container unloading and local warehouse handling</li>
            <li>Fast response for urgent freight situations</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
