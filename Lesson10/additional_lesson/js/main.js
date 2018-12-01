window.addEventListener("DOMContentLoaded", function () {
    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    }
    function mask() {
        var matrix = this.defaultValue,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) {
            val = def;
        }
        matrix = matrix.replace(/[_\d]/g, function () {
            return val.charAt(i++) || "_";
        });
        this.value = matrix;
        i = matrix.lastIndexOf(val.substr(-1));
        if (i < matrix.length && matrix != this.defaultValue) {
            i++;
        } else {
            i = matrix.indexOf("_");
        }
        setCursorPosition(i, this);
    }

    var input = document.querySelector("input");
    input.addEventListener("input", mask, false);
});