document.getElementById("questions").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let totalScore = 0; 
    const image = document.getElementById("imageResult");

    const questionNames = ["first", "second", "third", "fourth", "fifth"];

    //checking each question
    questionNames.forEach((name) => {
        const selected = document.querySelector(`input[name="${name}"]:checked`);
        if (selected) {
            const score =
                selected.id === "A" ? 1 :
                selected.id === "B" ? 2 :
                selected.id === "C" ? 3 :
                selected.id === "D" ? 4 :
                selected.id === "E" ? 5 : 0;

            totalScore += score; 
        }
    });

    //giving a matching resluts
    let N1 = "Your bouquet is the Artistic Muse Bouquet! Flowers: Irises, lavender, tulips, hydrangeas, and gardenias. Why? Your score reflects a thoughtful and imaginative soul. You are someone who finds beauty in creativity and often use it to express yourself. The soft, harmonious colors of this bouquet symbolize your artistic flair and love for elegance and grace.";
    let N2 = "Your bouquet is the Sunshine Spirit Bouquet! Flowers: Sunflowers, daisies, daffodils, marigolds, and chamomile. Why? Your score reflects a bright and joyful personality. You are optimistic, energetic, and someone who lifts others' spirits. This vibrant bouquet, with its cheerful yellows and whites, mirrors your positivity and infectious enthusiasm.";
    let N3 = "Your bouquet is the Passionate Heart Bouquet! Flowers: Red roses, carnations, peonies, amaryllis, and orchids. Why? Your score reflects a personality full of intensity, love, and determination. You face challenges head-on and value deep, meaningful connections. The passionate reds and vibrant blooms in this bouquet symbolize your bold and emotional nature.";
    let N4 = "Your bouquet is the Whimsical Dreamer Bouquet! Flowers: Snapdragons, lilies of the valley, cosmos, anemones, and ranunculus. Why? Your score reflects a playful and imaginative personality. You see the world as a place of wonder and adventure. This bouquet, with its unique shapes and vivid colors, celebrates your quirky, lighthearted spirit and love for surprises.";
    let N5 = "Your bouquet is the Gentle Soul Bouquet! Flowers: Lilies, white roses, magnolias, baby's breath, and freesias. Why? Your score reflects a calm and nurturing personality. You bring peace to those around you and value harmony above all else. This soft, delicate bouquet is a reflection of your gentle and compassionate heart.";

    let resultText = "";
    if (totalScore >= 5 && totalScore <= 9) {
        resultText = N1;
        image.setAttribute("src", "../imgs/Artisticbq.webp");
    } else if (totalScore >= 10 && totalScore <= 13) {
        resultText = N2;
        image.setAttribute("src", "../imgs/Gentle.webp");
    } else if (totalScore >= 14 && totalScore <= 17) {
        resultText = N3;
        image.setAttribute("src", "../imgs/Sunshine.webp");
    } else if (totalScore >= 18 && totalScore <= 21) {
        resultText = N4;
        image.setAttribute("src", "../imgs/Whimsical.webp");
    } else if (totalScore >= 22 && totalScore <= 25) {
        resultText = N5;
        image.setAttribute("src", "../imgs/Passionate.webp");
    }
    document.getElementById("result").innerHTML = resultText + '<a href="pricing.html"> Order now..!</a>';
});
