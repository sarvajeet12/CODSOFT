function btnclick(count){
    document.getElementById("text_box").value+=count;
}

// eval() function : to operate arithmetic operations.
function calculator(){
    document.getElementById("text_box").value=eval(document.getElementById("text_box").value);
}

