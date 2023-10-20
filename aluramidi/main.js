function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

while (contador < listaDeTeclas.length) {

    listaDeTeclas[contador].onclick =  function () {
        tocaSom('#som_tecla_pom')}
    
    contador = contador + 1;

    console.log(contador);
}

//para
/*for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }*/