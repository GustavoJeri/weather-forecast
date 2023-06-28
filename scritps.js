

const key = "4ab3e1548e97afde8663393ae7ef3356"


function colocardadosnatela(dados) {
    console.log(dados)
    document.querySelector('.city').innerHTML = `Tempo em ${dados.name}`
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector('.text-preview').innerHTML = `${dados.weather[0].description}`[0].toUpperCase() + dados.weather[0].description.substring(1)
    document.querySelector('.umidade').innerHTML = `Umidade: ${dados.main.humidity}%`
    document.querySelector('.prev').src =`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 
    
    if(dados.name == undefined){
        console.log("Por favor escreva um nome de cidade válido!")
    }
}


async function buscarcidade(cidade){

    const dados = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json()) 

    colocardadosnatela(dados)
   
}

function cliquei() {
   
    const cidade = document.querySelector('.input-city').value
    
    buscarcidade(cidade)
    
}

