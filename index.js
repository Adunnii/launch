const birthday = new Date('June 4, 2022 12:00:00').getTime();

console.log(birthday)

const countDown = setInterval(()=>{
    const today = new Date().getTime();
    
    const distanceBetweendays =  birthday - today;

    let days = Math.floor(distanceBetweendays / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distanceBetweendays % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distanceBetweendays % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distanceBetweendays % (1000 * 60)) / 1000);
    
    document.getElementById("box_1").innerHTML = days
    document.getElementById("box-2").innerHTML =hours
    document.getElementById("box-3").innerHTML=minutes
    document.getElementById("box-4").innerHTML= seconds


    if (distanceBetweendays < 0) {
        clearInterval(x);
        document.getElementById("main_text").innerHTML = "Happy Birthday OYIN!!";
      }

}, 1000) 


console.log(countDown)

