function init() {
    window.requestAnimationFrame(draw);
}

function draw() {
    let c = document.getElementById("backgroundCanvas");
    c.width = 500;
    c.height = 500;
    let width = c.width;
    let height = c.height;
    let ctx = c.getContext("2d");
    ctx.translate(0.5, 0.5);

    // Background
    let grd = ctx.createLinearGradient(0, 0, width, height);
    grd.addColorStop(0, "#CCEEFF");
    grd.addColorStop(1, "#AACCFF");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, width, height);
}

init();
