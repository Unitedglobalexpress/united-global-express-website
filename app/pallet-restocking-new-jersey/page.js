import Link from "next/link";

export const metadata = {
  title:
    "Pallet Restocking New Jersey | Pallet Rework & Reload | United Global Express",
  description:
    "Pallet restocking, pallet rework, sorting, shrink wrap, labeling, reload and rejected freight support in Branchburg, NJ near Port Newark.",
  keywords: [
    "pallet restocking New Jersey",
    "pallet rework NJ",
    "pallet restacking New Jersey",
    "rejected freight reload NJ",
    "warehouse rework New Jersey",
    "pallet reload near Port Newark",
    "Branchburg NJ warehouse rework",
  ],
  alternates: {
    canonical: "https://unitedglobalexpress.com/pallet-restocking-new-jersey",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PalletRestockingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "United Global Express Cross Dock & Fulfillment",
    legalName: "United Global Express LLC",
    url: "https://unitedglobalexpress.com/pallet-restocking-new-jersey",
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
    description:
      "Pallet restocking, pallet rework, sorting, shrink wrap, labeling and rejected freight reload support in Branchburg, New Jersey near Port Newark.",
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
            <div className="eyebrow">Branchburg, NJ • Near Port Newark • 24/7 by appointment</div>

            <h1>Pallet Restocking & Rework Services in New Jersey</h1>

            <p className="heroText">
              United Global Express Cross Dock & Fulfillment provides pallet restocking,
              pallet rework, sorting, shrink wrap, labeling and reload support in
              Branchburg, NJ near Port Newark.
            </p>

            <p className="heroText">
              We help trucking companies, importers, distributors and freight forwarders
              fix rejected freight, shifted pallets, mixed loads, unstable pallets and
              warehouse rework problems fast.
            </p>

            <div className="heroButtons">
              <a href="#quote" className="button buttonPrimary">Request Quote</a>
              <a href="tel:8482283535" className="button buttonSecondary">
                Call 848-228-3535
              </a>
            </div>
          </div>

          <div className="infoPanel">
            <div className="infoPanelTitle">Restocking Support</div>
            <ul className="checkList">
              <li>Pallet restocking</li>
              <li>Pallet rework</li>
              <li>Rejected freight reload</li>
              <li>Sorting and staging</li>
              <li>Shrink wrap support</li>
              <li>Labeling support</li>
              <li>Photo proof available</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionIntro">
            <span className="sectionTag">Service Details</span>
            <h2>Fix pallets before they cost you delivery delays</h2>
            <p>
              When freight is rejected, shifted, mixed, unstable or not delivery-ready,
              we can restock, rebuild, wrap, label and stage the freight for reload,
              delivery or short-term storage.
            </p>
          </div>

          <div className="serviceGrid">
            <article className="card">
              <h3>Pallet Restocking</h3>
              <p>Restocking and rebuilding pallets so freight is cleaner, safer and ready to move.</p>
            </article>

            <article className="card">
              <h3>Rejected Freight Reload</h3>
              <p>Support when a customer refuses freight, pallets shift, or a trailer needs rework before redelivery.</p>
            </article>

            <article className="card">
              <h3>Sorting & Staging</h3>
              <p>Separate mixed freight, organize cartons, stage pallets and prepare freight for pickup or storage.</p>
            </article>

            <article className="card">
              <h3>Shrink Wrap</h3>
              <p>Wrap pallets after rework to help stabilize freight before reload or delivery.</p>
            </article>

            <article className="card">
              <h3>Labeling Support</h3>
              <p>Basic labeling support for sorted, restacked or prepared pallets.</p>
            </article>

            <article className="card">
              <h3>Photo Proof</h3>
              <p>Before and after photos help protect the customer and reduce disputes.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section sectionDark">
        <div className="container seoBlock">
          <div>
            <span className="sectionTag sectionTagDark">Warehouse Rework</span>
            <h2>Pallet rework near Port Newark and Central New Jersey</h2>
            <p>
              We support pallet restocking, pallet rework, rejected freight reloads,
              shrink wrap, labeling and staging from our Branchburg, NJ warehouse.
            </p>
          </div>

          <div className="seoCard">
            <div className="seoCardTitle">Common jobs</div>
            <ul className="checkList light">
              <li>Rejected freight rework</li>
              <li>Shifted pallet restacking</li>
              <li>Mixed carton sorting</li>
              <li>Short-term staging</li>
              <li>Reload preparation</li>
              <li>Warehouse labor support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="quote">
        <div className="container quoteWrap">
          <div className="sectionIntro left">
            <span className="sectionTag">Contact</span>
            <h2>Request pallet restocking pricing</h2>
            <p>
              Send pallet count, photos, product type, delivery issue and timing.
              We quote faster when the scope is clear.
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

            <div className="contactCard">
              <span className="contactLabel">Location</span>
              <strong>34 Columbia Rd, Branchburg, NJ 08876</strong>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=34+Columbia+Rd,+Branchburg,+NJ+08876"
              className="contactCard"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contactLabel">Directions</span>
              <strong>Open in Google Maps</strong>
            </a>
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
        body { margin: 0; font-family: Arial, sans-serif; background: #f4f7fb; color: #0f172a; }
        * { box-sizing: border-box; }
        .page { min-height: 100vh; }
        .container { width: 100%; max-width: 1180px; margin: 0 auto; padding: 0 20px; }
        .siteHeader { position: sticky; top: 0; z-index: 50; background: rgba(255,255,255,0.96); backdrop-filter: blur(10px); border-bottom: 1px solid #e5e7eb; }
        .nav { min-height: 60px; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 4px 0; }
        .brand { display: flex; align-items: center; gap: 14px; text-decoration: none; color: inherit; min-width: 0; }
        .logo { height: 94px; width: auto; max-width: 100%; object-fit: contain; display: block; }
        .brandName { font-size: 22px; font-weight: 800; line-height: 1.1; }
        .brandSub { font-size: 14px; color: #475569; margin-top: 4px; }
        .navActions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; justify-content: flex-end; }
        .navLink { color: #0b3a82; text-decoration: none; font-weight: 700; padding: 10px 12px; border-radius: 10px; background: #eff6ff; }
        .button { display: inline-flex; align-items: center; justify-content: center; text-decoration: none; border-radius: 12px; padding: 14px 18px; font-weight: 800; }
        .buttonPrimary { background: #f59e0b; color: #111827; }
        .buttonSecondary { background: #ffffff; color: #0b3a82; border: 2px solid #dbeafe; }
        .hero { padding: 28px 0 20px; background: linear-gradient(180deg, #eef4ff 0%, #f4f7fb 100%); }
        .heroGrid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 24px; align-items: stretch; }
        .heroCard, .infoPanel, .card, .contactCard, .seoCard { background: #ffffff; border-radius: 24px; box-shadow: 0 10px 30px rgba(15,23,42,0.08); }
        .heroCard { padding: 28px; }
        .eyebrow, .sectionTag { display: inline-flex; padding: 8px 12px; border-radius: 999px; background: #dbeafe; color: #0b3a82; font-size: 13px; font-weight: 800; margin-bottom: 14px; }
        .sectionTagDark { background: rgba(245,158,11,0.18); color: #fbbf24; }
        h1 { margin: 0 0 16px; font-size: clamp(34px, 5vw, 54px); line-height: 1.1; letter-spacing: -0.02em; }
        h2 { margin: 0 0 12px; font-size: clamp(28px, 4vw, 42px); line-height: 1.1; }
        h3 { margin: 0 0 10px; font-size: 22px; }
        .heroText, .sectionIntro p, .card p, .seoBlock p { color: #475569; line-height: 1.7; font-size: 17px; }
        .heroButtons { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 24px; }
        .infoPanel { padding: 28px; background: linear-gradient(180deg, #0b3a82 0%, #0a2d63 100%); color: #ffffff; }
        .infoPanelTitle, .seoCardTitle { font-size: 22px; font-weight: 900; margin-bottom: 16px; }
        .checkList { margin: 0; padding-left: 18px; line-height: 1.9; }
        .light { color: #ffffff; }
        .section { padding: 72px 0; }
        .sectionDark { background: linear-gradient(180deg, #0f172a 0%, #111827 100%); color: #ffffff; }
        .sectionIntro { max-width: 760px; margin-bottom: 28px; }
        .sectionIntro.left { margin-bottom: 0; }
        .serviceGrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
        .card, .contactCard, .seoCard { padding: 24px; }
        .seoBlock, .quoteWrap { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .seoCard { background: rgba(255,255,255,0.08); color: #ffffff; border: 1px solid rgba(255,255,255,0.12); }
        .contactCards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
        .contactCard { text-decoration: none; color: inherit; }
        .contactLabel { display: block; font-size: 13px; color: #64748b; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 800; }
        .footer { padding: 24px 0 96px; background: #0f172a; color: #cbd5e1; }
        .footerInner { display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 14px; }
        .legalLine { display: inline-block; margin-top: 6px; font-size: 12px; color: #94a3b8; }
        .mobileBar { display: none; }

        @media (max-width: 980px) {
          .heroGrid, .seoBlock, .quoteWrap, .serviceGrid { grid-template-columns: 1fr; }
        }

        @media (max-width: 760px) {
          .container { padding: 0 16px; }
          .nav { align-items: flex-start; flex-direction: column; }
          .brand { width: 100%; }
          .logo { height: 64px; }
          .brandName { font-size: 18px; }
          .brandSub { font-size: 13px; }
          .navActions { width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
          .navLink, .buttonPrimary { width: 100%; text-align: center; justify-content: center; padding: 12px 10px; }
          h1 { font-size: 38px; }
          .heroText, .sectionIntro p, .card p, .seoBlock p { font-size: 16px; }
          .contactCards { grid-template-columns: 1fr; }
          .footer { padding-bottom: 92px; }
          .mobileBar { position: fixed; left: 0; right: 0; bottom: 0; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; z-index: 100; background: #ffffff; border-top: 1px solid #dbeafe; box-shadow: 0 -10px 30px rgba(15,23,42,0.12); }
          .mobileBar a { text-align: center; text-decoration: none; color: #0b3a82; font-weight: 900; padding: 16px 8px; font-size: 14px; }
          .mobileBar a:last-child { background: #f59e0b; color: #111827; }
        }
      `}</style>
    </main>
  );
}
