(function(){
    const second = 1000,
        minute = second*60,
        hour = minute*60,
        day = hour*24;

    let birthday = "Mar 05, 2023 12:09:00",
    countdown=new Date(birthday).getTime(),
    x=setInterval(function () {

            let now = new Date().getTime(),
                distance = countdown - now;
    document.getElementById("days").innerText = Math.floor(distance/(day)),

    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),

    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),

    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second)

    if (distance<0) {
                let headline = document.getElementById("headline"),

                countdown = document.getElementById("countdown")
                content = document.getElementById("content");
                headline.innerText = "it's ur birthday!!!!";
                countdown.style.display = "none";
                content.style.display = "block";
                clearInterval(x);


            }

        }, 0)

    }());








