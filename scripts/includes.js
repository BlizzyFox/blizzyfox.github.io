fetch("/includes/sidenav.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not load sidenav");
    }
        return response.text();
    })
    .then(html => {
        document.getElementById("sidenav-placeholder").innerHTML = html;
    })
    .catch(error => {
        console.error(error);
    });