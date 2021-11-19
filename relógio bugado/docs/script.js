    var imagem = document.getElementById('foto')
    var festa = document.querySelector("#festinha")
    var btfesta = document.querySelector('#btfestinha')
    var videos=document.querySelector('#videos')
    btfesta.style.display='none';
    var greetings = document.querySelector('#greetings')
    
function carregar(){

    let data = new Date()
    hora = data.getHours()
    minutos = data.getMinutes()
    segundos = data.getSeconds()
    
    let msg = document.getElementById('msg')
    //Horários
    if(minutos<10){
        msg.innerHTML= `${hora}:0${minutos}:${segundos}\n`
        document.title =`${hora}:0${minutos}:${segundos}`
    }else if(hora<10){
        msg.innerHTML= `0${hora}:${minutos}:${segundos}\n`
        document.title =`0${hora}:${minutos}:${segundos}`
    }else if(segundos<10){
        msg.innerHTML= `${hora}:${minutos}:0${segundos}\n`
        document.title =`${hora}:${minutos}:0${segundos}`
    }else{
        msg.innerHTML= `${hora}:${minutos}:${segundos}\n`
        document.title =`${hora}:${minutos}:${segundos}`
    }
    //imagens e memes
    if(hora >=5 && hora <= 7){
        document.getElementById('onibus').play() 
        festa.innerHTML=''
    }
    if(hora >= 9 && hora <= 11){
        document.getElementById('poco').play()
        festa.innerHTML=''
    } 
    if(hora >=5 && hora <=12){
        imagem.src = 'conteudo/manha.png'
        document.body.style.background = '#8CFAF5'
        greetings.innerHTML = `Bom dia!`
        festa.innerHTML=''
    }
    if(hora >= 13 && hora <= 18){
        imagem.src = 'conteudo/tarde.png'
        document.body.style.background = '#FAD376'
        greetings.innerHTML = `Boa Tarde!` 
        festa.innerHTML=''   
    }else{
        imagem.src = 'conteudo/noite.png'
        document.body.style.backgroung = '#3F3F40'
        greetings.innerHTML = `Boa noite!`
        btfesta.style.display='block'
    }
    setTimeout("carregar()",500)
}
function Mostrar(){
    if(festa.style.display=='block'){
        festa.style.display='none';
        videos.style.width='120px'
        videos.style.height='120px'
    }else{
        festa.style.display='block';
        videos.style.width='min-content'
        videos.style.height='min-content'
    }
}