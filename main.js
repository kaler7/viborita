
function establecerDireccion(keyCode)
{
    if (keyCode == 65 || keyCode == 37){
        return "izquierda";
    }
    else if (keyCode == 87 || keyCode == 38){
        return "arriba";
    }
    else if (keyCode == 68 || keyCode == 39){
        return "derecha";
    }
    else if (keyCode == 83 || keyCode == 40){
        return "abajo";
    }
}