function Solutions() {
  const isMobile = window.innerWidth <= 768;

  const solutions = [
    {
      title: "Hardware Component Supply",
      text: "Reliable sourcing of ICs, processors, modules, and essential electronic hardware.",
    },

    {
      title: "Electronic Procurement",
      text: "Requirement-based procurement support tailored to enterprise and government needs.",
    },

    {
      title: "Tailored Solution Support",
      text: "Helping clients identify suitable electronic components and hardware pathways.",
    },

    {
      title: "Government & Enterprise Support",
      text: "Trusted experience supporting institutional and private sector requirements.",
    },
  ];

  return (
    <section
      id="solutions"
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
          color: "rgba(0,87,164,0.08)",
          fontWeight: "600",
          zIndex: 0,
        }}
      >
        03
      </p>

      {/* BACKGROUND ELEMENTS */}

      {/* Top Left Ring */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          left: "-50px",
          width: isMobile ? "180px" : "240px",
          height: isMobile ? "180px" : "240px",
          border: "1px solid rgba(0,87,164,0.18)",
          borderRadius: "50%",
        }}
      />

      {/* Bottom Right Ring */}
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          right: "-50px",
          width: isMobile ? "150px" : "220px",
          height: isMobile ? "150px" : "220px",
          border: "1px solid rgba(217,107,43,0.16)",
          borderRadius: "50%",
        }}
      />

      {/* Blueprint Line */}
      <div
        style={{
          position: "absolute",
          top: "140px",
          right: isMobile ? "30px" : "120px",
          width: isMobile ? "120px" : "220px",
          borderTop: "1px solid rgba(0,87,164,0.18)",
          transform: "rotate(-30deg)",
        }}
      />

      {/* Technical Dot */}
      <div
        style={{
          position: "absolute",
          top: "180px",
          right: isMobile ? "50px" : "170px",
          width: "12px",
          height: "12px",
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
          width: isMobile ? "90px" : "160px",
          borderTop: "1px solid rgba(0,87,164,0.18)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "114px",
          left: isMobile ? "110px" : "285px",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "rgba(0,87,164,0.20)",
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
            SOLUTIONS
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
              maxWidth: "720px",
            }}
          >
            Solutions that
            <span
              style={{
                color: "#D96B2B",
                fontStyle: "italic",
              }}
            >
              {" "}
              power industries.
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
            Systech Solutions supports government organizations and enterprises
            through reliable sourcing, procurement, and tailored electronic
            component support designed around business requirements.
          </p>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "24px",
          }}
        >
          {solutions.map((item) => (
            <div
              key={item.title}
              style={{
                padding: isMobile ? "28px" : "34px",
                borderRadius: "26px",
                border: "1px solid rgba(0,87,164,0.12)",
                background: "rgba(255,255,255,0.50)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 10px 35px rgba(0,0,0,0.04)",
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
                  fontSize: isMobile ? "22px" : "26px",
                  marginBottom: "14px",
                  fontFamily: "Georgia, serif",
                  lineHeight: "1.3",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.8",
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

export default Solutions;
