import logo from "../assets/logo.png";

function SplashScreen({ fadeOut }) {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeScale {
            from {
              opacity: 0;
              transform: scale(0.92);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes lineGrow {
            from {
              width: 0;
              opacity: 0;
            }
            to {
              width: 220px;
              opacity: 1;
            }
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.7;
            }
            50% {
              transform: scale(1.25);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0.7;
            }
          }

          @keyframes floatNode {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-6px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          @keyframes moveSignal {
            0% {
              left: 0%;
            }
            100% {
              left: 100%;
            }
          }

          @keyframes rotateChip {
            0% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(1deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
        `}
      </style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#f8f6f1",
          zIndex: 9999,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          transition: "opacity 0.9s ease, transform 0.9s ease",

          opacity: fadeOut ? 0 : 1,

          transform: fadeOut ? "scale(1.03)" : "scale(1)",
        }}
      >
        {/* BACKGROUND ELEMENTS */}

        {/* Circuit Lines */}
        <div
          style={{
            position: "absolute",
            top: "18%",
            left: 0,
            width: "34%",
            borderTop: "2px solid rgba(0,87,164,0.18)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "22%",
            right: 0,
            width: "28%",
            borderTop: "2px solid rgba(217,107,43,0.22)",
          }}
        />

        {/* IC CHIP */}
        <div
          style={{
            position: "absolute",
            top: "12%",
            left: "8%",
            width: isMobile ? "80px" : "140px",
            height: isMobile ? "55px" : "95px",
            border: "1.5px solid rgba(0,87,164,0.16)",
            borderRadius: "12px",
            animation: "rotateChip 6s ease-in-out infinite",
          }}
        />

        {/* Floating Nodes */}
        {[18, 35, 52, 70, 86].map((x, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${20 + i * 8}%`,
              left: `${x}%`,
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "rgba(217,107,43,0.45)",
              boxShadow: "0 0 14px rgba(217,107,43,0.25)",
              animation: `floatNode ${3 + i * 0.4}s ease-in-out infinite`,
            }}
          />
        ))}

        {/* CONTENT */}
        <div
          style={{
            textAlign: "center",
            position: "relative",
            zIndex: 3,
            padding: "20px",
          }}
        >
          {/* ESTABLISHED */}
          <p
            style={{
              color: "#D96B2B",
              letterSpacing: "5px",
              fontSize: isMobile ? "12px" : "14px",
              marginBottom: "22px",
              opacity: 0,
              animation: "fadeInUp 0.8s ease forwards",
              animationDelay: "0.4s",
            }}
          >
            ESTABLISHED 2006
          </p>

          {/* COMPANY NAME */}
          <div
            style={{
              opacity: 0,
              animation: "fadeScale 1s ease forwards",
              animationDelay: "0.9s",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: isMobile ? "85px" : "120px",
                marginBottom: "16px",
              }}
            />

            <h1
              style={{
                fontSize: isMobile ? "56px" : "90px",
                color: "#0057A4",
                fontFamily: "Georgia, serif",
                fontWeight: "500",
                marginBottom: "6px",
              }}
            >
              Systech
            </h1>

            <p
              style={{
                letterSpacing: "5px",
                color: "#D96B2B",
                fontSize: isMobile ? "12px" : "15px",
              }}
            >
              SOLUTIONS
            </p>
          </div>

          {/* LINE */}
          <div
            style={{
              width: "220px",
              height: "2px",
              background: "rgba(0,87,164,0.12)",
              margin: "30px auto",
              position: "relative",
              overflow: "hidden",
              animation: "lineGrow 1s ease forwards",
              animationDelay: "1.3s",
            }}
          >
            {/* Moving Signal */}
            <div
              style={{
                position: "absolute",
                top: "-4px",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#D96B2B",
                boxShadow: "0 0 14px rgba(217,107,43,0.5)",
                animation: "moveSignal 2s linear infinite",
              }}
            />
          </div>

          {/* TAGLINE */}
          <p
            style={{
              color: "#555",
              fontSize: isMobile ? "16px" : "20px",
              lineHeight: "1.7",
              opacity: 0,
              animation: "fadeInUp 1s ease forwards",
              animationDelay: "1.5s",
            }}
          >
            Reliable Hardware &
            <br />
            Electronic Solutions
          </p>

          {/* READY */}
          <p
            style={{
              marginTop: "30px",
              color: "#0057A4",
              letterSpacing: "4px",
              fontSize: "12px",
              opacity: 0,
              animation: "fadeInUp 1s ease forwards, pulse 2s infinite",
              animationDelay: "2.2s",
            }}
          >
            SYSTEM READY
          </p>
        </div>
      </div>
    </>
  );
}

export default SplashScreen;
