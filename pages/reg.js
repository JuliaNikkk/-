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