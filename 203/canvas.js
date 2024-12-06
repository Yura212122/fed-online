window.onload = function(){
    let canvas = document.querySelector(`canvas`);
    let ctx = canvas.getContext(`2d`);
    ctx.fillStyle = ' yellow';  
    ctx.fillRect(50, 50, 150, 100);

    ctx.fillStyle = 'green';  
    ctx.fillRect(150, 100, 150, 100);

    ctx.fillStyle = ' red';  
ctx.fillRect(200,150,150,100);
    const gradient = ctx.createLinearGradient(20, 0, 220, 0);

 
gradient.addColorStop(0, "yellow");
gradient.addColorStop(0.5, "black");
gradient.addColorStop(1, "yellow");

 
ctx.fillStyle = gradient;
ctx.fillRect(20, 300, 200, 100);

ctx.lineWidth = 8;
ctx.strokeStyle = "blue";
ctx.moveTo(80, 80);
ctx.lineTo(400, 80);
ctx.stroke();

function addSvgLine(x1, y1, x2, y2, color, width) {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.style.display = "block";
    svg.style.margin = "20px auto";

    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", width);

    svg.appendChild(line);
    document.body.appendChild(svg);
}
 
 


function  drawsvg(width, height, fillColor, strokeColor, strokeWidth){
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.style.display = "block";
    svg.style.margin = "20px auto";

    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", fillColor);
    rect.setAttribute("stroke", strokeColor);
    rect.setAttribute("stroke-width", strokeWidth);

    svg.appendChild(rect);
    document.body.appendChild(svg);
}

 
addSvgLine(50, 50, 200, 200, "red", 4);
drawsvg(150, 100, "blue", "black", 3);

}