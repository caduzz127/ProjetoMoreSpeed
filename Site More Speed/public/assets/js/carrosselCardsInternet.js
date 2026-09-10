const TOTAL_INTERNET = 3;
const DURATION_INTERNET = 10000;

let currentInternet = 0;
let startTimeInternet = null;
let rafIdInternet = null;

function aplicarCardsVisiveisInternet() {
    const cards = document.querySelectorAll("#planos-internet .card-internet");

    cards.forEach((card) => {
        card.classList.remove("ativo");
        card.classList.remove("foco-internet");
    });

    if (cards[currentInternet]) {
        cards[currentInternet].classList.add("ativo");
        cards[currentInternet].classList.add("foco-internet");
    }

    atualizarDotsInternet();
}

function atualizarDotsInternet() {
    document.querySelectorAll(".dott").forEach((dott, i) => {
        dott.classList.toggle("ativo", i === currentInternet);
    });
}

window.proximo = function () {
    currentInternet = (currentInternet + 1) % TOTAL_INTERNET;
    aplicarCardsVisiveisInternet();
    resetProgressInternet();
};

window.anterior = function () {
    currentInternet = (currentInternet - 1 + TOTAL_INTERNET) % TOTAL_INTERNET;
    aplicarCardsVisiveisInternet();
    resetProgressInternet();
};

window.goTo = function (index) {
    currentInternet = index;
    aplicarCardsVisiveisInternet();
    resetProgressInternet();
};

function resetProgressInternet() {
    startTimeInternet = null;

    if (rafIdInternet) {
        cancelAnimationFrame(rafIdInternet);
    }

    rafIdInternet = requestAnimationFrame(animateProgressInternet);
}

function animateProgressInternet(ts) {
    if (!startTimeInternet) startTimeInternet = ts;

    const elapsed = ts - startTimeInternet;
    const pct = Math.min((elapsed / DURATION_INTERNET) * 100, 100);
    const progressFillInternet = document.getElementById("progressFill");

    if (progressFillInternet) {
        progressFillInternet.style.width = pct + "%";
    }

    if (elapsed >= DURATION_INTERNET) {
        currentInternet = (currentInternet + 1) % TOTAL_INTERNET;
        aplicarCardsVisiveisInternet();
        startTimeInternet = null;
    }

    rafIdInternet = requestAnimationFrame(animateProgressInternet);
}

aplicarCardsVisiveisInternet();
resetProgressInternet();
