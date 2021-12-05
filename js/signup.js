function continuebtn() {
    let inputTag = document.querySelectorAll("input");
    let alarm = document.querySelectorAll(".error");

    for(let i=0; i<inputTag.length; i++) {
        if(inputTag[i].value =="") {
            alarm[i].style.display = "block";
        } else {
            alarm[i].style.display = "none";
        }
    }
}