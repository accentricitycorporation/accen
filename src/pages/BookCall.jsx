import { useEffect } from "react";

export default function BookCall() {
  useEffect(() => {
    // Check if the GHL script is already loaded
    const existingScript = document.querySelector(
      'script[src="https://link.msgsndr.com/js/form_embed.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>Book Your Discovery Call</h1>

      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/xmJLxXF9aAXTkAvLP6JV"
        style={{
          width: "100%",
          height: "900px",
          border: "none",
          overflow: "hidden",
        }}
        scrolling="no"
        id="xmJLxXF9aAXTkAvLP6JV_1782440651741"
        title="Book Discovery Call"
      ></iframe>
    </div>
  );
}