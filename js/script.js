
function checkColor() {
    const tmp = document.getElementsByClassName("existence")
    for (let i = 0; i < tmp.length; i++) {
        const el = tmp[i];
        const txt = el.innerText
        if (txt == 'В наличии') {
            el.classList.add('green2');
        }
        else if (txt == 'Нет в наличии') {
            el.classList.add('red1');
        }
    }

}
checkColor();


function txtChange(el) {
    const txt = el.innerText
    if (txt == 'Добавить в корзину') {
        el.innerText = 'В корзине';
    }
    else if (txt == 'В корзине') {
        el.innerText = 'Добавить в корзину'
    }
    el.classList.toggle('buttonGray')
}
function showInfo(el){
    el.classList.toggle('showList')
}
function heartColor(el){
    const src = el.getAttribute('src')
    if (src == 'images/heart1.svg'){
        el.setAttribute("src",'images/heart2.svg')
    }
    else { 
        el.setAttribute("src",'images/heart1.svg')
    }
    
}
// let bublik = 'Бубли'
// for (let i = 10; i > 7; i--) {
//     if (bublik == "Бублик")
//         console.log("АААААААААААА");
//     else
//         console.log(bublik);
//     bublik = bublik + 'к'
// }