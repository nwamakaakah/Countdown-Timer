const newYear = "01-01-2021 00:00:00";
//Format is "MM-DD-YYYY HH:MM:SS"

function countDown() {
    const today = new Date();
    const dDay = new Date(newYear);
    const totalSeconds = Math.floor(dDay - today)/1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    function timeFormat(time){
        if (time < 10){
            return "0" + time;
        }else{
            return time;
        }
    }

    if (totalSeconds < 0){
        
        document.getElementById("head").innerHTML= "Welcome to 2021";
        document.getElementById("timer").style.display = "none";
    }else{
        document.getElementById("days").innerHTML = timeFormat(days);
        document.getElementById("hours").innerHTML = timeFormat(hours);
        document.getElementById("minutes").innerHTML = timeFormat(minutes);
        document.getElementById("seconds").innerHTML = timeFormat(seconds);
    }
}

setInterval (countDown, 1000);
