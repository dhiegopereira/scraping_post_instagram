function clickLoadMore() {
    let contentPost = document.querySelector('ul._a9z6._a9za');
    let btnPost = document.querySelector('svg[aria-label="Carregar mais comentários"]');
    let data = []; // Array para armazenar os dados

    if (btnPost) {
        // Cria um evento de clique
        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });

        // Dispara o evento de clique no botão "Carregar mais comentários"
        btnPost.dispatchEvent(clickEvent);

        // Aguarda um tempo (opcional) para dar tempo de carregar as novas postagens
        setTimeout(() => {
            clickLoadMore(); // Chama a função novamente para verificar se há mais postagens
        }, 1000); // Aguarda 1 segundo, ajuste conforme necessário
    } else {
        // Quando não houver mais botão 'Carregar mais comentários'
        let titles = document.querySelectorAll('div._a9zr > h3');
        let comments = document.querySelectorAll('div._a9zr > div._a9zs');

        for (let i = 0; i < titles.length; i++) {
            let title = titles[i].textContent || ""; // Pega o texto do título ou usa uma string vazia
            let commentElement = comments[i+1];
            let comment = "";

            // Verifica se o elemento de comentário existe e possui conteúdo de texto
            if (commentElement && commentElement.textContent) {
                comment = commentElement.textContent;
            }

            data.push({ title, comment }); // Adiciona ao array de dados
        }

        // Converte o array em objeto JSON
        let jsonData = JSON.stringify(data, null, 2);
        console.log(jsonData); // Imprime no console
    }
}

clickLoadMore(); // Inicia o processo de clique
