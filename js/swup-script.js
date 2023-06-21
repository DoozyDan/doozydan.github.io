const swup = new Swup({
    plugins: [new SwupScrollPlugin()]
});

function swupActiveLinks(){
    let currentPath = window.location.pathname;
    let links = document.querySelectorAll('nav div a'); // <- put your link selector here
    for (const link of links) {
        let linkPath = (new URL( link.href )).pathname;
        link.ariaCurrent = linkPath == currentPath ? 'page' : false;
    }
}

swup.on('contentReplaced', () => {
    swupActiveLinks(); // trigger after swup
});
swupActiveLinks(); // trigger on page load