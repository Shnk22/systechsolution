function SectionDivider() {
  const isMobile = window.innerWidth <= 768;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        padding: isMobile ? "20px 0" : "30px 0",
        backgroundColor: "#f8f6f1",
      }}
    >
      <div
        style={{
          width: isMobile ? "80px" : "140px",
          height: "1px",
          background: "rgba(0,87,164,0.12)",
        }}
      />

      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#D96B2B",
          opacity: 0.8,
        }}
      />

      <div
        style={{
          width: isMobile ? "80px" : "140px",
          height: "1px",
          background: "rgba(0,87,164,0.12)",
        }}
      />
    </div>
  );
}

export default SectionDivider;
