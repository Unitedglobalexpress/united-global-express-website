import Link from "next/link";

export const metadata = {
  title:
    "Container Unloading New Jersey | United Global Express Cross Dock & Fulfillment",
  description:
    "Container unloading, palletizing, floor-loaded freight unloading, staging, restacking and warehouse support in Branchburg, NJ near Port Newark.",
  keywords: [
    "container unloading New Jersey",
    "container unloading NJ",
    "container unloading near Port Newark",
    "floor loaded container unloading",
    "warehouse unloading NJ",
    "palletizing service New Jersey",
    "Branchburg NJ warehouse",
    "container devanning New Jersey",
  ],
  alternates: {
    canonical: "https://unitedglobalexpress.com/container-unloading-new-jersey",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Container Unloading New Jersey | United Global Express",
    description:
      "Container unloading, palletizing, staging and warehouse support in Branchburg, NJ near Port Newark.",
    url: "https://unitedglobalexpress.com/container-unloading-new-jersey",
    siteName: "United Global Express Cross Dock & Fulfillment",
    type: "website",
  },
};

export default function ContainerUnloadingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "United Global Express Cross Dock & Fulfillment",
    legalName: "United Global Express LLC",
    url: "https://unitedglobalexpress.com/container-unloading-new-jersey",
    image: "https://unitedglobalexpress.com/logo.png",
    email: "info@unitedglobalexpress.com",
    telephone: "+1-848-228-3535",
    address: {
      "@type": "PostalAddress",
      streetAddress: "34 Columbia Rd",
      addressLocality: "Branchburg",
      addressRegion: "NJ",
      postalCode: "08876",
      addressCountry: "US",
    },
    areaServed: [
      "Branchburg, New Jersey",
      "Central New Jersey",
      "Port Newark",
      "New York City",
      "New Jersey",
    ],
    description:
      "Container unloading, palletizing, staging, restacking and warehouse support in Branchburg, New Jersey near Port Newark.",
  };

  return (
    <main className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="siteHeader">
        <div className="container nav">
          <Link href="/" className="brand">
            <img
              src="/logo.png"
              alt="United Global Express Cross Dock & Fulfillment logo"
              className="logo"
            />
            <div className="brandText">
              <div className="brandName">United Global Express</div>
              <div className="brandSub">Cross Dock & Fulfillment</div>
            </div>
          </Link>

          <div className="navActions">
            <a href="tel:8482283535" className="navLink">Call</a>
            <a href="mailto:info@unitedglobalexpress.com" className="navLink">Email</a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=34+Columbia+Rd,+Branchburg,+NJ+08876"
              className="navLink"
              target="_blank"
              rel="noreferrer"
            >
              Directions
            </a>
            <a href="#quote" className="button buttonPrimary">Get Quote</a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container heroGrid">
          <div className="heroCard">
            <div className="eyebrow">
              Branchburg, NJ • Central NJ • Near Port Newark
            </div>

            <h1>Container Unloading Services in New Jersey</h1>

            <p className="heroText">
              United Global Express Cross Dock & Fulfillment provides container unloading,
              floor-loaded freight unloading, palletizing, staging, restacking and warehouse
              support in Branchburg, NJ near Port Newark.
            </p>

            <p className="heroText">
              We support importers, distributors, freight forwarders, trucking companies and
              local businesses that need containers unloaded, freight organized, pallets built,
              and cargo prepared for storage, reload or delivery.
            </p>

            <div className="heroButtons">
              <a href="#quote" className="button buttonPrimary">Request Quote</a>
              <a href="tel:8482283535" className="button buttonSecondary">
                Call 848-228-3535
              </a>
            </div>
          </div>

          <div className="infoPanel">
            <div className="infoPanelTitle">Container Support</div>
            <ul className="checkList">
              <li>Floor-loaded container unloading</li>
              <li>Palletizing and staging</li>
              <li>Restacking and rework</li>
              <li>Shrink wrap and labeling support</li>
              <li>Short-term pallet storage</li>
              <li>Reload and cross-dock support</li>
              <li>Photo proof available</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionIntro">
            <span className="sectionTag">Service Details</span>
            <h2>Fast container unloading for real warehouse problems</h2>
            <p>
              Containers can create delays when freight is floor-loaded, mixed, unstable,
              rejected, or not ready for final delivery. We help unload, organize, palletize,
              restack and stage freight so it can keep moving.
            </p>
          </div>

          <div className="serviceGrid">
            <article className="card">
              <h3>Floor-Loaded Containers</h3>
              <p>
                Unloading support for floor-loaded cartons, mixed freight and loose goods
                that need to be palletized or staged.
              </p>
            </article>

            <article className="card">
              <h3>Palletizing & Staging</h3>
              <p>
                Freight can be sorted, stacked, wrapped and prepared for storage, pickup,
                reload or delivery.
              </p>
            </article>

            <article className="card">
              <h3>Restacking & Rework</h3>
              <p>
                Support for shifted freight, damaged pallets, rejected loads, unstable pallets
                and reload preparation.
              </p>
            </article>

            <article className="card">
              <h3>Short-Term Storage</h3>
              <p>
                Temporary pallet storage available when freight needs to wait for pickup,
                delivery appointment, inspection or reload.
              </p>
            </article>

            <article className="card">
              <h3>Cross-Dock Support</h3>
              <p>
                Unload, stage and reload freight into another trailer, box truck or pickup
                when the cargo needs to move fast.
              </p>
            </article>

            <article className="card">
              <h3>Photo Proof</h3>
              <p>
                We can document freight condition before, during and after unloading to help
                protect the customer and reduce disputes.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container twoCol">
          <div className="panel">
            <div className="panelHeader">Common container jobs</div>
            <ul className="checkList dark">
              <li>Import container unloading</li>
              <li>Floor-loaded freight unloading</li>
              <li>Carton unloading and palletizing</li>
              <li>Pallet restocking and reloads</li>
              <li>Short-term staging and storage</li>
              <li>Warehouse labor support</li>
            </ul>
          </div>

          <div className="panel">
            <div className="panelHeader">What we need to quote</div>
            <ul className="checkList dark">
              <li>Container size: 20 ft / 40 ft / 53 ft</li>
              <li>Freight type and approximate weight</li>
              <li>Floor-loaded or palletized</li>
              <li>Required pallet count</li>
              <li>Need for wrapping, labeling or sorting</li>
              <li>Pickup / delivery timing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section sectionDark">
        <div className="container seoBlock">
          <div>
            <span className="sectionTag sectionTagDark">New Jersey Warehouse Support</span>
            <h2>Container unloading near Port Newark and Central New Jersey</h2>
            <p>
              Our Branchburg, NJ warehouse supports container unloading, palletizing,
              staging, short-term storage, restacking and reload work for companies moving
              freight through New Jersey, Port Newark, Central NJ and the NYC region.
            </p>
          </div>

          <div className="seoCard">
            <div className="seoCardTitle">Services related to container unloading</div>
            <ul className="checkList light">
              <li>Container unloading NJ</li>
              <li>Floor-loaded freight unloading</li>
              <li>Palletizing service New Jersey</li>
              <li>Cross-dock near Port Newark</li>
              <li>Pallet restocking and rework</li>
              <li>Short-term pallet storage</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="quote">
        <div className="container quoteWrap">
          <div className="sectionIntro left">
            <span className="sectionTag">Contact</span>
            <h2>Request container unloading pricing</h2>
            <p>
              Send container size, freight type, pallet count, photos if available, and timing.
              We can quote faster when the scope is clear.
            </p>
          </div>

          <div className="contactCards">
            <a href="tel:8482283535" className="contactCard">
              <span className="contactLabel">Phone</span>
              <strong>848-228-3535</strong>
            </a>

            <a href="mailto:info@unitedglobalexpress.com" className="contactCard">
              <span className="contactLabel">Email</span>
              <strong>info@unitedglobalexpress.com</strong>
            </a>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=34+Columbia+Rd,+Branchburg,+NJ+08876"
              className="contactCard"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contactLabel">Directions</span>
              <strong>Open in Google Maps</strong>
            </a>

            <div className="contactCard">
              <span className="contactLabel">Location</span>
              <strong>34 Columbia Rd, Branchburg, NJ 08876</strong>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div>
            © {new Date().getFullYear()} United Global Express Cross Dock & Fulfillment
            <br />
            <span className="legalLine">Operated by United Global Express LLC</span>
          </div>
          <div>Cross-Dock • Fulfillment • Container Unloading • Pallet Restocking</div>
        </div>
      </footer>

      <div className="mobileBar">
        <a href="tel:8482283535">Call</a>
        <a href="mailto:info@unitedglobalexpress.com">Email</a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=United+Global+Express+LLC+Branchburg+NJ"
          target="_blank"
          rel="noreferrer"
        >
          Maps
        </a>
        <a href="#quote">Quote</a>
      </div>

      <style>{`
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f4f7fb;
          color: #0f172a;
        }
        * { box-sizing: border-box; }
        .page { min-height: 100vh; }
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
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #e5e7eb;
        }
        .nav {
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 4px 0;
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
          height: 94px;
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
          background: #eff6ff;
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
        .buttonPrimary { background: #f59e0b; color: #111827; }
        .buttonSecondary {
          background: #ffffff;
          color: #0b3a82;
          border: 2px solid #dbeafe;
        }
        .hero {
          padding: 28px 0 20px;
          background:
            radial-gradient(circle at top right, rgba(245,158,11,0.14), transparent 30%),
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
        .panel,
        .contactCard,
        .seoCard {
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(15,23,42,0.08);
        }
        .heroCard { padding: 28px; }
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
          background: rgba(245,158,11,0.18);
          color: #fbbf24;
        }
        h1 {
          margin: 0 0 16px;
          font-size: clamp(34px, 5vw, 54px);
          line-height: 1.1;
          letter-spacing: -0.02em;
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
        .infoPanel {
          padding: 28px;
          background: linear-gradient(180deg, #0b3a82 0%, #0a2d63 100%);
          color: #ffffff;
        }
        .infoPanelTitle,
        .panelHeader,
        .seoCardTitle {
          font-size: 22px;
          font-weight: 900;
          margin-bottom: 16px;
        }
        .checkList {
          margin: 0;
          padding-left: 18px;
          line-height: 1.9;
        }
        .light { color: #ffffff; }
        .dark { color: #0f172a; }
        .section { padding: 72px 0; }
        .sectionAlt { background: #eef4ff; }
        .sectionDark {
          background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
          color: #ffffff;
        }
        .sectionIntro {
          max-width: 760px;
          margin-bottom: 28px;
        }
        .sectionIntro.left { margin-bottom: 0; }
        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }
        .card,
        .panel,
        .contactCard,
        .seoCard {
          padding: 24px;
        }
        .twoCol,
        .seoBlock,
        .quoteWrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .seoCard {
          background: rgba(255,255,255,0.08);
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.12);
        }
        .contactCards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }
        .contactCard {
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
        .legalLine {
          display: inline-block;
          margin-top: 6px;
          font-size: 12px;
          color: #94a3b8;
        }
        .mobileBar { display: none; }

        @media (max-width: 980px) {
          .heroGrid,
          .twoCol,
          .seoBlock,
          .quoteWrap,
          .serviceGrid {
            grid-template-columns: 1fr;
          }
          .contactCards {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 760px) {
          .container { padding: 0 16px; }
          .nav {
            align-items: flex-start;
            flex-direction: column;
          }
          .brand { width: 100%; }
          .logo { height: 64px; }
          .brandName { font-size: 18px; }
          .brandSub { font-size: 13px; }
          .navActions {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .navLink,
          .buttonPrimary {
            width: 100%;
            text-align: center;
            justify-content: center;
            padding: 12px 10px;
          }
          h1 { font-size: 38px; }
          .heroText,
          .sectionIntro p,
          .card p,
          .seoBlock p {
            font-size: 16px;
          }
          .contactCards { grid-template-columns: 1fr; }
          .footer { padding-bottom: 92px; }
          .mobileBar {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            z-index: 100;
            background: #ffffff;
            border-top: 1px solid #dbeafe;
            box-shadow: 0 -10px 30px rgba(15,23,42,0.12);
          }
          .mobileBar a {
            text-align: center;
            text-decoration: none;
            color: #0b3a82;
            font-weight: 900;
            padding: 16px 8px;
            font-size: 14px;
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
