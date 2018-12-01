window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    class Options {
        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height;
                this.width = width;
                this.bg = bg;
                this.fontSize = fontSize;
                this.textAlign = textAlign;
        }

        createDiv(text) {
            this.isDiv = document.createElement('div');
            this.isDiv.textContent = text;
            this.isDiv.style.cssText =
                `display: inline-block; \
                margin: 10px; \
                color: white; \
                border-radius: 8px; \
                line-height: ${this.height}; \
                height: ${this.height}; \
                width: ${this.width}; \
                background-color: ${this.bg}; \
                font-size: ${this.fontSize}; \
                text-align: ${this.textAlign};
                `;

            document.body.appendChild(this.isDiv);
        }

    }

    let newOtions = new Options("200px", "200px", "red", "20px", "center");
    let btn = document.getElementsByTagName("button")[0];

    btn.addEventListener("click", () => {
        newOtions.createDiv("Text");
    });

});