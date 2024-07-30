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
                const divContainer = document.createElement('div');
                divContainer.className = 'card';
                const divImgContainer = document.createElement('div');
                divContainer.appendChild(divImgContainer);
                const img = document.createElement('img');
                img.className = 'card-img-top';
                img.src = project.posterUrl;
                img.alt = project.altText;
                divImgContainer.appendChild(img);

                const descDiv = document.createElement('div');
                divContainer.appendChild(descDiv);
                const cardBodyDiv = document.createElement('div');
                cardBodyDiv.className = 'card-body';
                descDiv.appendChild(cardBodyDiv);
                const cardTitle = document.createElement('h5');
                cardTitle.innerText = project.name;
                cardTitle.className = 'card-title';
                cardBodyDiv.appendChild(cardTitle);
                const cardText = document.createElement('p');
                cardText.className = 'card-text';
                cardText.innerHTML = project.description;

                if(project.links) {
                    const links = [...project.links];

                    links.forEach(link => {
                        const a = document.createElement('a');
                        a.href = link.url;
                        a.style.marginBottom = '5px';
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
                        cardBodyDiv.appendChild(a);
                    });
                }

                cardBodyDiv.appendChild(cardText);

                contentContainer.appendChild(divContainer);
            });
        })
        .catch(err => contentContainer.innerHTML = `<h5 style='color: red;' class='text-center'>Failed to reterive projects data: ${err}</h5>`);
    })();
});