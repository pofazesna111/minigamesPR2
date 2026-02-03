document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", e => {
        const r = btn.getBoundingClientRect();
        const s = Math.max(r.width, r.height);
        const ripple = document.createElement("span");

        ripple.className = "ripple";
        ripple.style.width = ripple.style.height = s + "px";
        ripple.style.left = e.clientX - r.left - s / 2 + "px";
        ripple.style.top = e.clientY - r.top - s / 2 + "px";

        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});
