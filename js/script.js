
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
        else if (txt == 'Под заказ') {
            el.classList.add('yel3');
        }
    }

}

function showModal() {
    document.getElementsByClassName("backdrop")[0].classList.add("show")
}
function txtChange(el) {
    const txt = el.innerText
    if (txt == 'Добавить в корзину') {
        el.innerText = 'В корзине';
        showModal()
    }
    else if (txt == 'В корзине') {
        el.innerText = 'Добавить в корзину'
    }
    el.classList.toggle('buttonGray');
}
function showInfo(el) {
    el.classList.toggle('showList')
}
function heartColor(el) {
    const src = el.getAttribute('src')
    if (src == 'images/heart1.svg') {
        el.setAttribute("src", 'images/heart2.svg')
    }
    else {
        el.setAttribute("src", 'images/heart1.svg')
    }
}
const mass_ = [
    {
        name: "Корелла безщёкая",
        price: '7100 ₽',
        existence: "В наличии",
        img: 'бесщёкая.jpg',
        href: "pages/item.html",
        type: 'middle',
    },
    {
        name: "Какаду Гала",
        price: '153000 ₽',
        existence: "Нет в наличии",
        img: 'гала.jpg',
        type: 'big'
    },
    {
        name: "Корелла щекастая",
        price: '6400 ₽',
        existence: "В наличии",
        img: 'щекастая.png',
        type: 'middle'
    },
    {
        name: "Аратинга Солнечный",
        price: '50000 ₽',
        existence: "В наличии",
        img: 'аратинга.jpg',
        type: 'middle'
    },
    {
        name: "Пиррура Буроухая",
        price: '35000 ₽',
        existence: "В наличии",
        img: "буроухая.jpg",
        type: 'middle'
    },
    {
        name: "Какарик Зелёный",
        price: '3500 ₽',
        existence: "В наличии",
        img: "какарикзеленый.jpg",
        type: 'middle'
    },
    {
        name: "Неразлучник Розовощекий ",
        price: '1790 ₽',
        existence: "В наличии",
        img: "розовощекий.png",
        type: 'little'
    },
    {
        name: "Неразлучник Масковый голубой",
        price: '3500 ₽',
        existence: "В наличии",
        img: "масковый.webp",
        type: 'little'
    },
    {
        name: "Волнистый попугай",
        price: '1290 ₽',
        existence: "В наличии",
        img: "волнистый.jpeg",
        type: 'little'
    },
    {
        name: "Какаду Желтохохлый",
        price: '225000 ₽',
        existence: "Под заказ",
        img: "Желтохохлый.jpg",
        type: 'big'
    },
    {
        name: "Какаду Молуккский",
        price: '230000 ₽',
        existence: "В наличии",
        img: "молуккский.jpg",
        type: 'big'
    },
    {
        name: "Rio корм для средних попугаев основной 1 кг",
        price: '323 ₽',
        existence: "В наличии",
        img: "кормсред.png",
        type: 'acsess'
    },
    {
        name: "Rio корм для крупных попугаев основной 1 кг",
        price: '463 ₽',
        existence: "В наличии",
        img: "кормкруп.jpg",
        type: 'acsess'
    },
    {
        name: "Rio корм для волнистых попугаев основной 1 кг",
        price: '332 ₽',
        existence: "В наличии",
        img: "кормволн.jpg",
        type: 'acsess'
    },
    {
        name: "Triol клетка для крупных птиц BC22 W белая 1130*900*1930 мм",
        price: '43500 ₽',
        existence: "В наличии",
        img: "клеттриол1.jpeg",
        type: 'acsess'
    },
    {
        name: "Triol клетка для крупных птиц BC23 черная 1230*1030*2030 мм",
        price: '55000 ₽',
        existence: "В наличии",
        img: "клеттриол2.jpeg",
        type: 'acsess'
    },
    {
        name: "MONTANA Cages Клетка для средних птиц Castell Nova Dome, тёмно-серая, 120х95х186см",
        price: '90000 ₽',
        existence: "Нет в наличии",
        img: "монтана.jpg",
        type: 'acsess'
    },
    // type: little, middle, big, acsess
]
let mass = mass_;
function changeType(type) {
    type = type.getAttribute("id");
    if (type == "all")
        mass = mass_
    else
        mass = mass_.filter(el => el.type == type);
    createList()
}
const wrapper = document.getElementsByClassName('wrapper')[0];
function del() {
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }
}
const newContainer = document.getElementsByClassName('container')[0].cloneNode(true)
function createList() {
    del()
    for (let i = 0; i < mass.length; i++) {
        const clone = newContainer.cloneNode(true);
        clone.getElementsByClassName('name')[0].innerText = mass[i].name
        clone.getElementsByClassName('price')[0].innerText = mass[i].price
        clone.getElementsByClassName('existence')[0].innerText = mass[i].existence
        clone.getElementsByClassName('img')[0]
            .style.backgroundImage = `url(../images/${mass[i].img})`;
        clone.getElementsByClassName('unlink')[0].setAttribute("href", mass[i].href ?? "#")

        // `url(../images/${mass[i].img})`
        // 'url(../images/бесщёкая.jpg)'
        wrapper.appendChild(clone)
    }
    checkColor()
}
createList()
const data = [
    {
        icon: "voln.svg",
        assort: "Мелкие попугаи",
        type: "little"
    },
    {
        icon: "corella.svg",
        assort: "Средние попугаи",
        type: "middle"
    },
    {
        icon: "ara.svg",
        assort: "Большие попугаи",
        type: "big"
    },
    {
        icon: "cage.svg",
        assort: "Товары для птиц",
        type: "acsess"
    },
]
const case1 = document.getElementsByClassName('case')[0];
function delet() {
    while (case1.firstChild) {
        case1.removeChild(case1.firstChild);
    }
}
const newPanel = document.getElementsByClassName('panel')[0].cloneNode(true)
function createBlock() {
    delet()
    for (let i = 0; i < data.length; i++) {
        const double = newPanel.cloneNode(true);
        double.getElementsByClassName('icon')[0]
            .style.backgroundImage = `url(../images/${data[i].icon})`;
        double.getElementsByClassName('assort')[0].innerText = data[i].assort;
        case1.appendChild(double)
        double.setAttribute("id", data[i].type)
    }
}
createBlock()

// function mouse(){
//     const txtLink = document.getElementsByClassName('navbar');
//     txtLinc.addEventListener('mouseover', function() {
//         element.style.backgroundColor = 'lightgray';
//         });

// }
// mouse()
// let bublik = 'Бубли'
// for (let i = 10; i > 7; i--) {
//     if (bublik == "Бублик")
//         console.log("АААААААААААА");
//     else
//         console.log(bublik);
//     bublik = bublik + 'к'
// }