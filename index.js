currentlySelected = 0;
const nodes = document.querySelectorAll('.activeblock');
const transferleft = document.querySelector('.transferleft')
const transferright = document.querySelector('.transferright')


function previous() {
    transferright.disabled = false;
    nodes[currentlySelected].classList.remove("active");
    currentlySelected--;
    nodes[currentlySelected].classList.add("active");

    if (currentlySelected == 0) {
        transferleft.disabled = true;
    }


}

function next() {
    transferleft.disabled = false;
    nodes[currentlySelected].classList.remove("active");
    currentlySelected++;
    nodes[currentlySelected].classList.add("active");


    if (currentlySelected + 1 === nodes.length) {
        transferright.disabled = true;
    }
}

function init() {
    transferleft.addEventListener("click", function () {
        previous();
    })
    transferright.addEventListener("click", function () {
        next();
    })
}

init();