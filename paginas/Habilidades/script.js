fetch('./fotos.json')
.then(response => response.json())
.then(json => inicia(json))
.catch(e => console.log(e));



function inicia(jsom){

    const imgs = document.querySelector('.container');

    jsom.forEach(element => {
        if(element.title === undefined){
            
        }

        else{
            imgs.innerHTML += `

            <div class="items"> 
            <h1 class="h1Element">${element.title}</h1>
            <img class="imgElement" src='${element.url}'>
            <p class="ParagrafoElement">${element.paragrafo}</p>            
            </div>
            
            `;
        }
    });



}

alert(`
Ainda esta em desenvolvimento,
Obrigado poe visitar
`);