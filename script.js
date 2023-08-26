const inputText = document.getElementById("inputText");
const letterCount = document.getElementById("letterCount");
const wordCount = document.getElementById("wordCount");
const sentenceCount = document.getElementById("sentenceCount");
const generateBackgroundButton = document.getElementById("generateBackground");


analyzeButton.addEventListener("click", analyzeText);
generateBackgroundButton.addEventListener("click", generateRandomBackground);


function analyzeText() {
    const text = inputText.value;
    const letters = text.match(/[a-zA-Z]/g) || [];
    const words = text.split(/\s+/).filter(word => word !== "");
    const sentences = text.split(/[.!?]/).filter(sentence => sentence !== "");

    letterCount.textContent = letters.length;
    wordCount.textContent = words.length;
    sentenceCount.textContent = sentences.length;
}

function generateRandomBackground() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}