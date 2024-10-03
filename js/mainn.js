const  typed = new Typed('.typed', {
	strings: [
	          '<i class="Cafe">Late </i>', 
	          '<i class="Cafe">Americano</i>', 
	          '<i class="Cafe">Expreso</i>', 
	          '<i class="Cafe">De olla</i>'
	          ],

    stringsElement: '#cadenas-texto', //llamar ID//
    typedSpeed: 80, 
    startDelay:300, //tiempo antes de iniciar la animación//
    backSpeed:80, //Va de regreso//
    smartBackspace: true,
    shuffle: true,
    backDelay:1800,
    loop: true, //Repite la cadena//
    loopCount: false, //False, sea infinito//
    showCursor: true,
    cursorChar: '/',
    contentType:'html', // texto sin formato//


});