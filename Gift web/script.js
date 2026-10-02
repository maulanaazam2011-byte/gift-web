/* =========================
   PAGE SYSTEM
========================= */

let currentPage = 1;

const totalPages = 7;

const pages = document.querySelectorAll(".page");

const dots = document.querySelectorAll(".dot");


function goToPage(number) {

    if (number < 1) {
        number = 1;
    }

    if (number > totalPages) {
        number = totalPages;
    }

    currentPage = number;

    pages.forEach((page, index) => {

        page.classList.toggle(
            "active",
            index === number - 1
        );

    });

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === number - 1
        );

    });

    if (number === 5) {
        startTyping();
    }
}


function nextPage() {

    goToPage(currentPage + 1);

}


/* =========================
   MUSIC
========================= */

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");

let musicPlaying = false;


/*
   Coba autoplay.
   Browser mungkin memblokir autoplay
   sampai user menyentuh layar.
*/

window.addEventListener("load", () => {

    music.volume = 0.7;

    music.play()
        .then(() => {

            musicPlaying = true;

            musicButton.textContent = "🔊";

        })
        .catch(() => {

            musicPlaying = false;

            musicButton.textContent = "🎵";

        });

});


/*
   Tombol musik
*/

musicButton.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();

        if (musicPlaying) {

            music.pause();

            musicPlaying = false;

            musicButton.textContent = "🎵";

        } else {

            music.play()
                .then(() => {

                    musicPlaying = true;

                    musicButton.textContent = "🔊";

                })
                .catch(() => {

                    alert(
                        "Musik belum bisa diputar. Pastikan lagu.mp3 ada di folder Assets."
                    );

                });

        }

    }
);


/*
   Saat user pertama kali menyentuh
   halaman, coba nyalakan musik.
*/

document.addEventListener(
    "click",
    function startMusicOnce() {

        if (!musicPlaying) {

            music.play()
                .then(() => {

                    musicPlaying = true;

                    musicButton.textContent = "🔊";

                })
                .catch(() => {});

        }

        document.removeEventListener(
            "click",
            startMusicOnce
        );

    }
);


/* =========================
   FLOWER
========================= */

const flowerMessages = [

    "Bunga kecil ini buat kamu 🌷",

    "Semoga hari kamu selalu punya sesuatu yang indah.",

    "Jangan lupa tersenyum hari ini ya.",

    "Kamu punya tempat spesial di kisah ini."

];

let flowerIndex = 0;


function flowerClick() {

    const text =
        document.getElementById("flowerText");

    text.textContent =
        flowerMessages[flowerIndex];

    flowerIndex++;

    if (
        flowerIndex >=
        flowerMessages.length
    ) {

        flowerIndex = 0;

    }

}


/* =========================
   PHOTO
========================= */

function openPhoto(source) {

    const lightbox =
        document.getElementById("lightbox");

    const image =
        document.getElementById("bigPhoto");

    image.src = source;

    lightbox.classList.add("show");

}


function closePhoto() {

    document
        .getElementById("lightbox")
        .classList.remove("show");

}


/* =========================
   ENVELOPE
========================= */

function openLetter() {

    document.getElementById(
        "envelopeText"
    ).textContent =
        "Suratnya terbuka... 🤍";

    setTimeout(() => {

        goToPage(5);

    }, 700);

}


/* =========================
   TYPING LETTER
========================= */

const letterText = `Chika...

Aku benar-benar minta maaf ya...

Aku tau mungkin ada hal dari aku yang membuat kamu kecewa atau sakit hati.

Aku nggak mau cari alasan untuk membela diri lagi deh.

Kalau aku salah, aku bakal ngakuin diri aku.

Aku cuma ingin bilang...

please, maafin aku.

Aku tahu aku nggak bisa maksa kamu untuk langsung maafin aku.

Kalau kamu masih kecewa, aku ngerti.

Kalau kamu butuh waktu, aku juga bakal menghargainya.

Aku cuma berharap masih ada kesempatan untuk ada di sisi kamu.

Bukan cuma lewat kata-kata.

Tapi juga lewat tindakan.

Aku ingin belajar menjadi lebih baik.

Maafin aku ya, Cinta.

Please. `;


let typingStarted = false;


function startTyping() {

    if (typingStarted) {
        return;
    }

    typingStarted = true;

    const element =
        document.getElementById("typing");

    let index = 0;


    function typeCharacter() {

        if (
            index <
            letterText.length
        ) {

            element.textContent +=
                letterText[index];

            index++;

            setTimeout(
                typeCharacter,
                25
            );

        }

    }


    typeCharacter();

}


/* =========================
   HEART
========================= */

const heartMessages = [

    "Aku nggak minta semuanya langsung kembali seperti semula.",

    "Aku cuma ingin kamu tahu kalau aku nyesel.",

    "Aku akan menghargai perasaan dan waktu kamu.",

    "Terimakasih udah membaca semuanya. Aku harap kita bisa ngobrol lagi suatu saat nanti. 🤍"

];


let heartIndex = 0;


function heartClick() {

    document.getElementById(
        "heartText"
    ).textContent =
        heartMessages[heartIndex];

    heartIndex++;

    if (
        heartIndex >=
        heartMessages.length
    ) {

        heartIndex = 0;

    }

}


/* =========================
   FINAL
========================= */

function showFinal() {

    document.getElementById(
        "finalText"
    ).textContent =
        "Terima kasih sudah sampai di akhir. 🤍";

}


/* =========================
   KEYBOARD
========================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "ArrowRight"
        ) {

            nextPage();

        }

        if (
            event.key === "ArrowLeft"
        ) {

            goToPage(
                currentPage - 1
            );

        }

        if (
            event.key === "Escape"
        ) {

            closePhoto();

        }

    }
);