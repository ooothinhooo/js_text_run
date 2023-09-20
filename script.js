let input = document.querySelector('#text');
let display = document.querySelector('#display');
let speed = document.querySelector('#speed').value ? document.querySelector('#speed').value : 200 ;

input.addEventListener('input', function() {
   
    speed = document.querySelector('#speed').value ? document.querySelector('#speed').value : 200 ;
    console.log(speed)
    let string = input.value;
    let words = string.split(' ');
    display.textContent = words[0];
    let i = 1;
    let interval = setInterval(function() {
        if (i >= words.length) {
            clearInterval(interval);
        } else {
            display.textContent = words[i];
            i++;
        }
    }, parseInt(speed));
});

