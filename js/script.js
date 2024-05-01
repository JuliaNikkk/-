
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
function showInfo(el) {
    el.classList.toggle('showList')
}
function clrChange(el) {
}


const mass = [
    {
        name: "Корелла безщёкая",
        price: '7100 ₽',
        existence: "В наличии",
        img: 'бесщёкая.jpg'
    },
    {
        name: "Какаду Гала",
        price: '153000 ₽',
        existence: "Нет в наличии",
        img: 'гала.jpg'
    },
    {
        name: "Корелла щекастая",
        price: '6400 ₽',
        existence: "В наличии",
        img: 'щекастая.png'
    },
    {
        name: "Аратинга Солнечный",
        price: '50000 ₽',
        existence: "В наличии",
        img: 'аратинга.jpg'
    }
]
const wrapper = document.getElementsByClassName('wrapper')[0];
function del() {
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }
}
const newContainer = document.getElementsByClassName('container')[0].cloneNode(true)
function createList(){
    del()
    for(let i = 0; i < mass.length; i++){
        const clone = newContainer.cloneNode(true);
        clone.getElementsByClassName('name')[0].innerText = mass[i].name
        clone.getElementsByClassName('price')[0].innerText = mass[i].price
        clone.getElementsByClassName('existence')[0].innerText = mass[i].existence
        clone.getElementsByClassName('img')[0]
        .style.backgroundImage = `url(../images/${mass[i].img})`;
        // `url(../images/${mass[i].img})`
        // 'url(../images/бесщёкая.jpg)'
        wrapper.appendChild(clone)
    }
    checkColor()
}
createList()
// let bublik = 'Бубли'
// for (let i = 10; i > 7; i--) {
//     if (bublik == "Бублик")
//         console.log("АААААААААААА");
//     else
//         console.log(bublik);
//     bublik = bublik + 'к'
// }