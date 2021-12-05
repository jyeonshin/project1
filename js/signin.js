function clickID() {
    let idTag = document.getElementById("accountName");
    idTag.style.border = "3px solid #0071e3"

    if(idTag.value) {
        idTag.style.font = "#1d1d1f"
    } else {
        idTag.style.font = "#0071E3"
    }

}

function clickPW() {
    let pwTag = document.getElementById("pwText");
    pwTag.style.border = "3px solid #0071e3"

    if(pwTag.value) {
        pwTag.style.font = "#1d1d1f"
    } else {
        pwTag.style.font = "#0071E3"
    }
}