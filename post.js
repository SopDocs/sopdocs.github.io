function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const fetchArticle = async () => {
    const response = await fetch('https://dev.to/api/articles'+getParameterByName('id'));
    const data = await response.json();

    return data;
}

document.addEventListener("DOMContentLoaded",

    async () => {
        console.log("hi");
        const article = await fetchArticle();

        let html = article.body_html;
        

        document.querySelector(".article_content").innerHTML = html;
        document.querySelector("#title").innerHTML = article.title;
        // hljs.initHighlightingOnLoad();
        document.head.insertAdjacentHTML("beforeend",`    <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.4.0/styles/default.min.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.9.1/highlight.min.js"></script>
        <script>hljs.initHighlightingOnLoad();</script>`);




    })
