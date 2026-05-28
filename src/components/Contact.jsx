import { useState } from "react";
import { supabase } from "../supabase";

function Contact() {
  const isMobile = window.innerWidth <= 768;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    const { error } = await supabase.from("contacts").insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
      },
    ]);

    setLoading(false);

    if (error) {
      alert("Something went wrong.");
      console.error(error);
    } else {
      await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        }),
      });
      setSuccess("Message submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#f8f6f1",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "90px 20px" : "140px 80px",
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
        06
      </p>

      {/* BACKGROUND ELECTRONICS ELEMENTS */}

      {/* PCB Arc */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "320px",
          height: "320px",
          border: "18px solid rgba(217,107,43,0.12)",
          borderRadius: "50%",
        }}
      />

      {/* Bottom Arc */}
      <div
        style={{
          position: "absolute",
          bottom: "-140px",
          left: "-100px",
          width: "280px",
          height: "280px",
          border: "16px solid rgba(0,87,164,0.10)",
          borderRadius: "50%",
        }}
      />

      {/* IC Chip */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "8%",
          width: isMobile ? "80px" : "130px",
          height: isMobile ? "60px" : "90px",
          border: "1.5px solid rgba(0,87,164,0.16)",
          borderRadius: "10px",
          opacity: 0.6,
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${15 + i * 12}%`,
              left: "-14px",
              width: "14px",
              borderTop: "1px solid rgba(0,87,164,0.18)",
            }}
          />
        ))}

        {[...Array(6)].map((_, i) => (
          <div
            key={`right-${i}`}
            style={{
              position: "absolute",
              top: `${15 + i * 12}%`,
              right: "-14px",
              width: "14px",
              borderTop: "1px solid rgba(0,87,164,0.18)",
            }}
          />
        ))}
      </div>

      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: isMobile ? "50px" : "80px",
          position: "relative",
          zIndex: 2,
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
          CONTACT US
        </p>

        <h2
          style={{
            fontSize: isMobile ? "40px" : "64px",
            lineHeight: "1.08",
            fontFamily: "Georgia, serif",
            fontWeight: "400",
            color: "#0057A4",
          }}
        >
          Let’s build
          <span
            style={{
              color: "#D96B2B",
              fontStyle: "italic",
            }}
          >
            {" "}
            reliable solutions
          </span>{" "}
          together.
        </h2>
      </div>

      {/* MAIN CONTACT CARD */}
      <div
        style={{
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Orange Accent Block */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              right: "80px",
              top: "-30px",
              width: "320px",
              height: "420px",
              background: "#D96B2B",
              borderRadius: "30px",
              zIndex: 0,
              opacity: 0.95,
            }}
          />
        )}

        {/* Main Form Card */}
        <div
          style={{
            background: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(14px)",
            borderRadius: "34px",
            padding: isMobile ? "40px 28px" : "60px",
            boxShadow: "0 30px 70px rgba(0,0,0,0.05)",
            border: "1px solid rgba(0,87,164,0.08)",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "50px",
            }}
          >
            {/* LEFT SIDE FORM */}
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontSize: isMobile ? "34px" : "48px",
                  color: "#111",
                  marginBottom: "18px",
                }}
              >
                Contact us
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.8",
                  marginBottom: "40px",
                }}
              >
                Looking for procurement support, hardware sourcing, or
                electronic component consultation? Reach out to us.
              </p>

              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "22px",
                }}
              >
                <input
                  placeholder="Your Name"
                  style={inputStyle}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <input
                  placeholder="Email Address"
                  style={inputStyle}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <input
                  placeholder="Phone Number"
                  style={inputStyle}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                />

                <input
                  placeholder="Organization"
                  style={inputStyle}
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />

                <textarea
                  rows="4"
                  placeholder="Tell us about your requirement..."
                  style={inputStyle}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: "#0057A4",
                    color: "white",
                    border: "none",
                    borderRadius: "14px",
                    padding: "18px",
                    fontSize: "17px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                >
                  {loading ? "Submitting..." : "Discuss Requirements"}
                </button>
                {success && (
                  <p
                    style={{
                      color: "green",
                      marginTop: "10px",
                    }}
                  >
                    {success}
                  </p>
                )}
              </form>
            </div>

            {/* RIGHT INFO CARD */}
            <div
              style={{
                width: isMobile ? "100%" : "360px",
                background: "#0057A4",
                borderRadius: "30px",
                padding: "40px",
                color: "white",
                position: "relative",
                zIndex: 3,
                alignSelf: "center",
                boxShadow: "0 25px 60px rgba(0,87,164,0.22)",
              }}
            >
              <h3
                style={{
                  fontSize: "34px",
                  marginBottom: "30px",
                }}
              >
                Info
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                  lineHeight: "1.7",
                }}
              >
                <div>
                  <p style={{ opacity: 0.7 }}>Email</p>
                  <p>systechsol@gmail.com</p>
                </div>

                <div>
                  <p style={{ opacity: 0.7 }}>Phone</p>
                  <p>+91 9849737912</p>
                </div>

                <div>
                  <p style={{ opacity: 0.7 }}>Address</p>
                  <p>PVN Colony, Mirzalguda, Malkajgiri, Hyderabad 500047</p>
                </div>

                <div>
                  <p style={{ opacity: 0.7 }}>Availability</p>
                  <p>Mon – Sat | 9 AM – 6 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  padding: "18px",
  border: "none",
  borderBottom: "1px solid rgba(0,0,0,0.12)",
  background: "transparent",
  outline: "none",
  fontSize: "16px",
};

export default Contact;
