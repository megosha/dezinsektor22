function formField(select_id, div_m, m_id, div_s, s_id, div_r, r_id){
    place = "Территория";
    div_metry = document.getElementById(div_m);
    metry = document.getElementById(m_id);
    div_sotki = document.getElementById(div_s);
    sotki = document.getElementById(s_id);
    div_room = document.getElementById(div_r);
    room = document.getElementById(r_id);

    territory = document.getElementById(select_id).value === place;
    if (territory){
        div_metry.setAttribute("hidden", "true");
        metry.setAttribute("disabled", "true");
        div_room.setAttribute("hidden", "true");
        room.setAttribute("disabled", "true");

        div_sotki.removeAttribute("hidden");
        sotki.removeAttribute("disabled");

    }
    else {
        if (metry.hasAttribute("disabled") === true){
            metry.removeAttribute("disabled");
        }
        if (room.hasAttribute("disabled") === true){
            room.removeAttribute("disabled");
        }
        if (div_metry.hasAttribute("hidden") === true){
            div_metry.removeAttribute("hidden");
        }
        if (div_room.hasAttribute("hidden") === true){
            div_room.removeAttribute("hidden");
        }
        div_sotki.setAttribute("hidden", "true");
        sotki.setAttribute("disabled", "true");
    }
}