import logo from "../assets/logo.png";

function Footer() {
  const isMobile = window.innerWidth <= 768;

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ================= CTA SECTION ================= */}

      <section
        style={{
          background: "#f8f6f1",
          padding: isMobile ? "90px 24px" : "140px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Engineering Elements */}

        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "240px",
            height: "240px",
            border: "18px solid rgba(217,107,43,0.08)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "200px",
            height: "200px",
            border: "14px solid rgba(0,87,164,0.08)",
            borderRadius: "50%",
          }}
        />

        {/* Subtle PCB line */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: "30%",
            borderTop: "1px solid rgba(0,87,164,0.12)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            right: 0,
            width: "25%",
            borderTop: "1px solid rgba(217,107,43,0.14)",
          }}
        />

        {/* Floating Nodes */}
        {[20, 40, 60, 80].map((x, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "48%",
              left: `${x}%`,
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "rgba(217,107,43,0.22)",
              boxShadow: "0 0 14px rgba(217,107,43,0.12)",
            }}
          />
        ))}

        {/* Glass CTA Card */}

        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(0,87,164,0.08)",
              borderRadius: "36px",
              padding: isMobile ? "50px 28px" : "80px 70px",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "50px",
              boxShadow: "0 25px 70px rgba(0,0,0,0.05)",
            }}
          >
            {/* LEFT */}

            <div style={{ flex: 1 }}>
              <p
                style={{
                  color: "#D96B2B",
                  letterSpacing: "4px",
                  fontSize: "14px",
                  marginBottom: "18px",
                }}
              >
                READY TO BUILD?
              </p>

              <h2
                style={{
                  fontSize: isMobile ? "42px" : "68px",
                  lineHeight: "1.05",
                  fontFamily: "Georgia, serif",
                  fontWeight: "400",
                  color: "#0057A4",
                  marginBottom: "26px",
                }}
              >
                Ready to build
                <span
                  style={{
                    color: "#D96B2B",
                    fontStyle: "italic",
                  }}
                >
                  {" "}
                  reliable electronic
                </span>{" "}
                solutions?
              </h2>

              <p
                style={{
                  fontSize: isMobile ? "18px" : "22px",
                  lineHeight: "1.9",
                  color: "#555",
                  maxWidth: "650px",
                }}
              >
                Trusted procurement, hardware sourcing, and enterprise-grade
                electronic component solutions tailored to your requirements.
              </p>
            </div>

            {/* RIGHT */}

            <div>
              <a
                href="#contact"
                style={{
                  textDecoration: "none",
                }}
              >
                <button
                  style={{
                    background: "linear-gradient(135deg, #0057A4, #013B73)",
                    color: "white",
                    border: "none",
                    padding: "22px 38px",
                    borderRadius: "18px",
                    fontSize: "18px",
                    cursor: "pointer",
                    transition: "0.3s ease",
                    boxShadow: "0 14px 30px rgba(0,87,164,0.22)",
                  }}
                >
                  Discuss Requirements →
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN FOOTER ================= */}

      <section
        style={{
          background: "linear-gradient(135deg, #1E252B 0%, #2A323A 100%)",
          color: "white",
          padding: isMobile ? "70px 24px 30px" : "90px 80px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* PCB Background */}

        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.06,
          }}
        >
          <path
            d="M0 100 H220 V160 H380"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />

          <path
            d="M1200 180 H980 V280 H760"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />

          <path
            d="M0 420 H200 V340 H400"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1fr 1.5fr",
            gap: "50px",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* BRAND */}

          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "24px",
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "70px",
                }}
              />

              <div>
                <h3
                  style={{
                    fontSize: "34px",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  Systech
                </h3>

                <p
                  style={{
                    letterSpacing: "3px",
                    color: "#D96B2B",
                    fontSize: "11px",
                  }}
                >
                  SOLUTIONS
                </p>
              </div>
            </div>

            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                lineHeight: "1.9",
                maxWidth: "360px",
              }}
            >
              Trusted procurement, hardware sourcing, and electronic component
              expertise supporting enterprise and government organizations.
            </p>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h4 style={headingStyle}>Quick Links</h4>

            <div style={columnStyle}>
              <a href="#about" style={linkStyle}>
                About
              </a>
              <a href="#solutions" style={linkStyle}>
                Solutions
              </a>
              <a href="#industries" style={linkStyle}>
                Industries
              </a>
              <a href="#clients" style={linkStyle}>
                Clients
              </a>
              <a href="#contact" style={linkStyle}>
                Contact
              </a>
            </div>
          </div>

          {/* SERVICES */}

          <div>
            <h4 style={headingStyle}>Services</h4>

            <div style={columnStyle}>
              <p>Hardware Supply</p>
              <p>Electronic Procurement</p>
              <p>Enterprise Support</p>
              <p>Consultation</p>
            </div>
          </div>

          {/* BUSINESS DETAILS */}

          <div>
            <h4 style={headingStyle}>Business Details</h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                color: "rgba(255,255,255,0.78)",
                lineHeight: "1.8",
              }}
            >
              <p>Established: 2006</p>
              <p>GSTIN: 36AMIPM5989N1Z0</p>
              <p>MSME: UDYAM-TS-20-0016159</p>
              <p>Email: systechsol@gmail.com</p>
              <p>Phone: +91 9849737912</p>
              <p>PVN Colony, Mirzalguda, Malkajgiri, Hyderabad 500047</p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            marginTop: "60px",
            paddingTop: "26px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            gap: "16px",
            color: "rgba(255,255,255,0.60)",
            fontSize: "14px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <p>© 2026 Systech Solutions. All rights reserved.</p>

          <p>GSTIN: 36AMIPM5989N1Z0 | Established 2006</p>
        </div>
      </section>
    </footer>
  );
}

const headingStyle = {
  color: "#D96B2B",
  marginBottom: "22px",
  fontSize: "18px",
};

const columnStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  color: "rgba(255,255,255,0.75)",
};

const linkStyle = {
  color: "rgba(255,255,255,0.75)",
  textDecoration: "none",
  transition: "0.3s ease",
};

export default Footer;
