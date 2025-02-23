document.addEventListener("DOMContentLoaded", () => {
    const playTitle = document.getElementById("play-title");
    const playDescription = document.getElementById("play-description");
    const nextBtn = document.querySelector(".right");
    const prevBtn = document.querySelector(".left");

    // Playbook Data
    const plays = [
        { title: "The Lorenzo Von Matterhorn", description: "A play where Barney creates a fake online persona to impress women." },
        { title: "The Mrs. Stinsfire", description: "Barney dresses as an old lady to avoid an ex-girlfriend." },
        { title: "The Scuba Diver", description: "A long con play where Barney disappears and resurfaces as a mysterious man." },
        { title: "The My Penis Grants Wishes", description: "Barney convinces a woman that his... well, grants wishes." }
    ];

    let currentIndex = 0;

    function updatePlay() {
        playTitle.style.opacity = "0";
        playDescription.style.opacity = "0";

        setTimeout(() => {
            playTitle.innerText = plays[currentIndex].title;
            playDescription.innerText = plays[currentIndex].description;

            playTitle.style.opacity = "1";
            playDescription.style.opacity = "1";
        }, 300);
    }

    function nextPlay() {
        currentIndex = (currentIndex + 1) % plays.length;
        updatePlay();
    }

    function prevPlay() {
        currentIndex = (currentIndex - 1 + plays.length) % plays.length;
        updatePlay();
    }

    nextBtn.addEventListener("click", nextPlay);
    prevBtn.addEventListener("click", prevPlay);

    // Initial Load
    updatePlay();
});
