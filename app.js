(() => {
  // Obtener referencia del comercio desde la URL (?ref=barjuan)
  const params = new URLSearchParams(window.location.search);
  const ref = params.get("ref") || "directo";

  // 👉 Cambia esto por tu número real (formato España sin +)
  const phone = "34TU_NUMERO";

  // Mensaje que recibes en WhatsApp con trazabilidad
  const message = `Hola, quiero revisar mi factura de luz. Ref: ${ref}`;

  // Construir URL de WhatsApp
  const whatsappURL =
    "https://wa.me/" +
    phone +
    "?text=" +
    encodeURIComponent(message);

  // Asignar al botón
  const btn = document.getElementById("wa");
  if (btn) {
    btn.href = whatsappURL;
    btn.target = "_blank";
  }

  // (Opcional PRO) enviar datos a consola para tracking futuro
  console.log("Lead generado:", {
    ref: ref,
    time: new Date().toISOString(),
    source: "qr-landing"
  });
})();
