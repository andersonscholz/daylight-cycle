function maxhora24(){
    var hora = document.getElementById('hours')
    var horario = parseInt(hora.value)
    if(horario>24 || horario<0){
        window.alert('valor inválido')
        var botao = document.getElementById('botao')
        botao.style.display = 'none'
    }
    else{
    var botao = document.getElementById('botao')
    botao.style.display = 'initial' 
    }
}
function calcular(){
    var hora = document.getElementById('hours')
    var horario = parseInt(hora.value)
    if (horario>18){
        document.getElementById('result').innerHTML =`Já são ${horario} horas da noite`
        var bg = document.getElementById('fundo')
        bg.style.backgroundColor = '#181877'
        var solua = document.getElementById('painel')
        solua.style.boxShadow = '0px 0px 100px white'
        solua.style.backgroundColor = 'white'
        solua.style.color = 'gray'

    }
    else if(horario>12){
        document.getElementById('result').innerHTML =`Já são ${horario} horas da tarde`
        var bg = document.getElementById('fundo')
        bg.style.backgroundColor = '#69c3ff'
        var solua = document.getElementById('painel')
        solua.style.boxShadow = '0px 0px 300px yellow'
        solua.style.backgroundColor = 'yellow'
        solua.style.color = 'orange'
    }
    else if(horario>6){
        document.getElementById('result').innerHTML =`Já são ${horario} horas da manhã`
        var bg = document.getElementById('fundo')
        bg.style.backgroundColor = '#d8f2f8'
        var solua = document.getElementById('painel')
        solua.style.boxShadow = '0px 0px 300px yellow'
        solua.style.backgroundColor = '#ebeb6c'
        solua.style.color = 'white'
    }
    else if(horario>1){
        document.getElementById('result').innerHTML =`Já são ${horario} horas da madrugada`
        var bg = document.getElementById('fundo')
        bg.style.backgroundColor = '#011d29'
        var solua = document.getElementById('painel')
        solua.style.boxShadow = '0px 0px 300px white'
        solua.style.backgroundColor = 'white'
        solua.style.color = '#011d29'
    }
    else if(horario>0){
        document.getElementById('result').innerHTML =`Já são ${horario} hora da madrugada`
        var bg = document.getElementById('fundo')
        bg.style.backgroundColor = '#011d29'
        var solua = document.getElementById('painel')
        solua.style.boxShadow = '0px 0px 300px white'
        solua.style.backgroundColor = 'white'
        solua.style.color = '#011d29'
        
    }

}
