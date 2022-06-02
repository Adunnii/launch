const today = new Date();
const birthday = 6

document.getElementById("box_1").innerText = birthday - today.getDay()
document.getElementById("box-2").innerText =today.getHours()
document.getElementById("box-3").innerText=today.getMinutes()
document.getElementById("box-4").innerText=today.getSeconds()