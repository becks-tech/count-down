const title = document.querySelector('#count')

const countDown = setInterval(()=>{
    const weddingDate = new Date('Sep 4, 2024 00:00:01').getTime()
    let now = new Date().getTime();

    let distance = weddingDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    title.textContent = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds +'s ';

    if(distance < 0){
        clearInterval(countDown)
        title.textContent = 'Countdown expired'
    }

}, 1000)