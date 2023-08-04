let open_button = document.querySelector(".open_button");
    let close_button = document.querySelector(".close_button");
    let navbar_items = document.querySelector(".navbar_items");

    open_button.onclick = function(){
        navbar_items.style.right = "0px";
    }
    close_button.onclick = function(){
        navbar_items.style.right = "-500px";
    }
    