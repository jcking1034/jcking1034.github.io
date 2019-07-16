function scrollDetect() {
    if (window.pageYOffset > 0) {
        document.getElementsByTagName("nav")[0].style.display = "block"
    } else {
        document.getElementsByTagName("nav")[0].style.display = "none"
    }
}