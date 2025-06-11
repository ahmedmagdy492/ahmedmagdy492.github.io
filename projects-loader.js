window.addEventListener('load', function() {
    (function () {
        const URL = "https://raw.githubusercontent.com/ahmedmagdy492/ahmedmagdy492.github.io/main/data/projects.json";
        const contentContainer = document.querySelector('#projects-content');
    
        fetch(URL, {
            method: "GET",
        })
        .then(data => data.json())
        .then(data => {
            const projects = [...data.projects];

            contentContainer.innerHTML = '';

            projects.forEach(project => {
                const article = document.createElement('article');
                const header = document.createElement('header');
                const h2 = document.createElement('h2');
                h2.innerHTML = project.name;
                header.appendChild(h2);
                article.appendChild(header);

                const imgContainer = document.createElement('div');
                imgContainer.className = 'image fit';
                const img = document.createElement('img');
                img.src = project.posterUrl;
                const desc = document.createElement('p');
                desc.innerHTML = project.description;
                imgContainer.appendChild(img);
                article.appendChild(imgContainer);
                article.appendChild(desc);

                const ul = document.createElement('ul');
                ul.className = 'actions special';
                article.appendChild(ul);

                if(project.links) {
                    const links = [...project.links];

                    links.forEach(link => {
                        const li = document.createElement('li');
                        const a = document.createElement('a');
                        a.href = link.url;
                        a.className = "button";
                        if(link.target)
                            a.target = link.target;
                        if(link.img) {
                            const linkImg = document.createElement('img');
                            linkImg.src = link.img;
                            a.appendChild(linkImg);
                        }
                        else {
                            a.className = 'btn btn-primary';
                            a.innerText = link.text;
                        }
                        li.appendChild(a);
                        ul.appendChild(li);
                    });
                }

                contentContainer.appendChild(article);
            });
        })
        .catch(err => contentContainer.innerHTML = `<h5 style='color: red;' class='text-center'>Failed to reterive projects data: ${err}</h5>`);
    })();
});