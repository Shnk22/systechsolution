import { useEffect, useState } from "react";
function Hero() {
  const [animate, setAnimate] = useState(false);
  const isMobile = window.innerWidth <= 768;
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "88vh",
        backgroundColor: "#f8f6f1",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        paddingTop: isMobile ? "90px" : "120px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {/* Grid Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,87,164,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,87,164,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "160px 160px",
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "120px",
          left: "120px",
          width: "250px",
          height: "250px",
          border: "1px solid rgba(0,87,164,0.08)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "120px",
          right: "150px",
          width: "180px",
          height: "180px",
          border: "1px solid rgba(217,107,43,0.08)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "260px",
          right: "250px",
          width: "10px",
          height: "10px",
          backgroundColor: "rgba(0,87,164,0.12)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "200px",
          left: "250px",
          width: "150px",
          borderTop: "1px solid rgba(0,87,164,0.08)",
          transform: "rotate(-25deg)",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Trust Text */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: isMobile ? "16px" : "40px",
            marginBottom: "45px",
            letterSpacing: "4px",
            fontSize: isMobile ? "12px" : "14px",
            color: "#F2B705",

            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0px)" : "translateY(20px)",

            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <p>• 20+ YEARS</p>
          <p>• GOVERNMENT SUPPORT</p>
          <p>• ENTERPRISE SOLUTIONS</p>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: isMobile ? "50px" : "92px",
            lineHeight: "0.95",
            letterSpacing: "-2px",
            fontFamily: "Georgia, serif",
            fontWeight: "500",
            maxWidth: isMobile ? "95%" : "850px",
            margin: "0 auto",
            color: "#0057A4",
            opacity: animate ? 1 : 0,

            transform: animate ? "translateY(0px)" : "translateY(35px)",

            transition: "opacity 1s ease 0.25s, transform 1s ease 0.25s",
          }}
        >
          Reliable Hardware &
          <br />
          <span
            style={{
              fontStyle: "italic",
              color: "#D96B2B",
            }}
          >
            Electronic Component Solutions
          </span>
        </h1>

        {/* Paragraph */}
        <p
          style={{
            maxWidth: isMobile ? "95%" : "760px",
            margin: "35px auto",
            fontSize: isMobile ? "18px" : "24px",
            color: "#555",
            lineHeight: "1.8",
            opacity: animate ? 1 : 0,

            transform: animate ? "translateY(0px)" : "translateY(30px)",

            transition: "opacity 1s ease 0.45s, transform 1s ease 0.45s",
          }}
        >
          Supporting Government and Enterprise requirements through trusted
          procurement, consultation, and hardware expertise.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            opacity: animate ? 1 : 0,

            transform: animate ? "translateY(0px)" : "translateY(30px)",

            transition: "opacity 1s ease 0.65s, transform 1s ease 0.65s",
          }}
        >
          <a href="#solutions" style={{ textDecoration: "none" }}>
            <button
              style={{
                background: "linear-gradient(135deg, #0057A4, #013B73)",
                color: "white",
                border: "none",
                padding: "18px 36px",
                borderRadius: "14px",
                fontSize: "18px",
                cursor: "pointer",
                minWidth: isMobile ? "260px" : "auto",
                transition: "all 0.3s ease",
                boxShadow: "0 10px 30px rgba(0,87,164,0.14)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-4px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 18px 40px rgba(0,87,164,0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0,87,164,0.14)";
              }}
            >
              Explore Solutions
            </button>
          </a>
          <a href="#contact" style={{ textDecoration: "none" }}>
            <button
              style={{
                border: "1px solid rgba(0,87,164,0.18)",
                background: "transparent",
                padding: "18px 36px",
                borderRadius: "14px",
                fontSize: "18px",
                cursor: "pointer",
                minWidth: isMobile ? "260px" : "auto",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.background = "rgba(255,255,255,0.55)";
                e.currentTarget.style.boxShadow =
                  "0 14px 30px rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
