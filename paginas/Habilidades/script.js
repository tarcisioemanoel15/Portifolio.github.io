fetch('./fotos.json')
.then(response => response.json())
.then(json => inicia(json))
.catch(e => console.log(e));



function inicia(jsom){
    console.log(jsom);

    const imgs = document.querySelector('.container');

    jsom.forEach(element => {
        imgs.innerHTML += `
        <img src='${element.url}'>
        
        `;
    });



}