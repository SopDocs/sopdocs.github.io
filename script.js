const fetchArticles = async () => {
    const response = await fetch('https://dev.to/api/articles');
    const data = await response.json();

    return data;
}
document.addEventListener("DOMContentLoaded",

    async () => {
        console.log("hi");
        const articles = await fetchArticles();

        let html = "";
        articles.forEach((e) => {
            html += `<div class="card">
                <a href="./post.html?id=${e.path}">
                <img src="${e.cover_image || 'https://placehold.co/600x400'}" alt="Image" srcset="" >
                <div class="card-title">${e.title}</div>
            </a>
            </div>`
        })

        document.querySelector(".latestposts").innerHTML = html;




    })
