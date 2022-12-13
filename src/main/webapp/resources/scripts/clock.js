function setTime(){
    let now = new Date();
    let clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleDateString("ru") + " " + now.toLocaleTimeString("ru");
}
window.onload = function(){
    setTime();
    window.setInterval(function() {setTime()}, 9000);
};