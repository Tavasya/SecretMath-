document.addEventListener("DOMContentLoaded", () => {
    function getButtonCenter(button) {
        const rect = button.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2 + window.scrollX,
            y: rect.top + rect.height / 2 + window.scrollY
        };
    }

    function drawLine(svg, btn1, btn2) {
        const pos1 = getButtonCenter(btn1);
        const pos2 = getButtonCenter(btn2);

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", pos1.x);
        line.setAttribute("y1", pos1.y);
        line.setAttribute("x2", pos2.x);
        line.setAttribute("y2", pos2.y);

        // Add a class to the line element
        line.setAttribute("class", "svg-line");

        svg.appendChild(line);
    }

    const svg = document.getElementById('connections');
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const buttons = section.querySelectorAll('button');
        buttons.forEach((btn1, index1) => {
            buttons.forEach((btn2, index2) => {
                if (index1 < index2) {
                    drawLine(svg, btn1, btn2);
                }
            });
        });
    });
});
