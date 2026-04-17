const params = new URLSearchParams(window.location.search);
const ref = params.get("ref") || "directo";

const phone = "34TU_NUMERO";

const msg = `Hola, quiero revisar mi factura de luz. Ref: ${ref}`;

document.getElementById("wa").href =
  `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
<p>⚠️ La mayoría de hogares paga más de lo necesario sin saberlo</p>
