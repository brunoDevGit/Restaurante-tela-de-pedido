//Adicionar

var btnAdicionar = document.querySelectorAll(".btnAdd");

for (let button of btnAdicionar) {
    button.addEventListener('click', adicionar);

    function adicionar() {
        var item = button.closest('.item');

        var input = item.querySelector('.quant');
        input.value++;

    }
}



//Remover
var btnRemover = document.querySelectorAll(".btnRemove");

for (let button of btnRemover) {
    button.addEventListener('click', remover);

    function remover() {

        var item = button.closest('.item');

        var input = item.querySelector('.quant');
        input.value--;


    }
}


