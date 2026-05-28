import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = window.innerWidth <= 900;

  const navLinkStyle = {
    textDecoration: "none",
    color: "#0057A4",
    fontWeight: "500",
    position: "relative",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const mobileLinkStyle = {
    fontSize: "20px",
    color: "#0057A4",
    textDecoration: "none",
    fontWeight: "500",
    transition: "0.3s ease",
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isMobile ? "18px 20px" : "24px 80px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(16px)",
        backgroundColor: "rgba(248,246,241,0.88)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.03)",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}

      <a
        href="#"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          textDecoration: "none",
        }}
      >
        <img
          src={logo}
          alt="Systech Logo"
          style={{
            width: isMobile ? "55px" : "72px",
            height: isMobile ? "55px" : "72px",
            objectFit: "contain",
          }}
        />

        <div>
          <h2
            style={{
              fontSize: isMobile ? "30px" : "46px",
              fontFamily: "Georgia, serif",
              fontWeight: "500",
              lineHeight: "1",
              color: "#0057A4",
            }}
          >
            Systech
          </h2>

          <p
            style={{
              letterSpacing: isMobile ? "4px" : "5px",
              color: "#D96B2B",
              fontSize: isMobile ? "10px" : "11px",
            }}
          >
            SOLUTIONS
          </p>
        </div>
      </a>

      {/* Desktop Menu */}

      {!isMobile && (
        <div
          style={{
            display: "flex",
            gap: "50px",
            fontSize: "20px",
            alignItems: "center",
          }}
        >
          {[
            ["About", "#about"],
            ["Solutions", "#solutions"],
            ["Clients", "#clients"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={navLinkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.opacity = "0.72";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.opacity = "1";
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      {/* Desktop Button */}

      {!isMobile && (
        <a href="#contact" style={{ textDecoration: "none" }}>
          <button
            style={{
              background: "linear-gradient(135deg, #0057A4, #013B73)",
              color: "white",
              border: "none",
              padding: "18px 34px",
              borderRadius: "14px",
              fontSize: "18px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(0,87,164,0.16)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 16px 36px rgba(0,87,164,0.22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(0,87,164,0.16)";
            }}
          >
            Get in Touch
          </button>
        </a>
      )}

      {/* Mobile Hamburger */}

      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "14px",
            border: "1px solid rgba(0,87,164,0.10)",
            backgroundColor: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(10px)",
            cursor: "pointer",
            fontSize: "24px",
            color: "#0057A4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "0.3s ease",
          }}
        >
          ☰
        </button>
      )}

      {/* Mobile Menu */}

      {menuOpen && isMobile && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            backgroundColor: "rgba(248,246,241,0.96)",
            backdropFilter: "blur(18px)",
            display: "flex",
            flexDirection: "column",
            padding: "34px",
            gap: "26px",
            borderBottom: "1px solid rgba(0,87,164,0.08)",
            boxShadow: "0 14px 40px rgba(0,0,0,0.06)",
          }}
        >
          {[
            ["About", "#about"],
            ["Solutions", "#solutions"],
            ["Clients", "#clients"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={mobileLinkStyle}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
