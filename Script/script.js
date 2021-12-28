const menu = document.getElementById('menu-burger')
const checker = document.getElementById("search-bar-div")
function onMenuClick(){
    if(getComputedStyle(checker).display == 'none'){
        document.getElementById('nav-bar').style.height = "250px"
        checker.style.display = "flex"
        document.getElementsByClassName('nav-list')[0].style.display = "flex"
    }else{
        document.getElementById('nav-bar').style.height = "50px"
        checker.style.display = "none"
        document.getElementsByClassName('nav-list')[0].style.display = "none"
    }
}