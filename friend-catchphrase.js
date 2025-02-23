const phrases = [
    "Suit Up!", 
    "Wait for it... Legendary!", 
    "Challenge Accepted!", 
    "It’s going to be legen—wait for it—dary!", 
    "Haaaaave you met Ted?",
    "Nothing good happens after 2 AM.",
    "You just got lawyered!"
];

function generatePhrase() {
    const phraseElement = document.getElementById("phrase");
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    phraseElement.style.opacity = 0;
    setTimeout(() => {
        phraseElement.innerText = randomPhrase;
        phraseElement.style.opacity = 1;
    }, 300);
}
