

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
        minHeight: "100vh",
        padding: "40px 20px",
        background: "#ffffff",
      }}
    >
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/fnG1tGbxQoyTW8hXHQ3N"
        style={{
          width: "100%",
          height: "960px",
          border: "none",
          borderRadius: "12px",
        }}
        id="inline-fnG1tGbxQoyTW8hXHQ3N"
        title="Accentricity India"
      ></iframe>
    </div>
  );
}