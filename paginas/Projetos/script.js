const container = document.querySelector('.container');

fetch('./fotos.json')
    .then(response => response.json())
    .then(json => inicia(json))
    .catch(e => console.log('Deu ERROR', e));

function inicia(json) {

    json.forEach(element => {
        if (element === undefined) {
            element.text = 'aaaa'
        }

        container.innerHTML += `
        <div class="items">
        <h6>${element.id}</h6>
        <a href='${element.url}' target='_blank'>
        <img src='${element.foto}' alt='saite de musica'>
        </a>
        <h3>${element.title}</h3>
        </div>
        
        `;
    });

    loadMorePosts = () => {
       
    }


    document.querySelector('.button').addEventListener('click', e => {

        // AQUI
        // json = postsAndPhotos.slice(page, postsPerPage),
        // allPosts = postsAndPhotos;


        const posts = [];
        const allPosts = [];
        const page = 0;
        const postsPerPage = 3;
        const searchValue = '';




        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextPosts);

        return posts, page = nextPage;
    })

}




