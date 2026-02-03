document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;

        const rx = ((y / r.height) - .5) * -12;
        const ry = ((x / r.width) - .5) * 12;

        card.style.transform =
            `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    });
});
