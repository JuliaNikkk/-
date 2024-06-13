function showModal() {
    document.getElementsByClassName("backdrop")[0].classList.add("show")
}
function hideModal() {
    document.getElementsByClassName("backdrop")[0].classList.remove("show")
}
function hideModal(el) {
    console.log(el);
    if (el.target.className.includes("backdrop"))
        document.getElementsByClassName("backdrop")[0].classList.remove("show")
}
function polChange(el) {
    const buttons = document.getElementsByClassName("pol")
    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        element.classList.remove("buttonGray")
    }
    el.classList.toggle('buttonGray')
}
