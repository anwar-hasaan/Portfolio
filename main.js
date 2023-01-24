// toggle skills, experience, education tabs
let tablinks = document.getElementsByClassName('tab-link');
let tabcontents = document.getElementsByClassName('tab-contents');

function open_tab(tabname){
    for (let tablink of tablinks) {
        tablink.classList.remove('active-tab');
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove('active');
    }
    event.currentTarget.classList.add('active-tab');
    document.getElementById(tabname).classList.add('active');
}

// toggle side menu
let sidemenu = document.getElementById('side-menu');
function open_menu(){
    sidemenu.style.right = '0';
}
function close_menu(){
    sidemenu.style.right = '-200px';
}