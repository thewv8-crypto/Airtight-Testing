import React from "react";
import logo from "../logo.png";
import badgeBlue from "../BadgeBlue.png";
import cheers from "../CHEERS.png";

export default function App() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0, color: "#111827" }}>
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a, #0b4ea2)",
          color: "white",
          padding: "70px 24px",
          textAlign: "center",
        }}
      >
        <img
          src={logo}
          alt="Airtight Testing Logo"
          style={{
            width: "220px",
            maxWidth: "85%",
            marginBottom: "24px",
            background: "white",
            padding: "10px",
            borderRadius: "8px",
          }}
        />

        <h1 style={{ fontSize: "48px", margin: 0, fontWeight: 900 }}>
          Airtight Testing
        </h1>

        <h2 style={{ fontSize: "24px", marginTop: "12px", color: "#bfdbfe" }}>
          Certified Energy Code Compliance Rater
        </h2>

        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "24px auto" }}>
          Title 24 compliance support, HERS field verification, and inspection coordination
          for builders, contractors, and homeowners.
        </p>

        <a href="tel:8054719629">
          <button
            style={{
              background: "#ffffff",
              color: "#0b4ea2",
              padding: "16px 28px",
              border: "none",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "17px",
              cursor: "pointer",
              boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
            }}
          >
            Call Now: (805) 471-9629
          </button>
        </a>
      </section>

      <section style={{ padding: "40px 24px", textAlign: "center" }}>
        <h3 style={{ fontSize: "22px", color: "#374151" }}>
          Certified & Trusted
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            marginTop: "24px",
            flexWrap: "wrap",
          }}
        >
          <img
            src={badgeBlue}
            alt="Certification Badge"
            style={{
              height: "130px",
              filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.2))",
            }}
          />

          <img
            src={cheers}
            alt="CHEERS Badge"
            style={{
              height: "130px",
              filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.2))",
            }}
          />
        </div>
      </section>

      <section style={{ padding: "50px 24px", maxWidth: "1100px", margin: "auto" }}>
        <h2 style={{ fontSize: "32px", textAlign: "center" }}>Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {[
            "Title 24 Energy Code Compliance",
            "HERS Field Verification",
            "Energy Code Compliance Documentation",
            "Duct Testing Coordination",
          ].map((service) => (
            <div
              key={service}
              style={{
                padding: "24px",
                borderRadius: "14px",
                background: "#f8fafc",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              }}
            >
              <h3 style={{ marginTop: 0 }}>{service}</h3>
              <p style={{ color: "#4b5563" }}>
                Reliable compliance support to help keep projects moving toward approval.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#f1f5f9", padding: "50px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "auto" }}>
          <h2>Mission Statement</h2>
          <p style={{ fontSize: "18px", lineHeight: 1.7 }}>
            Our mission is to set the standard in energy code compliance by providing
            accurate, dependable verification services that help projects meet California
            Title 24 requirements with confidence.
          </p>
        </div>
      </section>

      <section style={{ padding: "50px 24px", maxWidth: "900px", margin: "auto" }}>
        <h2>Request an Inspection</h2>
        <p><strong>Serving:</strong> Santa Barbara, San Luis Obispo, and Monterey Counties</p>
        <p><strong>Phone:</strong> (805) 471-9629</p>
        <p><strong>Email:</strong> thewv8@gmail.com</p>

        <a href="mailto:thewv8@gmail.com?subject=Request%20for%20Inspection&body=Name:%0ACompany:%0APhone:%0AProject%20Address:%0AInspection%20Needed:%0APreferred%20Date:%0ANotes:">
          <button
            style={{
              background: "#0b4ea2",
              color: "white",
              padding: "14px 24px",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Request Inspection
          </button>
        </a>
      </section>

      <footer
        style={{
          background: "#0f172a",
          color: "white",
          textAlign: "center",
          padding: "24px",
        }}
      >
        © 2026 Airtight Testing | Certified Energy Code Compliance Rater
      </footer>
    </main>
  );
}
