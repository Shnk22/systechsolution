function TrustBar() {
  const isMobile = window.innerWidth <= 768;

  const trustItems = [
    {
      number: "20+",
      title: "Years",
      description: "Of industry reliability",
    },
    {
      number: "Govt",
      title: "Support",
      description: "Trusted public sector experience",
    },
    {
      number: "Enterprise",
      title: "Solutions",
      description: "Tailored hardware partnerships",
    },
    {
      number: "Trusted",
      title: "Supply",
      description: "Reliable procurement expertise",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#f8f6f1",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "80px 24px" : "120px 80px",
        textAlign: "center",
      }}
    >
      {/* Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "60px",
          left: isMobile ? "20px" : "60px",
          width: isMobile ? "90px" : "180px",
          borderTop: "1px solid rgba(0,87,164,0.08)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "80px",
          right: isMobile ? "20px" : "80px",
          width: isMobile ? "90px" : "140px",
          borderTop: "1px solid rgba(217,107,43,0.08)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "120px",
          right: isMobile ? "40px" : "180px",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "rgba(0,87,164,0.12)",
        }}
      />

      {/* Small Label */}
      <p
        style={{
          color: "#D96B2B",
          letterSpacing: "4px",
          fontSize: isMobile ? "12px" : "14px",
          marginBottom: "20px",
        }}
      >
        TRUST BUILT OVER TWO DECADES
      </p>

      {/* Heading */}
      <h2
        style={{
          fontSize: isMobile ? "36px" : "56px",
          fontFamily: "Georgia, serif",
          fontWeight: "400",
          maxWidth: isMobile ? "95%" : "850px",
          margin: "0 auto",
          lineHeight: "1.15",
          letterSpacing: "-1px",
          color: "#0057A4",
        }}
      >
        Trusted by government and enterprise clients through reliable
        procurement, consultation, and electronic solutions.
      </h2>

      {/* Legacy Text */}
      <p
        style={{
          marginTop: "24px",
          color: "#777",
          letterSpacing: "2px",
          fontSize: isMobile ? "12px" : "14px",
        }}
      >
        SERVING SINCE 2005
      </p>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
          gap: "24px",
          marginTop: "70px",
          maxWidth: "1250px",
          marginInline: "auto",
        }}
      >
        {trustItems.map((item) => (
          <div
            key={item.title}
            style={{
              padding: isMobile ? "28px" : "36px",
              borderRadius: "26px",
              border: "1px solid rgba(0,87,164,0.08)",
              background: "rgba(255,255,255,0.45)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            }}
          >
            <h3
              style={{
                fontSize: isMobile ? "34px" : "42px",
                color: "#0057A4",
                fontFamily: "Georgia, serif",
                marginBottom: "10px",
              }}
            >
              {item.number}
            </h3>

            <h4
              style={{
                fontSize: isMobile ? "22px" : "24px",
                color: "#D96B2B",
                marginBottom: "14px",
              }}
            >
              {item.title}
            </h4>

            <p
              style={{
                color: "#666",
                lineHeight: "1.7",
                fontSize: isMobile ? "15px" : "16px",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustBar;
