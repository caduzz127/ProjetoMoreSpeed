const mediaQueryPremium = window.matchMedia("(max-width: 1024px)");

const TOTAL_PREMIUM = 4;
const VISIVEIS_PREMIUM = 3;
const DURATION_PREMIUM = 10000;

let currentPremium = 0;
let startTimePremium = null;
let rafIdPremium = null;

function aplicarCardsVisiveisPremium() {
    const cards = document.querySelectorAll("#planos-premium .card-complete");

    cards.forEach((card) => {
        card.classList.remove("ativo-premium");
    });

    for (let i = 0; i < VISIVEIS_PREMIUM; i++) {
        const index = (currentPremium + i) % TOTAL_PREMIUM;
        cards[index].classList.add("ativo-premium");
    }

    atualizarDotsPremium();
}

function atualizarDotsPremium() {
    document.querySelectorAll(".dott-premium").forEach((dott, i) => {
        dott.classList.toggle("ativo", i === currentPremium);
    });
}

window.proximoPremium = function () {
    currentPremium = (currentPremium + 1) % TOTAL_PREMIUM;
    aplicarCardsVisiveisPremium();
    resetProgressPremium();
};

window.anteriorPremium = function () {
    currentPremium = (currentPremium - 1 + TOTAL_PREMIUM) % TOTAL_PREMIUM;
    aplicarCardsVisiveisPremium();
    resetProgressPremium();
};

window.goToPremium = function (index) {
    currentPremium = index;
    aplicarCardsVisiveisPremium();
    resetProgressPremium();
};

function resetProgressPremium() {
    startTimePremium = null;

    if (rafIdPremium) {
        cancelAnimationFrame(rafIdPremium);
    }

    rafIdPremium = requestAnimationFrame(animateProgressPremium);
}

function animateProgressPremium(ts) {
    if (!startTimePremium) startTimePremium = ts;

    const elapsed = ts - startTimePremium;
    const pct = Math.min((elapsed / DURATION_PREMIUM) * 100, 100);

    const progressFillPremium = document.getElementById("progressFillPremium");

    if (progressFillPremium) {
        progressFillPremium.style.width = pct + "%";
    }

    if (elapsed >= DURATION_PREMIUM) {
        currentPremium = (currentPremium + 1) % TOTAL_PREMIUM;
        aplicarCardsVisiveisPremium();
        startTimePremium = null;
    }

    rafIdPremium = requestAnimationFrame(animateProgressPremium);
}

aplicarCardsVisiveisPremium();
resetProgressPremium();