// script.js

document.getElementById('skinForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Stop the form from reloading the page

  const age = parseInt(document.getElementById('age').value);
  const skinType = document.getElementById('skinType').value;
  const concern = document.getElementById('concern').value;

  const resultBox = document.getElementById('result');
  const tipsBox = document.getElementById('tips');

  let tips = "💡 <strong>Recommended Tips for You:</strong><br><br>";

  // Skin Type Based Tips
  switch (skinType) {
    case "oily":
      tips += "• Use a gentle foaming cleanser.<br>";
      tips += "• Avoid over-washing your face.<br>";
      tips += "• Use oil-free moisturizers.<br><br>";
      break;
    case "dry":
      tips += "• Use cream-based cleansers.<br>";
      tips += "• Apply moisturizer immediately after washing.<br>";
      tips += "• Avoid alcohol-based products.<br><br>";
      break;
    case "combination":
      tips += "• Use a gentle, balanced cleanser.<br>";
      tips += "• Treat oily and dry areas separately.<br>";
      tips += "• Don’t skip moisturizer.<br><br>";
      break;
    case "sensitive":
      tips += "• Use fragrance-free products.<br>";
      tips += "• Avoid harsh scrubs and exfoliants.<br>";
      tips += "• Do patch tests before trying new products.<br><br>";
      break;
  }

  // Concern Based Tips
  switch (concern) {
    case "acne":
      tips += "• Use salicylic acid or benzoyl peroxide products.<br>";
      tips += "• Keep your skin clean and avoid touching your face.<br><br>";
      break;
    case "aging":
      tips += "• Use products with retinol or peptides.<br>";
      tips += "• Apply sunscreen daily to prevent wrinkles.<br><br>";
      break;
    case "dullness":
      tips += "• Use products with Vitamin C or exfoliating acids.<br>";
      tips += "• Stay hydrated and maintain a balanced diet.<br><br>";
      break;
    case "redness":
      tips += "• Choose calming ingredients like aloe or chamomile.<br>";
      tips += "• Avoid spicy food and hot water on your face.<br><br>";
      break;
  }

  // Age-based Tips
  if (age < 18) {
    tips += "• Keep your routine simple and avoid harsh products.<br>";
  } else if (age >= 18 && age <= 40) {
    tips += "• Maintain hydration and use SPF regularly.<br>";
  } else {
    tips += "• Include anti-aging serums and firming creams in your routine.<br>";
  }

  tipsBox.innerHTML = tips;
  resultBox.classList.remove('hidden');
});