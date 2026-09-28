// ==========================================
// A LETTER FOR YOU ❤️
// COMPLETE SCRIPT.JS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ------------------------------------------
    // BACKGROUND MUSIC
    // ------------------------------------------

    const audio = document.getElementById("bgMusic");

    if (audio) {

        // Background volume
        audio.volume = 0.3;

        // Try to start music
        function startMusic() {

            audio.play().then(function () {

                console.log("Background music started ❤️");

            }).catch(function (error) {

                console.log("Browser blocked autoplay. Waiting for tap...");

            });

        }


        // First screen tap/click
        document.addEventListener("click", function () {
            startMusic();
        }, { once: true });


        // Mobile touch
        document.addEventListener("touchstart", function () {
            startMusic();
        }, { once: true, passive: true });


        // Keyboard interaction
        document.addEventListener("keydown", function () {
            startMusic();
        }, { once: true });


        // Try once automatically as well
        startMusic();
    }


    // ------------------------------------------
    // NEXT PAGE
    // ------------------------------------------

    window.goNext = function (page) {

        // Start music before going to next page
        if (audio) {

            audio.volume = 0.5;

            audio.play().catch(function () {
                console.log("Music could not autoplay.");
            });
        }


        // Make sure page name exists
        if (!page) {
            page = "playlist.html";
        }


        // Go to next page
        setTimeout(function () {

            window.location.href = page;

        }, 100);

    };


    // ------------------------------------------
    // NEXT BUTTON
    // ------------------------------------------

    const nextButton = document.querySelector(".next-btn");

    if (nextButton) {

        nextButton.addEventListener("click", function (event) {

            event.preventDefault();

            goNext("playlist.html");

        });

    }

});
