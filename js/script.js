
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
function heartColor(el){
    const src = el.getAttribute('src')
    if (src == 'images/heart1.svg'){
        el.setAttribute("src",'images/heart2.svg')
    }
    else { 
        el.setAttribute("src",'images/heart1.svg')
    }
    
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
    },
    {
        name: "Пиррура Буроухая",
        price: '35000 ₽',
        existence: "В наличии",
        img: "буроухая.jpg"
    },
    {
        name: "Какарик Зелёный",
        price: '3500 ₽',
        existence: "В наличии",
        img: "какарикзеленый.jpg"
    },
    {
        name: "Неразлучник Розовощекий ",
        price: '1790 ₽',
        existence: "В наличии",
        img: "розовощекий.png"
    },
    {
        name: "Неразлучник Масковый голубой",
        price: '3500 ₽',
        existence: "В наличии",
        img: "масковый.webp"
    },
    {
        name: "Волнистый попугай",
        price: '1290 ₽',
        existence: "В наличии",
        img: "волнистый.jpeg"
    },
    {
        name: "Какаду Желтохохлый",
        price: '225000 ₽',
        existence: "Под заказ",
        img: "Желтохохлый.jpg"
    },
    {
        name: "Какаду Молуккский",
        price: '230000 ₽',
        existence: "В наличии",
        img: "молуккский.jpg"
    },
    // {
    //     name: "Какаду Желтохохлый",
    //     price: '225000 ₽',
    //     existence: "В наличии",
    //     img: "Желтохохлый.jpg"
    // },
    {
        name: "Rio корм для средних попугаев основной 1 кг",
        price: '323 ₽',
        existence: "В наличии",
        img: "кормсред.png"
    },
    {
        name: "Rio корм для крупных попугаев основной 1 кг",
        price: '463 ₽',
        existence: "В наличии",
        img: "кормкруп.jpg"
    },
    {
        name: "Rio корм для волнистых попугаев основной 1 кг",
        price: '332 ₽',
        existence: "В наличии",
        img: "кормволн.jpg"
    },
    {
        name: "Triol клетка для крупных птиц BC22 W белая 1130*900*1930 мм",
        price: '43500 ₽',
        existence: "В наличии",
        img: "клеттриол1.jpeg"
    },
    {
        name: "Triol клетка для крупных птиц BC23 черная 1230*1030*2030 мм",
        price: '55000 ₽',
        existence: "В наличии",
        img: "клеттриол2.jpeg"
    },
    {
        name: "MONTANA Cages Клетка для средних птиц Castell Nova Dome, тёмно-серая, 120х95х186см",
        price: '90000 ₽',
        existence: "Нет в наличии",
        img: "монтана.jpg"
    },
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