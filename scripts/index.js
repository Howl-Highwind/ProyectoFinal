var aElems = document.getElementsByTagName('li2');

for (var i = 0, len = aElems.length; i < len; i++) {
    aElems[i].onclick = function() {
        var check = confirm("¡Atencion! estas llendo a la tienda de ejemplo");
        if (check == true) {
            return true;
        }
        else {
            return false;
        }
    };
}​