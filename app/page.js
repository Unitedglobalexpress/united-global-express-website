export const metadata = {
  title:
    "United Global Express LLC | 3PL Warehousing, Pallet Storage & Container Unloading in New Jersey",
  description:
    "United Global Express LLC provides 3PL warehousing, pallet storage, container unloading, cross-docking, drayage coordination and freight brokerage in Branchburg, New Jersey and near Port Newark.",
  alternates: {
    canonical: "https://unitedglobalexpress.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "United Global Express LLC | 3PL Warehousing & Container Unloading",
    description:
      "Mobile-friendly warehouse and logistics website for customers looking for storage, cross-dock, unloading and 3PL support in New Jersey.",
    url: "https://unitedglobalexpress.com",
    siteName: "United Global Express LLC",
    type: "website",
  },
};

const services = [
  {
    title: "Container Unloading",
    text: "Fast devanning and unloading support for importers and businesses moving freight through New Jersey.",
  },
  {
    title: "Pallet Storage",
    text: "Flexible short-term and ongoing pallet storage for overflow inventory and warehouse support.",
  },
  {
    title: "3PL Fulfillment",
    text: "Pick, pack and shipping support for eCommerce brands, distributors and growing businesses.",
  },
  {
    title: "Cross-Docking",
    text: "Efficient transfer and handling to keep freight moving with less storage time and faster turnaround.",
  },
  {
    title: "Drayage Coordination",
    text: "Local coordination support near Port Newark and across the NJ / NYC region.",
  },
  {
    title: "Freight Brokerage",
    text: "Practical freight solutions backed by service-first communication and industry experience.",
  },
];

const coreRates = [
  {
    service: "Pallet Reload",
    price: "$10 / pallet",
    note: '40" x 48" pallets. 10-pallet minimum charge.',
  },
  {
    service: "Pallet Storage",
    price: "$5 / day or $70 / month per pallet",
    note: "Storage charges start after 1 hour.",
  },
  {
    service: "Pallet",
    price: "$15 / pallet",
    note: "",
  },
  {
    service: "Pallet Wrapping",
    price: "$15 / pallet",
    note: "",
  },
  {
    service: "Pallet Restock",
    price: "$80 / pallet",
    note: "",
  },
  {
    service: "Pallet Oversize Reload",
    price: "$20 / pallet",
    note: "",
  },
  {
    service: "Floor Loaded Goods Cross-Dock",
    price: "$0.69 / cube",
    note: "",
  },
  {
    service: "Floor Goods Storage",
    price: "$0.05 / cube / day",
    note: "",
  },
  {
    service: "Final Destination Delivery",
    price: "TBD / mile",
    note: "",
  },
];

const scheduleRates = [
  {
    service: "Operation",
    price: "24 / 7",
    note: "Available every day",
  },
  {
    service: "Regular Hours",
    price: "Monday - Friday, 8 AM - 5 PM",
    note: "",
  },
  {
    service: "After Hours - Past 5 PM",
    price: "$150",
    note: "Flat rate",
  },
  {
    service: "After Hours - Past 8 PM",
    price: "$250",
    note: "Flat rate",
  },
  {
    service: "Weekends and Holidays",
    price: "$350",
    note: "Flat rate",
  },
];

const yardRates = [
  {
    service: "Trailer Monthly Parking",
    price: "$500",
    note: "",
  },
  {
    service: "Trailer Daily Parking",
    price: "$100",
    note: "",
  },
  {
    service: "Yard Pull - 1 Time",
    price: "$50",
    note: "",
  },
];

