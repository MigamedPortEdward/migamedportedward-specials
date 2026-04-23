document.addEventListener("DOMContentLoaded", function() {

const phone = "27795882835";

const products = {
  // SINGLE ITEMS
  actorvitKS200ml: { name: "ActorVit Kiddy Syrup - 200ml", price: 84.99, active: true },
  adcomayogelAS200ml: { name: "Adco-Mayogel Antacid Suspension - 200ml", price: 44.99, active: true},
  alkafizzMB120g: { name: "AlkaFizz Mixed Berry - 120g", price: 59.99, active: false },
  benylin4FL200ml: { name: "Benylin 4 Flu Liquid - 200ml", price: 104.99, active: false },
  beroccaboost10Eff: { name: "Berocca Boost - 10 Effervescent", price: 79.90, active: false },
  blistexDLM7g: { name: "Blistex DCT Lip Moisturiser - 7g", price: 99.99, active: true },
  calcvitaIS10Eff: { name: "Cal-C-Vita Immune Support - 10 Effervescent", price: 59.99, active: true },
  calpol24Tab: { name: "Calpol - 24 Tablets", price: 29.99, active: true },
  calpolPS100ml: { name: "Calpol Paediatric Suspension - 100ml", price: 60.99, active: false },
  calpolPS50ml: { name: "Calpol Paediatric Suspension - 50ml", price: 39.99, active: true },
  cancard30Tab: { name: "Cancard - 30 Tablets", price: 54.99, active: false },
  carebysparCCBW500ml: { name: "Care by SPAR Cream Caress Body Wash - 500ml", price: 34.99, active: false },
  carebysparESBW500ml: { name: "Care by SPAR Evening Star Body Wash - 500ml", price: 34.99, active: false },
  carebysparPEBW500ml: { name: "Care by SPAR Pure Escape Body Wash - 500ml", price: 34.99, active: false },
  centrumA30Tab: { name: "Centrum Adult - 30 Tablets", price: 144.99, active: true },
  cepacolB24Loz: { name: "Cepacol Blackcurrant - 24 Lozenges", price: 59.99, active: true },
  cepacolHL24Loz: { name: "Cepacol Honey & Lemon - 24 Lozenges", price: 59.99, active: true },
  cepacolR24Loz: { name: "Cepacol Regular - 24 Lozenges", price: 59.99, active: true },
  disprinES16Tab: { name: "Disprin Extra Strength - 16 Tablets", price: 19.99, active: false },
  efferfluCIB20Eff: { name: "Efferflu C Immune Booster - 20 Effervescent", price: 99.99, active: true },
  eucerinAB45g: { name: "Eucerin Aquaphor Balm - 45g", price: 119.99, active: true },
  gavisconDA8Tab: { name: "Gaviscon Double Action - 8 Tablets", price: 24.90, active: false },
  grandpaHP12Sti: { name: "Grand-Pa Headache Powder - 12 Stick Packs", price: 39.99, active: false },
  grandpaHP38Sti: { name: "Grand-Pa Headache Powder - 38 Stick Packs", price: 94.90, active: true },
  iberogastOL20ml: { name: "Iberogast Oral Liquid - 20ml", price: 99.99, active: false },
  johnsonsBWES56Wip: { name: "Johnson's Baby Wipes Extra Sensitive - 56 Wipes", price: 19.90, active: false },
  karvolDI10Cap: { name: "Karvol Decongestant Inhalation - 10 Capsules", price: 89.99, active: true },
  lacsonS150ml: { name: "Lacson Syrup - 150ml", price: 69.99, active: true},
  linctagonCC20Eff: { name: "Linctagon-C Cherry - 20 Effervescent", price: 129.99, active: true},
  linctagonCO20Eff: { name: "Linctagon-C Orange - 20 Effervescent", price: 129.99, active: true},
  linctagonCJCFS100ml: { name: "Linctagon-C Junior Cold & Flu Syrup - 100ml", price: 79.99, active: true},
  linctagonCPN200O12Eff: { name: "Linctagon-C Plus NAC200 Orange - 12 Effervescent", price: 139.99, active: false},
  medlemonC8Sac: { name: "Med-Lemon Cherry - 8 Sachets", price: 69.99, active: true},
  medlemonL8Sac: { name: "Med-Lemon Lemon - 8 Sachets", price: 69.99, active: true},
  medlemonO8Sac: { name: "Med-Lemon Original - 8 Sachets", price: 69.99, active: true},
  menacal730Tab: { name: "MenaCal 7 - 30 Tablets", price: 134.99, active: false },
  nurofenFC4O100ml: { name: "Nurofen for Children 4% Orange - 100ml", price: 139.99, active: false },
  nurofenFC4S100ml: { name: "Nurofen for Children 4% Strawberry - 100ml", price: 139.99, active: false },
  panado20Cap: { name: "Panado - 20 Capsules", price: 44.99, active: false },
  panado24Tab: { name: "Panado - 24 Tablets Spartan", price: 29.99, active: false },
  panadoPSPM50ml: { name: "Panado Peppermint Paediatric Syrup - 50ml", price: 34.99, active: false },
  panadoPSSB50ml: { name: "Panado Strawberry Paediatric Syrup - 50ml", price: 34.99, active: false },
  pharmacyatsparAC30Cap: { name: "Pharmacy at SPAR Activated Charcoal - 30 Capsules", price: 44.99, active: true },
  pharmacyatsparCTBeige5cmx45m: { name: "Pharmacy at SPAR Cohesive Tape Beige - 5cmx4.5m", price: 29.99, active: false },
  pharmacyatsparCTBlack5cmx45m: { name: "Pharmacy at SPAR Cohesive Tape Black - 5cmx4.5m", price: 29.99, active: false },
  pharmacyatsparHABK: { name: "Pharmacy at SPAR Handy Aid - Burn Kit", price: 54.99, active: false },
  pharmacyatsparHAPK: { name: "Pharmacy at SPAR Handy Aid - Plaster Kit", price: 54.99, active: false },
  pharmacyatsparFM60Cap: { name: "Pharmacy at SPAR Family Multivitamin - 60 Capsules", price: 74.99, active: false },
  pharmacyatsparKMGR60Gum: { name: "Pharmacy at SPAR Kids Multivitamin Gummies Raspberry - 60 Gummies", price: 69.99, active: false },
  pharmacyatsparVBC60Cap: { name: "Pharmacy at SPAR Vitamin B-Complex - 60 Capsules", price: 79.99, active: false },
  pregomegaPS30Tab: { name: "PregOmega Pregnancy Support - 30 Day Pack Tablets", price: 309.99, active: true },
  probifloraIR9S30Cap: { name: "ProbiFlora Intensive Rescue 9 Strain - 30 Capsules", price: 144.99, active: false },
  procydin60Cap: { name: "Procydin - 60 Capsules", price: 149.90, active: false },
  rehidratB6Sac: { name: "Rehidrat Blackcurrant - 6 Sachets", price: 79.99, active: false },
  rehidratO6Sac: { name: "Rehidrat Orange - 6 Sachets", price: 79.99, active: false },
  reitzerACJ500g: { name: "Reitzer Aqueous Cream Jar - 500g", price: 34.99, active: true },
  slowmag30Cap: { name: "Slow-Mag - 30 Capsules", price: 164.99, active: false },
  slowmag10Eff: { name: "Slow-Mag - 10 Effervescent", price: 79.99, active: false },
  sparLW24Wip: { name: "SPAR Lens Wipes - 24 Wipes", price: 20.99, active: false },
  sparsolaAG125ml: { name: "SPAR Sola Aftersun Gel - 125ml", price: 64.99, active: false },
  sparTT2P18Rol: { name: "SPAR Toilet Tissue 2 Ply - 18 Rolls", price: 119.90, active: false },
  sterimarBNHS50ml: { name: "Sterimar Baby Nasal Hygiene Spray - 50ml", price: 229.99, active: true },
  sterimarNHS50ml: { name: "Sterimar Nasal Hygiene Spray - 50ml", price: 184.99, active: true },
  strepsilsEM24Loz: { name: "Strepsils Eucalyptus Menthol - 24 Lozenges", price: 79.99, active: true },
  strepsilsHL24Loz: { name: "Strepsils Honey & Lemon - 24 Lozenges", price: 79.99, active: true },
  strepsilsOVC24Loz: { name: "Strepsils Orange with Vitamin C - 24 Lozenges", price: 79.99, active: true },
  strepsilsO24Loz: { name: "Strepsils Original - 24 Lozenges", price: 79.99, active: true },
  strepsilsWG24Loz: { name: "Strepsils Warm Ginger - 24 Lozenges", price: 79.99, active: true },
  sudocremBC125g: { name: "Sudocrem Barrier Cream - 125g", price: 124.99, active: true },
  tibbS24Loz: { name: "Tibb Septogard - 24 Lozenges", price: 64.99, active: true },
  tibbS60Tab: { name: "Tibb Septogard - 60 Tablets", price: 159.99, active: true },
  tibbSS100ml: { name: "Tibb Septogard Syrup - 100ml", price: 129.99, active: true },
  transact5Pat: { name: "Transact - 5 Patches", price: 104.99, active: false },
  vicksAWDCS200ml: { name: "Vicks ActaPlus Wet + Dry Cough Syrup - 200ml", price: 104.99, active: true },
  vicksBJ45g: { name: "Vicks BabyRub Jar - 45g", price: 49.99, active: true },
  vicksVJ50g: { name: "Vicks VapoRub Jar - 50g", price: 54.99, active: true },
  voltarenE50g: { name: "Voltaren Emulgel - 50g", price: 129.99, active: false },
  voltarenE12H50g: { name: "Voltaren Emulgel 12 Hour - 50g", price: 229.99, active: false },

  // VALUE PACKS OR BUY ONE GET ONE
  linctagonCN200Value1plus1: { name: "Linctagon-C NAC200 Buy 1 Get 1 Free", price: 139.99, active: true, bogo: true },
  osteoezeGoldValue90plus30Cap: { name: "OsteoEze Gold - 90 + 30 Capsules", price: 279.90, active: false },
  sparsolaSPF50Value200plus70ml: { name: "SPAR Sola SPF50 Spray - 200+70ml", price: 124.99, active: false }
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
      if (products[key].bogo) {
        const qty = order[key];
        const chargedQty = Math.ceil(qty / 2);
        total += products[key].price * chargedQty;
      } else {
        total += products[key].price * order[key];
      }
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
