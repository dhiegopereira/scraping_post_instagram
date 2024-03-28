function clickLoadMore() {
    let contentPost = document.querySelector('ul._a9z6._a9za');
    let btnPost = document.querySelector('svg[aria-label="Carregar mais comentários"]');
    let data = []; 

    if (btnPost) {
        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });

        btnPost.dispatchEvent(clickEvent);

        setTimeout(() => {
            clickLoadMore(); 
        }, 1000); 
    } else {
        let titles = document.querySelectorAll('div._a9zr > h3');
        let comments = document.querySelectorAll('div._a9zr > div._a9zs');

        for (let i = 0; i < titles.length; i++) {
            let title = titles[i].textContent || ""; 
            let commentElement = comments[i+1];
            let comment = "";

            if (commentElement && commentElement.textContent) {
                comment = commentElement.textContent;
            }

            data.push({ title, comment }); 
        }

        let jsonData = JSON.stringify(data, null, 2);
        console.log(jsonData); 
    }
}

clickLoadMore(); 
