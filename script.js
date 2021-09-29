let btn = document.getElementById('btn');
let wave = document.getElementById('wave');
let ship = document.getElementById('ship');

let text = document.getElementById('text');
let Username = document.getElementById('Username');
let number = document.getElementById('number');
let rollNumber = document.getElementById('rollNumber');

btn.addEventListener("click" , ()=>{
    // alert('hi');
    if(rollNumber.value  && number.value  && Username.value ){
        wave.classList.toggle('show');
        ship.classList.toggle('show');
        alert("Successfully submitted");
    }
    else{
        alert("Please fill the required details");
    }

    text.value='';
    Username.value='';
    number.value='';
    rollNumber.value='';
    
});