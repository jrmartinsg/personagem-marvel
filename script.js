function verificar() {

    var data = new Date
    var ano = data.getFullYear()
    var anoInput = Number(document.getElementById('number').value)
    var res = document.getElementById('resultado')
    var p = document.getElementById('personagem')

    if (anoInput == 0 || anoInput >= ano) {
        alert('[ERRO] - Verique os dados preenchidos!')
    }

    else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - anoInput
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) // Masculino
        {
            if (idade >= 0 && idade <= 10) {
                genero = 'Menino'
                p.innerHTML = 'Kid Loki'
                img.setAttribute('src', './imgs/kid-loki.png')
            } 
            else if (idade < 21) {
                genero = 'Garoto'
                p.innerHTML = 'Homem Aranha - Peter Parker'
                img.setAttribute('src', './imgs/spider.png')
            } 
            else if (idade < 50) {
                genero = 'Homem'
                p.innerHTML = 'Pantera Negra - Erik Killmonger'
                img.setAttribute('src', './imgs/killmonger.png')
            } 
            else {
                genero = 'Idoso'
                p.innerHTML = 'Thor Odinson'
                img.setAttribute('src', './imgs/thor.png')
            }

        } else if (fsex[1].checked) // Feminino
        {
            if (idade >= 0 && idade <= 10) {
                genero = 'Menina'
                p.innerHTML = 'Ms Marvel - Kamala Khan'
                img.setAttribute('src', './imgs/kamala.png')
            } 
            else if (idade < 21) {
                genero = 'Garota'
                p.innerHTML = 'Gaviã Arqueira - Kate Bishop'
                img.setAttribute('src', './imgs/hawkeye.png')
            } 
            else if (idade < 50) {
                genero = 'Mulher'
                p.innerHTML = 'Viúva Negra - Natasha Romanoff'
                img.setAttribute('src', './imgs/viuva.png')
            } 
            else {
                genero = 'Idosa'
                p.innerHTML = 'Thena'
                img.setAttribute('src', './imgs/thena.png')
            }

        } else if (fsex[2].checked) // Outro
        {
            if (idade >= 0 && idade <= 10) {
                genero = 'Criança'
                p.innerHTML = 'Baby Groot'
                img.setAttribute('src', './imgs/groot.png')
            } 
            else if (idade < 21) {
                genero = 'Jovem'
                p.innerHTML = 'Miss America - America Chavez'
                img.setAttribute('src', './imgs/miss.png')
            } 
            else if (idade < 50) {
                genero = 'Adulto'
                p.innerHTML = 'Valquíria - Brunilda'
                img.setAttribute('src', './imgs/valquiria.png')
            } 
            else {
                genero = '3ª Idade'
                p.innerHTML = 'Loki'
                img.setAttribute('src', './imgs/loki.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos!`
        res.appendChild(img)
        img.style.marginTop = '20px'
    }
}