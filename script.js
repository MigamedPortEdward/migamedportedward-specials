document.addEventListener("DOMContentLoaded", function() {

const phone = "27795882835";

const products = {
  alkafizzMB120g: { name: "AlkaFizz Mixed Berry - 120g", price: 59.99, active: false },
  benylin4FL200ml: { name: "Benylin 4 Flu Liquid - 200ml", price: 104.99, active: false },
  beroccaboost10Eff: { name: "Berocca Boost - 10 Effervescent", price: 79.99, active: true },
  calpolPS100ml: { name: "Calpol Paediatric Suspension - 100ml", price: 60.99, active: true },
  cancard30Tab: { name: "Cancard - 30 Tablets", price: 54.99, active: false },
  carebysparCCBW500ml: { name: "Care by SPAR Cream Caress Body Wash - 500ml", price: 34.99, active: true },
  carebysparESBW500ml: { name: "Care by SPAR Evening Star Body Wash - 500ml", price: 34.99, active: true },
  carebysparPEBW500ml: { name: "Care by SPAR Pure Escape Body Wash - 500ml", price: 34.99, active: true },
  disprinES16Tab: { name: "Disprin Extra Strength - 16 Tablets", price: 19.99, active: false },
  gavisconDA8Tab: { name: "Gaviscon Double Action - 8 Tablets", price: 24.99, active: true },
  grandpaHP12Sti: { name: "Grand-Pa Headache Powder - 12 Stick Packs", price: 39.99, active: true },
  iberogastOL20ml: { name: "Iberogast Oral Liquid - 20ml", price: 99.99, active: true },
  johnsonsBWES56Wip: { name: "Johnson's Baby Wipes Extra Sensitive - 56 Wipes", price: 19.99, active: true },
  menacal730Tab: { name: "MenaCal 7 - 30 Tablets", price: 134.99, active: true },
  nurofenFC4O100ml: { name: "Nurofen for Children 4% Orange - 100ml", price: 139.99, active: false },
  nurofenFC4S100ml: { name: "Nurofen for Children 4% Strawberry - 100ml", price: 139.99, active: false },
  panado20Cap: { name: "Panado - 20 Capsules", price: 44.99, active: true },
  panado24Tab: { name: "Panado - 24 Tablets Spartan", price: 29.99, active: true },
  panadoPSPM50ml: { name: "Panado Peppermint Paediatric Syrup - 50ml", price: 34.99, active: true },
  panadoPSSB50ml: { name: "Panado Strawberry Paediatric Syrup - 50ml", price: 34.99, active: true },
  pharmacyatsparCTBeige5cmx45m: { name: "Pharmacy at SPAR Cohesive Tape Beige - 5cmx4.5m", price: 29.99, active: true },
  pharmacyatsparCTBlack5cmx45m: { name: "Pharmacy at SPAR Cohesive Tape Black - 5cmx4.5m", price: 29.99, active: true },
  pharmacyatsparHABK: { name: "Pharmacy at SPAR Handy Aid - Burn Kit", price: 54.99, active: true },
  pharmacyatsparHAPK: { name: "Pharmacy at SPAR Handy Aid - Plaster Kit", price: 54.99, active: true },
  pharmacyatsparFM60Cap: { name: "Pharmacy at SPAR Family Multivitamin - 60 Capsules", price: 74.99, active: true },
  pharmacyatsparKMGR60Gum: { name: "Pharmacy at SPAR Kids Multivitamin Gummies Raspberry - 60 Gummies", price: 69.99, active: true },
  pharmacyatsparVBC60Cap: { name: "Pharmacy at SPAR Vitamin B-Complex - 60 Capsules", price: 79.99, active: true },
  probifloraIR9S30Cap: { name: "ProbiFlora Intensive Rescue 9 Strain - 30 Capsules", price: 144.99, active: true },
  rehidratB6Sac: { name: "Rehidrat Blackcurrant - 6 Sachets", price: 79.99, active: true },
  rehidratO6Sac: { name: "Rehidrat Orange - 6 Sachets", price: 79.99, active: true },
  slowmag30Cap: { name: "Slow-Mag - 30 Capsules", price: 164.99, active: true },
  slowmag10Eff: { name: "Slow-Mag - 10 Effervescent", price: 79.99, active: true },
  sparLW24Wip: { name: "SPAR Lens Wipes - 24 Wipes", price: 20.99, active: true },
  sparsolaAG125ml: { name: "SPAR Sola Aftersun Gel - 125ml", price: 64.99, active: true },
  sparsolaSPF50Value200plus70ml: { name: "SPAR Sola SPF50 Spray - 200+70ml", price: 124.99, active: true },
  strepsilsO24Loz: { name: "Strepsils Original - 24 Lozenges", price: 74.99, active: false },
  transact5Pat: { name: "Transact - 5 Patches", price: 104.99, active: true },
  voltarenE50g: { name: "Voltaren Emulgel - 50g", price: 129.99, active: true },
  voltarenE12H50g: { name: "Voltaren Emulgel 12 Hour - 50g", price: 229.99, active: false }
};

let order = {};

const grid = document.getElementById("productGrid");

for (let key in products) {
  
  if (!products[key].active) continue;
  
  const product = products[key];

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="price">Only<br>R${product.price.toFixed(2)}</div>
    <img src="images/${key}.png">
    <div class="name">${product.name}</div>
    <div class="qty">
      <button onclick="changeQty('${key}',-1)">−</button>
      <span id="qty-${key}">0</span>
      <button onclick="changeQty('${key}',1)">+</button>
    </div>
  `;

  grid.appendChild(card);
}

window.changeQty = function(key, delta) {
  order[key] = (order[key] || 0) + delta;
  if (order[key] < 0) order[key] = 0;
  document.getElementById("qty-" + key).innerText = order[key];
}

window.sendOrder = function() {
  let message = "Hello, I would like to order:\n";
  let total = 0;
  let hasItems = false;

  for (let key in order) {
    if (order[key] > 0) {
      message += `- ${products[key].name} x${order[key]}\n`;
      total += products[key].price * order[key];
      hasItems = true;
    }
  }

  if (!hasItems) {
    alert("Please select at least one item.");
    return;
  }

  const selectedMethod = document.querySelector('input[name="method"]:checked');
  const method = selectedMethod.value;

  if (method === "delivery") {

    const street = document.getElementById("street").value.trim();
    const suburb = document.getElementById("suburb").value.trim();
    const city = document.getElementById("city").value.trim();
    const zone = document.querySelector('input[name="zone"]:checked');

    if (!street || !suburb || !city || !zone) {
      alert("Please complete delivery details.");
      return;
    }

    message += `\n\nDelivery Address:\n${street}\n${suburb}\n${city}`;

    message += zone.value === "free"
      ? "\nDelivery: 0–5 km (Free)"
      : "\nDelivery: 5+ km (Calculated by pharmacist)";
  }

  message += `\n\nTotal: R${total.toFixed(2)}`;

  window.open(
    "https://wa.me/" + phone + "?text=" + encodeURIComponent(message),
    "_blank"
  );
}

const methodRadios = document.querySelectorAll('input[name="method"]');
const deliveryBox = document.getElementById("deliveryOptions");

function toggleDelivery() {
  const selected = document.querySelector('input[name="method"]:checked');
  if (!selected) return;

  deliveryBox.style.display =
    selected.value === "delivery" ? "block" : "none";
}

methodRadios.forEach(radio => {
  radio.addEventListener("change", toggleDelivery);
});

toggleDelivery();

});
