
function checkColor() {
    const tmp = document.getElementsByClassName(`existance`);
    for (let i = 0; i < tmp.length; i++) {
        const el = tmp[i];
        const txt = el.innerText;
        if (txt == 'В наличии') {
            el.classList.add('green');
        }
        else if (txt == 'Нет в наличии') el.classList.add('red');
    }
    // tmp.forEach(el => {
    //     const txt = el.innerText;
    //     if (txt == 'В наличии') el.classList.add('green');
    //     else if (txt == 'Нет в наличии') el.classList.add('red');
    // });
}
checkColor();

let bublik = 'Бубли'
for (let i = 10; i > 7; i--) {
    if (bublik == "Бублик")
        console.log("АААААААААААА");
    else
        console.log(bublik);
    bublik = bublik + 'к'
}