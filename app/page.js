export const metadata = {
  title: "United Global Express LLC | 3PL Warehousing & Container Unloading Near Port Newark",
  description:
    "United Global Express LLC provides 3PL warehousing, pallet storage, fulfillment, cross-docking, container unloading, drayage coordination and freight brokerage in New Jersey and near NYC.",
};

const services = [
  {
    title: "Container Unloading",
    text: "Fast devanning and unloading support for importers and businesses moving freight through New Jersey.",
  },
  {
    title: "Pallet Storage",
    text: "Flexible short-term and ongoing pallet storage solutions for overflow inventory and warehouse support.",
  },
  {
    title: "3PL Fulfillment",
    text: "Reliable pick, pack, and shipping support for eCommerce brands, distributors, and growing businesses.",
  },
  {
    title: "Cross-Docking",
    text: "Efficient transfer and handling to keep freight moving with less storage time and faster turnaround.",
  },
  {
    title: "Drayage Coordination",
    text: "Support for container moves and local logistics coordination near Port Newark and the NJ/NYC region.",
  },
  {
    title: "Freight Brokerage",
    text: "Practical freight solutions backed by industry experience and a service-first approach.",
  },
];

const industries = [
  "Importers",
  "Amazon Sellers",
  "eCommerce Businesses",
  "Retailers",
  "Manufacturers",
  "Distributors",
  "Trucking Companies",
  "Overflow Inventory Clients",
];

const reasons = [
  "15+ years industry experience",
  "24/7 operations",
  "Fully insured",
  "Flexible storage solutions",
  "Fast container unloading",
  "Near Port Newark",
];

