function changeImage(element){
    element.src = "images/succulents-2.jpg";
}

function changeImageBack(element){
    element.src = "images/succulents-1.jpg";
}


var alerts = document.querySelector("#alert1");
function closealert(element){
    alerts.remove();
}