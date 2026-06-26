import { useEffect } from "react";

export default function LeadForm() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "700px",
        margin: "40px auto",
        height: "920px",
      }}
    >
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/Lp1fGKHVDjKWpfFEUKrt"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        id="inline-Lp1fGKHVDjKWpfFEUKrt"
        title="Accentricity India"
      />
    </div>
  );
}