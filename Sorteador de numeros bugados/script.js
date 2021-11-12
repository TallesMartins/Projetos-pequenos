//variavel com os numeros para a array
var sort = document.querySelector('input#numsort')
var maximo = document.querySelector('input#maximo')
var resultado = document.querySelector('div#valor')
function confirmar(){
    if(sort.value.length == 0 || sort.value == 0 || sort.value == '0'){
        alert('[ERRO] Verifique os valores e tente novamente.')
    }else{
        if(maximo.value.length == 0 || maximo.value == 0 || maximo.value == '0'){
            alert('[ERRO] Verifique os valores e tente novamente.')
        }else{
            resultado.innerHTML = 'Tudo ok, pressione o botão Sortear para prosseguir.'
            if(sort.value == 69){
                resultado.innerHTML = `( ͡° ͜ʖ ͡°)`
            }
        }
    }
    
}
function sortear(){
    resultado.innerHTML = ''
            let numsort=Number(sort.value)
            let quantNum = Number(maximo.value)
            function aleatorio(num){
                return Math.floor(Math.random()* num + 1)
            }
            
            let index = 0
            while(index < quantNum){
                resultado.innerHTML +=`${aleatorio(numsort)} `
                index++
            }
}