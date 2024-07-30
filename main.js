window.addEventListener('load', function() {
    (function () {
        const URL = "https://ahmedmagdy492.github.io/data/projects.json";
        const contentContainer = document.querySelector('#projects-content');
    
        fetch(URL, {
            method: "GET",
        })
        .then(data => data.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => contentContainer.innerHTML = "<h1 style='color: red;' class='text-center'>Failed to reterive projects data</h1>");
    })();
});