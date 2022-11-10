let menu_list_active_button = document.getElementById('menu_list_active_button');
let menu_side = document.getElementsByClassName('menu_side')[0];

menu_list_active_button.addEventListener('click', ()=> {
    menu_side.style.transform = "unset";
    menu_list_active_button.style.opacity = 0;
});


let song_side = document.getElementsByClassName('song_side')[0];

song_side.addEventListener('click', () => {
    menu_side.style.transform = "translateX(-100%);";
    menu_list_active_button.style.opacity = 1;
});