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

 <section style={{ padding: "50px 20px", textAlign: "center" }}>
  <h3 style={{ fontSize: "22px", color: "#374151", marginBottom: "20px" }}>
    Certified & Trusted
  </h3>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "50px",
      flexWrap: "wrap",
    }}
  >
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        textAlign: "center",
      }}
    >
      <img
        src={badgeBlue}
        alt="Certification Badge"
        style={{ height: "200px", marginBottom: "10px" }}
      />
      <p style={{ fontWeight: "600", fontSize: "14px" }}>
        Certified Energy Compliance
      </p>
    </div>

    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        textAlign: "center",
      }}
    >
      <img
        src={cheers}
        alt="CHEERS Certified"
        style={{ height: "220px", marginBottom: "10px" }}
      />
      <p style={{ fontWeight: "600", fontSize: "14px" }}>
        CHEERS Registered Provider
      </p>
    </div>
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
      {
        title: "Title 24 Energy Code Compliance",
        desc: "Comprehensive Title 24 compliance services ensuring your project meets California energy code requirements from start to finish.",
      },
      {
        title: "HERS Field Verification",
        desc: "Certified HERS field verification including onsite inspections and testing to validate energy efficiency compliance.",
      },
      {
        title: "Energy Code Compliance Documentation",
        desc: "Accurate energy compliance documentation prepared and submitted to meet California Title 24 requirements.",
      },
      {
        title: "Duct Testing Coordination",
        desc: "Duct leakage testing and coordination to ensure HVAC systems meet required efficiency and compliance standards.",
      },
    ].map((service) => (
      <div
        key={service.title}
        style={{
          padding: "24px",
          borderRadius: "14px",
          background: "#f8fafc",
          border: "1px solid #e5e7eb",
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        }}
      >
        <h3 style={{ marginTop: 0 }}>{service.title}</h3>
        <p style={{ color: "#4b5563" }}>{service.desc}</p>
      </div>
    ))}
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
