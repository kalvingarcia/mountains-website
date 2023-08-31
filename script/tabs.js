let tab_index = 1;
showTab(tab_index);

function showTab(num) {
    tab_index = num

    let i;
    let tabs = document.getElementsByClassName("tab_content");
    let buttons = document.getElementsByClassName("tab_link");

    for(i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    for(i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" tab_active", "");
    }

    tabs[tab_index - 1].style.display = "block";
    buttons[tab_index - 1].className += " tab_active";
}