export default function Home() {
  return (
    <main style={styles.page}>
      <section style={styles.topBar}>
        <div style={styles.brandRow}>
         <img src="/36E94461-1540-4593-B925-D0DCA65E8AB7.PNG" style={{height:"80px"}} />
          <div>
            <div style={styles.brandName}>United Global Express LLC</div>
            <div style={styles.brandSub}>Warehousing & Logistics</div>
          </div>
        </div>

        <div style={styles.topActions}>
          <a href="tel:8482283535" style={styles.phoneLink}>848-228-3535</a>
          <a href="#quote" style={styles.primaryButton}>Get a Quote</a>
        </div>
      </section>

      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <div style={styles.badge}>Serving New Jersey + NYC Region</div>
          <h1 style={styles.heroTitle}>
            3PL Warehousing, Container Unloading & Pallet Storage Near Port Newark
          </h1>
          <p style={styles.heroText}>
            United Global Express LLC provides practical warehouse and logistics
            solutions for importers, eCommerce brands, distributors, and trucking
            companies across New Jersey and near New York City.
          </p>

          <div style={styles.heroButtons}>
            <a href="#quote" style={styles.primaryButton}>Get a Quote</a>
            <a href="tel:8482283535" style={styles.secondaryButton}>Call Now</a>
          </div>

          <div style={styles.trustRow}>
            <span>15+ Years Experience</span>
            <span>24/7 Operations</span>
            <span>Fully Insured</span>
          </div>
        </div>

        <div style={styles.heroCard}>
          <div style={styles.heroCardTitle}>Core Services</div>
          <ul style={styles.heroList}>
            <li>Container Unloading</li>
            <li>Pallet Storage</li>
            <li>3PL Fulfillment</li>
            <li>Cross-Docking</li>
            <li>Drayage Coordination</li>
            <li>Freight Brokerage</li>
          </ul>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Core Services</h2>
        <div style={styles.grid}>
          {services.map((service) => (
            <div key={service.title} style={styles.card}>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardText}>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.darkSection}>
        <div style={styles.twoCol}>
          <div>
            <h2 style={styles.sectionTitleLight}>Why Choose United Global Express</h2>
            <ul style={styles.listLight}>
              {reasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 style={styles.sectionTitleLight}>Industries We Serve</h2>
            <ul style={styles.listLight}>
              {industries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.infoWrap}>
          <div style={styles.infoCard}>
            <h2 style={styles.sectionTitle}>Service Area</h2>
            <p style={styles.cardText}>
              Branchburg, Central New Jersey, New Jersey, near New York City,
              and near Port Newark.
            </p>
          </div>

          <div id="quote" style={styles.quoteCard}>
            <h2 style={styles.sectionTitle}>Request a Quote</h2>
            <p style={styles.cardText}>
              Call or email us for warehousing, container unloading, pallet
              storage, fulfillment, and logistics support.
            </p>
            <p style={styles.contactLine}><strong>Phone:</strong> 848-228-3535</p>
            <p style={styles.contactLine}><strong>Email:</strong> info@unitedglobalexpress.com</p>
            <div style={styles.quoteButtons}>
              <a href="tel:8482283535" style={styles.primaryButton}>Call Now</a>
              <a href="mailto:info@unitedglobalexpress.com" style={styles.secondaryButton}>Email Us</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "#f7f9fc",
    color: "#0f172a",
    minHeight: "100vh",
  },
  topBar: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "16px",
  },
  brandRow: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },
  logoPlaceholder: {
    width: "56px",
    height: "56px",
    borderRadius: "14px",
    background: "linear-gradient(135deg, #0b3a82, #ff7a00)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "18px",
  },
  brandName: {
    fontSize: "22px",
    fontWeight: "700",
  },
  brandSub: {
    color: "#475569",
    fontSize: "14px",
  },
  topActions: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  phoneLink: {
    color: "#0b3a82",
    textDecoration: "none",
    fontWeight: "700",
  },
  hero: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "30px 20px 60px",
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: "28px",
    alignItems: "stretch",
  },
  heroLeft: {
    background: "#ffffff",
    borderRadius: "24px",
    padding: "42px",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
  },
  badge: {
    display: "inline-block",
    background: "#e8f0ff",
    color: "#0b3a82",
    padding: "8px 12px",
    borderRadius: "999px",
    fontWeight: "700",
    fontSize: "13px",
    marginBottom: "18px",
  },
  heroTitle: {
    fontSize: "46px",
    lineHeight: "1.08",
    margin: "0 0 16px",
  },
  heroText: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#334155",
    marginBottom: "24px",
  },
  heroButtons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    marginBottom: "22px",
  },
  trustRow: {
    display: "flex",
    gap: "18px",
    flexWrap: "wrap",
    color: "#334155",
    fontWeight: "600",
    fontSize: "14px",
  },
  heroCard: {
    background: "#0b3a82",
    color: "#fff",
    borderRadius: "24px",
    padding: "36px",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.12)",
  },
  heroCardTitle: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "18px",
  },
  heroList: {
    paddingLeft: "20px",
    lineHeight: "1.9",
    margin: 0,
  },
  section: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px 60px",
  },
  sectionTitle: {
    fontSize: "32px",
    marginBottom: "22px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "18px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
  },
  cardTitle: {
    marginTop: 0,
    marginBottom: "10px",
    fontSize: "22px",
  },
  cardText: {
    color: "#475569",
    lineHeight: "1.6",
    margin: 0,
  },
  darkSection: {
    background: "#0f172a",
    padding: "60px 20px",
    marginBottom: "60px",
  },
  twoCol: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
  },
  sectionTitleLight: {
    color: "#fff",
    fontSize: "30px",
    marginBottom: "18px",
  },
  listLight: {
    color: "#dbe4f0",
    lineHeight: "1.9",
    paddingLeft: "20px",
  },
  infoWrap: {
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gap: "20px",
  },
  infoCard: {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
  },
  quoteCard: {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
  },
  contactLine: {
    margin: "10px 0",
    color: "#0f172a",
  },
  quoteButtons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    marginTop: "16px",
  },
  primaryButton: {
    display: "inline-block",
    background: "#ff7a00",
    color: "#fff",
    padding: "14px 22px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "700",
  },
  secondaryButton: {
    display: "inline-block",
    background: "#ffffff",
    color: "#0b3a82",
    padding: "14px 22px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "700",
    border: "2px solid #0b3a82",
  },
};
