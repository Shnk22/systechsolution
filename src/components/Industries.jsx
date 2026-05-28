function Industries() {
  const isMobile = window.innerWidth <= 768;

  const industries = [
    "Government Sector",
    "IT & Electronics",
    "Manufacturing",
    "Infrastructure",
    "Education",
    "Private Enterprises",
  ];

  return (
    <section
      id="industries"
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
        04
      </p>

      {/* BACKGROUND NETWORK */}
      <div
        style={{
          position: "absolute",
          top: "180px",
          left: "10%",
          width: "80%",
          height: "1px",
          background: "rgba(0,87,164,0.14)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "140px",
          right: "10%",
          width: "160px",
          borderTop: "1px solid rgba(217,107,43,0.16)",
        }}
      />

      {[15, 35, 55, 75].map((pos) => (
        <div
          key={pos}
          style={{
            position: "absolute",
            top: "175px",
            left: `${pos}%`,
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "rgba(217,107,43,0.22)",
          }}
        />
      ))}

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#D96B2B",
            letterSpacing: "4px",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          INDUSTRIES
        </p>

        <h2
          style={{
            fontSize: isMobile ? "40px" : "64px",
            lineHeight: "1.08",
            letterSpacing: "-1px",
            fontFamily: "Georgia, serif",
            fontWeight: "400",
            color: "#0057A4",
            marginBottom: "24px",
          }}
        >
          Industries we
          <span
            style={{
              color: "#D96B2B",
              fontStyle: "italic",
            }}
          >
            {" "}
            support.
          </span>
        </h2>

        <p
          style={{
            fontSize: isMobile ? "18px" : "22px",
            lineHeight: "1.9",
            color: "#555",
            maxWidth: "760px",
            margin: "0 auto 80px auto",
          }}
        >
          Supporting industries under one trusted system through reliable
          hardware, procurement, and tailored electronic component solutions.
        </p>

        {/* ROOF STRUCTURE */}
        <div
          style={{
            position: "relative",
            maxWidth: "950px",
            margin: "0 auto",
          }}
        >
          {/* Roof */}
          <div
            style={{
              width: isMobile ? "240px" : "420px",
              height: isMobile ? "100px" : "140px",
              margin: "0 auto",
              borderTop: "2px solid rgba(0,87,164,0.22)",
              borderLeft: "2px solid rgba(0,87,164,0.22)",
              borderRight: "2px solid rgba(0,87,164,0.22)",
              borderRadius: "240px 240px 0 0",
              position: "relative",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: isMobile ? "22px" : "32px",
                color: "#0057A4",
                fontFamily: "Georgia, serif",
              }}
            >
              Systech
            </div>
          </div>

          {/* Industry Pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {industries.map((industry) => (
              <div
                key={industry}
                style={{
                  padding: "18px 28px",
                  borderRadius: "999px",
                  border: "1px solid rgba(0,87,164,0.14)",
                  background: "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-5px) scale(1.03)";

                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.08)";

                  e.currentTarget.style.background = "rgba(255,255,255,0.82)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px) scale(1)";

                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.04)";

                  e.currentTarget.style.background = "rgba(255,255,255,0.55)";
                }}
              >
                <p
                  style={{
                    color: "#0057A4",
                    fontSize: isMobile ? "16px" : "18px",
                    fontWeight: "500",
                  }}
                >
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Industries;
