const mediaQueryPremium = window.matchMedia("(max-width: 1024px)");

const TOTAL_PREMIUM = 4;
const DURATION_PREMIUM = 10000;

let currentPremium = 0;
let startTimePremium = null;
let rafIdPremium = null;

function verificarTamanhoPremium(e) {
    if (e.matches) {
        executarPremiumMobile();
    } else {
        executarPremiumDesktop();
    }
}

function executarPremiumMobile() {
    if (rafIdPremium) {
        cancelAnimationFrame(rafIdPremium);
        rafIdPremium = null;
    }

    currentPremium = 0;
    atualizarDotsPremium();

    const container = document.getElementById("planos-premium");

    if (container) {
        container.style.transform = "translateX(300px)";
    }

    const progressFillPremium = document.getElementById("progressFillPremium");

    if (progressFillPremium) {
        progressFillPremium.style.width = "0%";
    }
}

function executarPremiumDesktop() {
    if (rafIdPremium) {
        cancelAnimationFrame(rafIdPremium);
        rafIdPremium = null;
    }

    const container = document.getElementById("planos-premium");

    if (container) {
        container.style.transform = "";
    }

    currentPremium = 0;
    applyActivePremium();
    resetProgressPremium();
}

window.proximoPremium = function () {
    if (currentPremium < TOTAL_PREMIUM - 1) {
        currentPremium++;
        goToPremium(currentPremium);
    }
};

window.anteriorPremium = function () {
    if (currentPremium > 0) {
        currentPremium--;
        goToPremium(currentPremium);
    }
};

window.goToPremium = function (index) {
    currentPremium = index;

    if (mediaQueryPremium.matches) {
        const container = document.getElementById("planos-premium");

        if (!container) return;

        container.style.transform = `translateX(${300 - index * 300}px)`;

        atualizarDotsPremium();
    } else {
        applyActivePremium();
        resetProgressPremium();
    }
};

function applyActivePremium() {
    document.querySelectorAll("#planos-premium .card-complete").forEach((card, i) => {
        card.classList.toggle("ativo", i === currentPremium);
    });

    atualizarDotsPremium();
}

function atualizarDotsPremium() {
    document.querySelectorAll(".dott-premium").forEach((dott, i) => {
        dott.classList.toggle("ativo", i === currentPremium);
    });
}

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
        applyActivePremium();
        startTimePremium = null;
    }

    rafIdPremium = requestAnimationFrame(animateProgressPremium);
}

mediaQueryPremium.addEventListener("change", verificarTamanhoPremium);
verificarTamanhoPremium(mediaQueryPremium);