const reasons = [
  "24/7 operations",
  "Near Port Newark",
  "Responsive communication",
  "Flexible warehouse support",
  "Local NJ / NYC coverage",
  "Practical pricing",
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "United Global Express LLC",
    url: "https://unitedglobalexpress.com",
    image: "https://unitedglobalexpress.com/logo.png",
    email: "info@unitedglobalexpress.com",
    telephone: "+1-848-228-3535",
    areaServed: [
      "Branchburg, New Jersey",
      "Central New Jersey",
      "Port Newark",
      "New York City",
    ],
    description:
      "3PL warehousing, pallet storage, container unloading, cross-docking, drayage coordination and freight brokerage in New Jersey.",
  };

  return (
    <main className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="siteHeader">
        <div className="container nav">
          <a href="/" className="brand">
            <img
              src="/logo.png"
              alt="United Global Express LLC logo"
              className="logo"
            />
            <div>
              <div className="brandName">United Global Express LLC</div>
              <div className="brandSub">Warehousing & Logistics</div>
            </div>
          </a>

          <div className="navActions">
            <a href="tel:8482283535" className="navLink">
              Call Now
            </a>
            <a href="mailto:info@unitedglobalexpress.com" className="navLink">
              Email
            </a>
            <a href="#quote" className="button buttonPrimary">
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container heroGrid">
          <div className="heroCard">
            <div className="eyebrow">Serving New Jersey + NYC Region</div>
            <h1>
              3PL Warehousing, Container Unloading & Pallet Storage Near Port
              Newark
            </h1>
            <p className="heroText">
              United Global Express LLC provides practical warehouse and
              logistics support for importers, eCommerce brands, distributors
              and trucking companies across New Jersey and near New York City.
            </p>

            <div className="heroButtons">
              <a href="#quote" className="button buttonPrimary">
                Request Quote
              </a>
              <a href="tel:8482283535" className="button buttonSecondary">
                Call 848-228-3535
              </a>
            </div>

            <div className="miniStats">
              <span>24/7 Operations</span>
              <span>Near Port Newark</span>
              <span>Flexible Storage</span>
            </div>
          </div>

          <div className="infoPanel">
            <div className="infoPanelTitle">Core Services</div>
            <ul className="checkList">
              <li>Container Unloading</li>
              <li>Pallet Storage</li>
              <li>3PL Fulfillment</li>
              <li>Cross-Docking</li>
              <li>Drayage Coordination</li>
              <li>Freight Brokerage</li>
            </ul>

            <div className="panelDivider" />

            <div className="infoPanelTitle">Why Businesses Call Us</div>
            <ul className="reasonList">
              {reasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionIntro">
            <span className="sectionTag">Services</span>
            <h2>Warehouse support built for real freight movement</h2>
            <p>
              Mobile-friendly, easy to contact, and clear for customers searching
              from Google Maps on their phone.
            </p>
          </div>

          <div className="serviceGrid">
            {services.map((service) => (
              <article key={service.title} className="card">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt" id="pricing">
        <div className="container">
          <div className="sectionIntro">
            <span className="sectionTag">Pricing</span>
            <h2>Warehouse price list</h2>
            <p>
              Clear pricing helps phone users decide faster. You can edit any
              rate later in one place.
            </p>
          </div>

          <div className="priceGrid">
            {coreRates.map((item) => (
              <article key={item.service} className="priceCard">
                <div className="priceService">{item.service}</div>
                <div className="priceValue">{item.price}</div>
                {item.note ? <p className="priceNote">{item.note}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twoCol">
          <div className="panel">
            <div className="panelHeader">Warehouse schedule price list</div>
            <div className="rateStack">
              {scheduleRates.map((item) => (
                <div key={item.service} className="rateRow">
                  <div>
                    <strong>{item.service}</strong>
                    {item.note ? <span className="muted"> — {item.note}</span> : null}
                  </div>
                  <div className="rateValue">{item.price}</div>
                </div>
              ))}
            </div>
            <a href="tel:8482283535" className="callBar">
              Call for appointment 24/7 — 848-228-3535
            </a>
          </div>

          <div className="panel">
            <div className="panelHeader">Trailer / yard pricing</div>
            <div className="rateStack">
              {yardRates.map((item) => (
                <div key={item.service} className="rateRow">
                  <div>
                    <strong>{item.service}</strong>
                  </div>
                  <div className="rateValue">{item.price}</div>
                </div>
              ))}
            </div>
            <p className="customNote">
              Large accounts, recurring projects and long-term warehouse support
              can be priced individually based on volume and scope.
            </p>
          </div>
        </div>
      </section>

      <section className="section sectionDark">
        <div className="container seoBlock">
          <div>
            <span className="sectionTag sectionTagDark">Service Area</span>
            <h2>Branchburg warehouse support with access to Port Newark and NYC</h2>
            <p>
              We serve businesses looking for warehousing in Branchburg, pallet
              storage in Central New Jersey, container unloading near Port Newark,
              cross-docking, drayage coordination and flexible 3PL support near
              New York City.
            </p>
          </div>

          <div className="seoCard">
            <div className="seoCardTitle">Good for local search</div>
            <ul className="checkList light">
              <li>Warehouse in Branchburg, NJ</li>
              <li>Container unloading near Port Newark</li>
              <li>Pallet storage in New Jersey</li>
              <li>3PL warehouse near NYC</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="quote">
        <div className="container quoteWrap">
          <div className="sectionIntro left">
            <span className="sectionTag">Contact</span>
            <h2>Request pricing or warehouse availability</h2>
            <p>
              Call or email us for storage, unloading, cross-dock, trailer
              parking and local logistics support.
            </p>
          </div>

          <div className="contactCards">
            <a href="tel:8482283535" className="contactCard">
              <span className="contactLabel">Phone</span>
              <strong>848-228-3535</strong>
            </a>
            <a
              href="mailto:info@unitedglobalexpress.com"
              className="contactCard"
            >
              <span className="contactLabel">Email</span>
              <strong>info@unitedglobalexpress.com</strong>
            </a>
            <div className="contactCard">
              <span className="contactLabel">Hours</span>
              <strong>24 / 7 Operations</strong>
            </div>
            <div className="contactCard">
              <span className="contactLabel">Location</span>
              <strong>Branchburg, New Jersey</strong>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div>© {new Date().getFullYear()} United Global Express LLC</div>
          <div>Warehousing • 3PL • Container Unloading • Pallet Storage</div>
        </div>
      </footer>

      <div className="mobileBar">
        <a href="tel:8482283535">Call</a>
        <a href="mailto:info@unitedglobalexpress.com">Email</a>
        <a href="#quote">Quote</a>
      </div>

      <style jsx>{`
        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f4f7fb;
          color: #0f172a;
        }

        * {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
        }

        .container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .siteHeader {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #e5e7eb;
        }

        .nav {
          min-height: 88px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding-top: 14px;
          padding-bottom: 14px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          color: inherit;
          min-width: 0;
        }

        .logo {
          height: 72px;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          display: block;
        }

        .brandName {
          font-size: 22px;
          font-weight: 800;
          line-height: 1.1;
        }

        .brandSub {
          font-size: 14px;
          color: #475569;
          margin-top: 4px;
        }

        .navActions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .navLink {
          color: #0b3a82;
          text-decoration: none;
          font-weight: 700;
          padding: 10px 12px;
          border-radius: 10px;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border-radius: 12px;
          padding: 14px 18px;
          font-weight: 800;
          transition: 0.2s ease;
        }

        .buttonPrimary {
          background: #f59e0b;
          color: #111827;
        }

        .buttonSecondary {
          background: #ffffff;
          color: #0b3a82;
          border: 2px solid #dbeafe;
        }

        .hero {
          padding: 32px 0 20px;
          background:
            radial-gradient(circle at top right, rgba(245, 158, 11, 0.14), transparent 30%),
            linear-gradient(180deg, #eef4ff 0%, #f4f7fb 100%);
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 24px;
          align-items: stretch;
        }

        .heroCard,
        .infoPanel,
        .card,
        .priceCard,
        .panel,
        .contactCard,
        .seoCard {
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
        }

        .heroCard {
          padding: 28px;
        }

        .eyebrow,
        .sectionTag {
          display: inline-flex;
          align-items: center;
          padding: 8px 12px;
          border-radius: 999px;
          background: #dbeafe;
          color: #0b3a82;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .sectionTagDark {
          background: rgba(245, 158, 11, 0.18);
          color: #fbbf24;
        }

        h1 {
          margin: 0 0 16px;
          font-size: clamp(34px, 6vw, 64px);
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        h2 {
          margin: 0 0 12px;
          font-size: clamp(28px, 4vw, 42px);
          line-height: 1.1;
        }

        h3 {
          margin: 0 0 10px;
          font-size: 22px;
        }

        .heroText,
        .sectionIntro p,
        .card p,
        .customNote,
        .seoBlock p {
          color: #475569;
          line-height: 1.7;
          font-size: 17px;
        }

        .heroButtons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .miniStats {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 22px;
        }

        .miniStats span {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 999px;
          padding: 9px 12px;
          font-size: 13px;
          font-weight: 700;
        }

        .infoPanel {
          padding: 28px;
          background: linear-gradient(180deg, #0b3a82 0%, #0a2d63 100%);
          color: #ffffff;
        }

        .infoPanelTitle {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 14px;
        }

        .checkList,
        .reasonList {
          margin: 0;
          padding-left: 18px;
          line-height: 1.9;
        }

        .reasonList li,
        .checkList li {
          margin-bottom: 4px;
        }

        .light {
          color: #ffffff;
        }

        .panelDivider {
          height: 1px;
          background: rgba(255, 255, 255, 0.18);
          margin: 18px 0;
        }

        .section {
          padding: 72px 0;
        }

        .sectionAlt {
          background: #eef4ff;
        }

        .sectionDark {
          background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
          color: #ffffff;
        }

        .sectionIntro {
          max-width: 760px;
          margin-bottom: 28px;
        }

        .sectionIntro.left {
          margin-bottom: 0;
        }

        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .card {
          padding: 24px;
        }

        .priceGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .priceCard {
          padding: 22px;
          border: 1px solid #dbeafe;
        }

        .priceService {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .priceValue {
          font-size: 26px;
          font-weight: 900;
          color: #0b3a82;
          margin-bottom: 10px;
        }

        .priceNote {
          margin: 0;
          color: #64748b;
          line-height: 1.6;
        }

        .twoCol {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .panel {
          padding: 24px;
        }

        .panelHeader {
          font-size: 24px;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .rateStack {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .rateRow {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          padding: 16px 0;
          border-bottom: 1px solid #e5e7eb;
        }

        .rateValue {
          font-weight: 900;
          color: #0b3a82;
          white-space: nowrap;
          text-align: right;
        }

        .muted {
          color: #64748b;
        }

        .callBar {
          display: block;
          margin-top: 18px;
          text-align: center;
          text-decoration: none;
          padding: 16px 18px;
          border-radius: 16px;
          background: #fbbf24;
          color: #111827;
          font-weight: 900;
        }

        .seoBlock {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 24px;
          align-items: center;
        }

        .seoCard {
          padding: 24px;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .seoCardTitle {
          font-size: 20px;
          font-weight: 900;
          margin-bottom: 14px;
        }

        .quoteWrap {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 24px;
          align-items: start;
        }

        .contactCards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .contactCard {
          padding: 20px;
          text-decoration: none;
          color: inherit;
        }

        .contactLabel {
          display: block;
          font-size: 13px;
          color: #64748b;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          font-weight: 800;
        }

        .footer {
          padding: 24px 0 96px;
          background: #0f172a;
          color: #cbd5e1;
        }

        .footerInner {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          font-size: 14px;
        }

        .mobileBar {
          display: none;
        }

        @media (max-width: 980px) {
          .heroGrid,
          .twoCol,
          .seoBlock,
          .quoteWrap,
          .serviceGrid,
          .priceGrid {
            grid-template-columns: 1fr;
          }

          .contactCards {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 760px) {
          .container {
            padding: 0 16px;
          }

          .nav {
            align-items: flex-start;
            flex-direction: column;
          }

          .brand {
            width: 100%;
          }

          .logo {
            height: 64px;
          }

          .brandName {
            font-size: 18px;
          }

          .brandSub {
            font-size: 13px;
          }

          .navActions {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 10px;
          }

          .navLink,
          .buttonPrimary {
            width: 100%;
            text-align: center;
            justify-content: center;
            padding: 12px 10px;
          }

          .hero {
            padding-top: 18px;
          }

          .heroCard,
          .infoPanel,
          .card,
          .priceCard,
          .panel,
          .contactCard,
          .seoCard {
            border-radius: 18px;
          }

          .heroCard,
          .infoPanel,
          .panel {
            padding: 20px;
          }

          h1 {
            font-size: 40px;
          }

          .heroText,
          .sectionIntro p,
          .card p,
          .customNote,
          .seoBlock p {
            font-size: 16px;
          }

          .rateRow {
            flex-direction: column;
            align-items: flex-start;
          }

          .rateValue {
            white-space: normal;
            text-align: left;
          }

          .contactCards {
            grid-template-columns: 1fr;
          }

          .footer {
            padding-bottom: 92px;
          }

          .mobileBar {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            z-index: 100;
            background: #ffffff;
            border-top: 1px solid #dbeafe;
            box-shadow: 0 -10px 30px rgba(15, 23, 42, 0.12);
          }

          .mobileBar a {
            text-align: center;
            text-decoration: none;
            color: #0b3a82;
            font-weight: 900;
            padding: 16px 10px;
          }

          .mobileBar a:last-child {
            background: #f59e0b;
            color: #111827;
          }
        }
      `}</style>
    </main>
  );
}
