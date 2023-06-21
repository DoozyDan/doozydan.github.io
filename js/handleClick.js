let activeIndex = 0;

const articles = document.getElementsByClassName("article-main");
const navBtn = document.getElementsByClassName("nav-link-button")

const handleRightClick = () => {
    const nextIndex = activeIndex + 1 <= articles.length - 1 ? activeIndex + 1 : 0;

    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
        nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);

    currentArticle.dataset.status = "after";

    nextArticle.dataset.status = "becoming-active-from-before";

    navBtn[nextIndex].className = "nav-link-button nav-button scaleUp"
    navBtn[activeIndex].className = "nav-link-button nav-button"

    setTimeout(() => {
        nextArticle.dataset.status = "active";
        activeIndex = nextIndex;
    });

    scrollUp()
}

const handleLeftClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : articles.length - 1;
    
    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
        nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);

    currentArticle.dataset.status = "before";

    nextArticle.dataset.status = "becoming-active-from-after";
    
    navBtn[nextIndex].className = "nav-link-button nav-button scaleUp"
    navBtn[activeIndex].className = "nav-link-button nav-button"

    setTimeout(() => {
        nextArticle.dataset.status = "active";
        activeIndex = nextIndex;
    });

    scrollUp()
}

const handleArticleOne = () => {

    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
        nextArticle = document.querySelector(`[data-index="${0}"]`);

    currentArticle.dataset.status = "after";

    nextArticle.dataset.status = "becoming-active-from-before";
    
    navBtn[0].className = "nav-link-button nav-button scaleUp"
    navBtn[1].className = "nav-link-button nav-button"
    navBtn[2].className = "nav-link-button nav-button"
    navBtn[3].className = "nav-link-button nav-button"
    
    setTimeout(() => {
        nextArticle.dataset.status = "active";
        activeIndex = 0;
    });

    scrollUp()
}

const handleArticleTwo = () => {
    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
        nextArticle = document.querySelector(`[data-index="${1}"]`);

    currentArticle.dataset.status = "after";

    nextArticle.dataset.status = "becoming-active-from-before";

    navBtn[0].className = "nav-link-button nav-button"
    navBtn[1].className = "nav-link-button nav-button scaleUp"
    navBtn[2].className = "nav-link-button nav-button"
    navBtn[3].className = "nav-link-button nav-button"

    setTimeout(() => {
        nextArticle.dataset.status = "active";
        activeIndex = 1;
    });

    scrollUp()
}

const handleArticleThree = () => {
    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
        nextArticle = document.querySelector(`[data-index="${2}"]`);

    currentArticle.dataset.status = "after";

    nextArticle.dataset.status = "becoming-active-from-before";

    navBtn[0].className = "nav-link-button nav-button"
    navBtn[1].className = "nav-link-button nav-button"
    navBtn[2].className = "nav-link-button nav-button scaleUp"
    navBtn[3].className = "nav-link-button nav-button"

    setTimeout(() => {
        nextArticle.dataset.status = "active";
        activeIndex = 2;
    });

    scrollUp()
}

const handleArticleFour = () => {
    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
        nextArticle = document.querySelector(`[data-index="${3}"]`);

    currentArticle.dataset.status = "after";

    nextArticle.dataset.status = "becoming-active-from-before";

    navBtn[0].className = "nav-link-button nav-button"
    navBtn[1].className = "nav-link-button nav-button"
    navBtn[2].className = "nav-link-button nav-button"
    navBtn[3].className = "nav-link-button nav-button scaleUp"
    
    setTimeout(() => {
        nextArticle.dataset.status = "active";
        activeIndex = 3;
    });

    scrollUp()
}


const scroll0 = document.getElementById("scroll-btn-0");
const scroll1 = document.getElementById("scroll-btn-1");
const scroll2 = document.getElementById("scroll-btn-2");
const scroll3 = document.getElementById("scroll-btn-3");


function scrollDown() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    })
}

scroll0.addEventListener("click", scrollDown)
scroll1.addEventListener("click", scrollDown)
scroll2.addEventListener("click", scrollDown)
scroll3.addEventListener("click", scrollDown)


function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}


// get scroll position
//
// let prevScrollpos = window.scrollY;
//
// window.onscroll = function() {
//     // get scroll position when onscroll is called
//     let currentScrollPos = window.scrollY;
//
//
//     if (currentScrollPos > prevScrollpos) {
//         scrollDown()
//     } else {
//         scrollUp()
//     }
//
//     // reset scroll position
//     setTimeout(() => {
//         prevScrollpos = currentScrollPos;
//     });
// }