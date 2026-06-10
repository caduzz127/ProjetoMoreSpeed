const mediaQuery = window.matchMedia("(max-width: 1024px)");

const TOTAL = 3;
const DURATION = 10000;

let current = 0;
let startTime = null;
let rafId = null;

function verificarTamanho(e) {
    if (e.matches) {
        console.log("Modo Mobile/Tablet");
        executarFuncaoMenor();
    } else {
        console.log("Modo Desktop");
        executarFuncaoMaior();
    }
}

function executarFuncaoMenor() {
    console.log("Executando mobile");

    if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
    }

    current = 0;
    atualizarDots();

    const container = document.getElementById("planos-internet");

    if (container) {
        container.style.transform = "translateX(300px)";
    }

    const progressFill = document.getElementById("progressFill");

    if (progressFill) {
        progressFill.style.width = "0%";
    }
}

function executarFuncaoMaior() {
    console.log("Executando desktop");

    if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
    }

    const container = document.getElementById("planos-internet");

    if (container) {
        container.style.transform = "";
    }

    current = 0;
    applyActive();
    resetProgress();
} 

window.proximo = function() {
    current = (current + 1) % TOTAL;
    goTo(current);
};

window.anterior = function() {
    current = (current - 1 + TOTAL) % TOTAL;
    goTo(current);
};

window.goTo = function(index) {
    current = index;

    if (mediaQuery.matches) {
        const container = document.getElementById("planos-internet");

        if (!container) return;

        container.style.transform = `translateX(${300 - index * 300}px)`;

        atualizarDots();

    } else {
        applyActive();
        resetProgress();
    }
};

function applyActive() {
    document.querySelectorAll(".card-internet").forEach((card, i) => {
        card.classList.toggle("ativo", i === current);
    });

    atualizarDots();
}

function atualizarDots() {
    document.querySelectorAll(".dott").forEach((dott, i) => {
        dott.classList.toggle("ativo", i === current);
    });
}

function resetProgress() {
    startTime = null;

    if (rafId) {
        cancelAnimationFrame(rafId);
    }

    rafId = requestAnimationFrame(animateProgress);
}

function animateProgress(ts) {
    if (!startTime) startTime = ts;

    const elapsed = ts - startTime;
    const pct = Math.min((elapsed / DURATION) * 100, 100);

    const progressFill = document.getElementById("progressFill");

    if (progressFill) {
        progressFill.style.width = pct + "%";
    }

    if (elapsed >= DURATION) {
        current = (current + 1) % TOTAL;
        applyActive();
        startTime = null;
    }

    rafId = requestAnimationFrame(animateProgress);
}

mediaQuery.addEventListener("change", verificarTamanho);
verificarTamanho(mediaQuery);