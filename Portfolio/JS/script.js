// alert("hello world")

// ----------------------------------------------------------------toggel code start-------------------------------------
let menu = document.getElementById("humbergur-menu");
function togglemenu() {
    document.getElementById("sidebar").classList.toggle("active");
    let close = menu.getAttribute("class");
    //console.log(typeof close);
    //console.log(close);
    if(close == "bi bi-list"){
        menu.setAttribute("class", "bi bi-x");
    }else{
        menu.setAttribute("class", "bi bi-list");
    }
    // alert("hello");
}

// ----------------------------------------------------------- toggel code end-------------------------------------


// -----------------------------------------------------------animation text------------------------------------------
const text = document.querySelector('.sec-text');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 0); // 0-4s
    setTimeout(() => {
        text.textContent = "Full Stack Developer";
    }, 4000);//5-8s
    setTimeout(() => {
        text.textContent = "Web Designer";
    }, 8000);//9-12x
}
textLoad();
setInterval(textLoad, 12000) // repeat textLoad func after 12s 
// Gap of 4s

// -----------------------------------------------------------End : animation text------------------------------------------





