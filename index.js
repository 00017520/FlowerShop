const flowerDescriptions = {
  rose: {
    red: "A classic declaration of deep, romantic love. When gifted, they express passion, admiration, and an everlasting promise of devotion.",
    pink: "A gesture of gratitude and appreciation. Pink roses celebrate elegance, admiration, and gentle affection.",
    yellow:
      "A bright expression of friendship and happiness. These roses symbolize platonic love and warm wishes.",
    white:
      "A symbol of purity and new beginnings. They are often given to express respect, peace, or sympathy.",
    orange:
      "Radiating energy and enthusiasm, orange roses are perfect for expressing fascination or celebrating achievements.",
    purple:
      "Enchanting and regal, purple roses represent admiration, mystery, and a sense of magical love.",
    default:
      "Roses symbolize love and passion. Each color carries unique meanings, from red for romance to yellow for friendship and white for purity.",
  },
  hyacinth: {
    blue: "Represent peace, loyalty, and sincerity. Gifting them is a gesture of trust and harmony.",
    purple:
      "A sign of regret or a heartfelt apology. They are perfect for expressing deep emotions and seeking forgiveness.",
    white:
      "Symbolize purity and grace. When given, they express admiration for someone's gentle and humble nature.",
    pink: "Represent playful joy and love. They are ideal for brightening someone's day or celebrating life's happy moments.",
    yellow:
      "Convey cheerfulness and positivity but can also symbolize jealousy. They are bold, bright, and full of energy.",
    default: "",
  },
  lily: {
    white:
      "Represent purity, virtue, and hope. They are often gifted during moments of reflection or to symbolize a fresh start.",
    pink: "Convey admiration, compassion, and prosperity. They are perfect for expressing heartfelt gratitude.",
    orange:
      "Vibrant and bold, orange lilies symbolize confidence, energy, and honor. They are ideal for celebrating achievements or milestones.",
    yellow:
      "Cheerful and uplifting, yellow lilies express gratitude, happiness, and lighthearted joy.",
    default:
      "Lilies symbolize purity, renewal, and elegance. Their different colors convey admiration, hope, or joy, making them versatile gifts.",
  },
  tulip: {
    red: "A declaration of true love and passion. They express a deep and romantic affection.",
    yellow:
      "Symbolize happiness and cheer. Gifting them is a gesture of goodwill and positivity.",
    pink: "Represent admiration and gentle emotions. They express care and a heartfelt connection.",
    white:
      "Symbolize purity, forgiveness, and respect. They are often gifted to reconcile or honor someone.",
    purple:
      "Associated with royalty and admiration, they convey a sense of sophistication and elegance.",
    orange:
      " Represent enthusiasm, fascination, and warmth. They are perfect for celebrating life's exciting moments.",
    default:
      "Tulips are symbolic of deep love, elegance, and grace. They represent perfect love and are often associated with spring, renewal, and hope.",
  },
  carnation: {
    white:
      "White carnations signify purity, innocence, and good luck. They are often used in weddings and other ceremonial arrangements.",
    pink: "Pink carnations represent gratitude and motherly love. They are commonly associated with Mother's Day and affectionate gestures.",
    red:
      "Red carnations symbolize deep love and admiration. They are perfect for romantic gestures or to express heartfelt emotions.",
    yellow:
      "Yellow carnations can symbolize disappointment or rejection, but they are also seen as a sign of cheerful and lighthearted emotions.",
    default:
      "Carnations symbolize love, admiration, and distinction. Their wide range of colors allows them to express a variety of emotions and sentiments.",
  },
};

//meaning of flowers in colors
function flowerMeaning(flowerName) {
  const color = document.getElementById(`${flowerName}Color`).value;
  const descrip = document.getElementById(`${flowerName}Des`);
  const flowerData = flowerDescriptions[flowerName];

  descrip.textContent = flowerData[color] || flowerData.default;
}
