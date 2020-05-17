//Adicionar

var btnAdicionar = document.querySelectorAll(".btnAdd");

for (let button of btnAdicionar) {
    button.addEventListener('click', adicionar);

    function adicionar() {
        var item = button.closest('.item');

        var input = item.querySelector('.quant');
        input.value++;

        var preco = capturaPreco(item);
        addTotal(preco);

    }
}



//Remover
var btnRemover = document.querySelectorAll(".btnRemove");

for (let button of btnRemover) {
    button.addEventListener('click', remover);

    function remover() {

        var item = button.closest('.item');

        var input = item.querySelector('.quant');

        if (input.value > 0) {
            input.value--;
            var preco = capturaPreco(item);
            addTotal(-preco);
        }

    }
}



function capturaPreco(item) {
    var precoItem = item.querySelector('.precoItem');
    return Number(precoItem.textContent)
}

function addTotal(preco) {
    var capturaTotal = (document.querySelector("#total"));
 
    capturaTotal.textContent = preco + Number(capturaTotal.textContent);
    

}
