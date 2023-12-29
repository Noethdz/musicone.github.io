window.onload = () => {
    let canvas = document.getElementById('cnv');
    let ctx = canvas.getContext('2d');
    let w = canvas.width = innerWidth;
    let h = canvas.height = innerHeight;

    let a = h / 2;
    let b = h / 4.5;
    let colors = 200;

    const drawLine = () => {
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'green';
        ctx.moveTo(w, h / 2);
        ctx.lineTo(w, h / 2);
        ctx.stroke();
    }

    const show = (k, ht, c) => {
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = 'hsl(' + c + ', 100%, 50%)';
        ctx.moveTo(k, h / 2);
        ctx.lineTo(k, a - (ht));
        ctx.stroke();
    }

    const animate = () => {
        ctx.fillRect(0, 0, w, h);
        drawLine();
        for (let i = 10, colors = 200; i < w; i += 25, colors += 30) {
            let d = Math.random() * b;
            show(i, d, colors);
        }
    }
    setInterval(animate, 150)
}