function clickID() {
    let idTag = document.getElementById("idname");
    idTag.style.border = "4px solid #0071e3"

    if(idTag.value) {
        idTag.style.font = "#1d1d1f"
    } else {
        idTag.style.font = "#0071E3"
    }


}

function clickPW() {
    let pwTag = document.getElementById("password");
    pwTag.style.border = "4px solid #0071e3"

    if(pwTag.value) {
        pwTag.style.font = "#1d1d1f"
    } else {
        pwTag.style.font = "#0071E3"
    }
}

function loginBtn() {
    let inputTag = document.querySelectorAll("input");
    let idTagText = inputTag[0].value;
    let pwTagText = inputTag[1].value;
    let alarm = document.querySelectorAll(".error");
    
    if(idTagText == "") {
        alarm[0].style.display = "block";

    } else {
        alarm[0].style.display = "none";

    }

    if(pwTagText == "") {
        alarm[1].style.display = "block";

    } else {
        alarm[1].style.display = "none";
    }

}
