function About() {
  const isMobile = window.innerWidth <= 768;

  const highlights = [
    {
      title: "20+ Years",
      text: "Reliable industry experience",
    },
    {
      title: "Govt Support",
      text: "Trusted public sector solutions",
    },
    {
      title: "Enterprise",
      text: "Tailored procurement support",
    },
    {
      title: "Consultation",
      text: "Hardware & component expertise",
    },
  ];

  return (
    <section
      id="about"
      style={{
        backgroundColor: "#f8f6f1",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "90px 24px" : "140px 80px",
      }}
    >
      {/* SECTION NUMBER */}
      <p
        style={{
          position: "absolute",
          top: isMobile ? "40px" : "60px",
          left: isMobile ? "24px" : "80px",
          fontSize: isMobile ? "60px" : "90px",
          color: "rgba(0,87,164,0.06)",
          fontWeight: "600",
          zIndex: 0,
        }}
      >
        02
      </p>

      {/* BACKGROUND ELEMENTS */}

      {/* Top Left Ring */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          left: "-60px",
          width: isMobile ? "180px" : "260px",
          height: isMobile ? "180px" : "260px",
          border: "1px solid rgba(0,87,164,0.14)",
          borderRadius: "50%",
        }}
      />

      {/* Bottom Right Ring */}
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          right: "-50px",
          width: isMobile ? "160px" : "220px",
          height: isMobile ? "160px" : "220px",
          border: "1px solid rgba(217,107,43,0.12)",
          borderRadius: "50%",
        }}
      />

      {/* Blueprint Line */}
      <div
        style={{
          position: "absolute",
          top: isMobile ? "100px" : "120px",
          right: isMobile ? "20px" : "120px",
          width: isMobile ? "120px" : "220px",
          borderTop: "1px solid rgba(0,87,164,0.12)",
          transform: "rotate(-30deg)",
        }}
      />

      {/* Technical Dot */}
      <div
        style={{
          position: "absolute",
          top: isMobile ? "140px" : "180px",
          right: isMobile ? "40px" : "160px",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "rgba(0,87,164,0.20)",
        }}
      />

      {/* Bottom Accent System */}
      <div
        style={{
          position: "absolute",
          bottom: "120px",
          left: isMobile ? "20px" : "120px",
          width: isMobile ? "80px" : "140px",
          borderTop: "1px solid rgba(0,87,164,0.14)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "114px",
          left: isMobile ? "100px" : "255px",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "rgba(0,87,164,0.18)",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "50px" : "80px",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* LEFT SIDE */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              color: "#D96B2B",
              letterSpacing: "4px",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            ABOUT SYSTECH
          </p>

          <h2
            style={{
              fontSize: isMobile ? "40px" : "64px",
              lineHeight: "1.08",
              letterSpacing: "-1px",
              fontFamily: "Georgia, serif",
              fontWeight: "400",
              color: "#0057A4",
              marginBottom: "30px",
              maxWidth: "700px",
            }}
          >
            Two decades of trusted hardware and
            <span
              style={{
                color: "#D96B2B",
                fontStyle: "italic",
              }}
            >
              {" "}
              electronic component expertise.
            </span>
          </h2>

          <p
            style={{
              fontSize: isMobile ? "18px" : "22px",
              lineHeight: "1.9",
              color: "#555",
              maxWidth: "650px",
            }}
          >
            For over twenty years, Systech Solutions has supported government
            organizations and enterprise clients through reliable procurement,
            consultation, and tailored electronic component solutions.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "24px",
          }}
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              style={{
                padding: isMobile ? "28px" : "34px",
                borderRadius: "26px",
                border: "1px solid rgba(0,87,164,0.10)",
                background: "rgba(255,255,255,0.45)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 10px 35px rgba(0,0,0,0.03)",
                transition: "all 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px) scale(1.015)";

                e.currentTarget.style.boxShadow =
                  "0 28px 60px rgba(0,0,0,0.08)";

                e.currentTarget.style.border = "1px solid rgba(0,87,164,0.16)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px) scale(1)";

                e.currentTarget.style.boxShadow =
                  "0 10px 35px rgba(0,0,0,0.03)";

                e.currentTarget.style.border = "1px solid rgba(0,87,164,0.10)";
              }}
            >
              <h3
                style={{
                  color: "#0057A4",
                  fontSize: isMobile ? "24px" : "28px",
                  marginBottom: "12px",
                  fontFamily: "Georgia, serif",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.7",
                  fontSize: isMobile ? "15px" : "16px",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
