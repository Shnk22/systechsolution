function Clients() {
  const isMobile = window.innerWidth <= 768;

  const clients = [
    { name: "DRDO", top: "6%", left: "43%" },
    { name: "BEL", top: "24%", left: "10%" },
    { name: "HAL", top: "24%", right: "10%" },
    { name: "DRDL", bottom: "22%", left: "16%" },
    { name: "ECIL", bottom: "22%", right: "16%" },
    { name: "BDL", bottom: "8%", left: "43%" },
  ];

  return (
    <section
      id="clients"
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
        05
      </p>

      {/* ENGINEERING PCB BACKGROUND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.35,
          pointerEvents: "none",
        }}
      >
        {/* IC Chips */}
        {[
          { top: "8%", left: "5%", rotate: "-10deg" },
          { top: "14%", right: "6%", rotate: "8deg" },
          { bottom: "12%", left: "8%", rotate: "12deg" },
          { bottom: "10%", right: "8%", rotate: "-8deg" },
        ].map((chip, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: isMobile ? "90px" : "140px",
              height: isMobile ? "60px" : "90px",
              border: "1.5px solid rgba(0,87,164,0.22)",
              borderRadius: "12px",
              transform: `rotate(${chip.rotate})`,
              ...chip,
            }}
          >
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: `${10 + index * 10}%`,
                  left: "-14px",
                  width: "14px",
                  borderTop: "1px solid rgba(0,87,164,0.22)",
                }}
              />
            ))}

            {[...Array(8)].map((_, index) => (
              <div
                key={index + "right"}
                style={{
                  position: "absolute",
                  top: `${10 + index * 10}%`,
                  right: "-14px",
                  width: "14px",
                  borderTop: "1px solid rgba(0,87,164,0.22)",
                }}
              />
            ))}
          </div>
        ))}

        {/* PCB Traces */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <path
            d="M0 180 H280 V260 H420"
            stroke="rgba(0,87,164,0.20)"
            strokeWidth="2"
            fill="none"
          />

          <path
            d="M1000 160 H820 V300 H700"
            stroke="rgba(217,107,43,0.20)"
            strokeWidth="2"
            fill="none"
          />

          <path
            d="M0 520 H180 V450 H350"
            stroke="rgba(0,87,164,0.20)"
            strokeWidth="2"
            fill="none"
          />

          <path
            d="M1200 500 H950 V430 H780"
            stroke="rgba(217,107,43,0.20)"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Circuit Nodes */}
        {[
          { top: "20%", left: "28%" },
          { top: "32%", left: "35%" },
          { top: "18%", right: "26%" },
          { bottom: "22%", left: "30%" },
          { bottom: "26%", right: "28%" },
        ].map((dot, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "rgba(217,107,43,0.42)",
              boxShadow: "0 0 18px rgba(217,107,43,0.12)",
              ...dot,
            }}
          />
        ))}
      </div>

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
          TRUSTED PARTNERS
        </p>

        <h2
          style={{
            fontSize: isMobile ? "40px" : "64px",
            lineHeight: "1.08",
            fontFamily: "Georgia, serif",
            fontWeight: "400",
            color: "#0057A4",
            maxWidth: "900px",
            margin: "0 auto 24px auto",
          }}
        >
          Supporting
          <span
            style={{
              color: "#D96B2B",
              fontStyle: "italic",
            }}
          >
            {" "}
            mission-critical
          </span>{" "}
          organizations.
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
          Over two decades, Systech Solutions has supported government, defence,
          and enterprise organizations through trusted procurement, hardware
          expertise, and electronic component sourcing.
        </p>

        {!isMobile ? (
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "980px",
              height: "650px",
              margin: "0 auto",
            }}
          >
            {/* Connection Lines */}
            <svg
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            >
              {[
                ["50%", "50%", "46%", "12%"],
                ["50%", "50%", "16%", "28%"],
                ["50%", "50%", "84%", "28%"],
                ["50%", "50%", "22%", "76%"],
                ["50%", "50%", "78%", "76%"],
                ["50%", "50%", "46%", "92%"],
              ].map((line, i) => (
                <line
                  key={i}
                  x1={line[0]}
                  y1={line[1]}
                  x2={line[2]}
                  y2={line[3]}
                  stroke="rgba(0,87,164,0.18)"
                  strokeWidth="2"
                />
              ))}
            </svg>

            {/* Center Hub */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "260px",
                height: "260px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.72)",
                backdropFilter: "blur(14px)",
                border: "1.5px solid rgba(0,87,164,0.16)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 3,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "320px",
                  height: "320px",
                  borderRadius: "50%",
                  border: "1px dashed rgba(0,87,164,0.12)",
                }}
              />

              <h3
                style={{
                  fontSize: "36px",
                  color: "#0057A4",
                  fontFamily: "Georgia, serif",
                }}
              >
                Systech
              </h3>

              <p
                style={{
                  color: "#D96B2B",
                  letterSpacing: "2px",
                  fontSize: "14px",
                }}
              >
                TRUSTED SINCE 2005
              </p>
            </div>

            {/* Client Nodes */}
            {clients.map((client) => (
              <div
                key={client.name}
                style={{
                  position: "absolute",
                  ...client,
                  padding: "20px 30px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.72)",
                  border: "1px solid rgba(0,87,164,0.14)",
                  boxShadow: "0 14px 30px rgba(0,0,0,0.04)",
                  backdropFilter: "blur(10px)",
                  color: "#0057A4",
                  fontWeight: "500",
                  fontSize: "18px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  zIndex: 3,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-6px) scale(1.04)";

                  e.currentTarget.style.boxShadow =
                    "0 22px 45px rgba(0,0,0,0.08)";

                  e.currentTarget.style.background = "rgba(255,255,255,0.82)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px) scale(1)";

                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.04)";

                  e.currentTarget.style.background = "rgba(255,255,255,0.65)";
                }}
              >
                {client.name}
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                padding: "28px 42px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.72)",
                border: "1px solid rgba(0,87,164,0.14)",
              }}
            >
              <h3
                style={{
                  color: "#0057A4",
                  fontFamily: "Georgia, serif",
                  fontSize: "30px",
                }}
              >
                Systech
              </h3>
            </div>

            {clients.map((client) => (
              <div
                key={client.name}
                style={{
                  width: "100%",
                  maxWidth: "320px",
                  padding: "18px 28px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.72)",
                  border: "1px solid rgba(0,87,164,0.14)",
                  textAlign: "center",
                  color: "#0057A4",
                }}
              >
                {client.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Clients;
