let dineroCofla = prompt("¿Cuanto dinero tienes, Cofla?");
let dineroRoberto = prompt("¿Cuanto dinero tienes, Roberto?");
let dineroPedro = prompt("¿Cuanto dinero tienes, Pedro?");

dineroCofla = parseInt(dineroCofla)

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Comprate el helado de agua, Cofla")
    alert("Te sobra" + (dineroCofla - 0.6))
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("comprate el helado de heladix, Cofla")
    alert("Te sobra" + (dineroCofla - 1.6))
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("comprate el helado de heladovich, Cofla")
    alert("Te sobra" + (dineroCofla - 1.7))
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("comprate el helado de helardo, Cofla")
    alert("Te sobra" + (dineroCofla - 1.8))
}
else if (dineroCofla >= 2.9) {
    alert("comprate el helado de confites o pote de 1/4, Cofla")
    alert("Te sobra" + (dineroCofla - 2.9))
} else {
    alert("Lo siento Cofla, no te alcanza para nada")
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1.6) {
    alert("Comprate el helado de agua Roberto")
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("comprate el helado de heladix Roberto")
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("comprate el helado de heladovich Roberto")
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("comprate el helado de helardo Roberto")
}
else if (dineroRoberto >= 2.9 && dineroRoberto < 3) {
    alert("comprate el helado de confites o pote de 1/4 Roberto")
}
else {
    alert("No te alcanza para nada Roberto")
}
if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Comprate el helado de agua Pedro")

}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro, comprate el helado de heladix")
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro, comprate el helado de heladovich")
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro, comprate el helado de helardo")
}
else if (dineroPedro >= 2.9) {
    alert("Pedro, comprate el helado de confites o pote de 1/4")
}
else {
    alert("No te alcanza para nada, Pedro")
}