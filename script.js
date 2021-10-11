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
    
    getdataHere();

    text.value='';
    Username.value='';
    number.value='';
    rollNumber.value='';
    
});

// Temp storage

// let str = [];

const getdataHere = () =>{
    const obj = [
        {
            Username: Username.value,
            number: number.value,
            roll: rollNumber.value,
            message: text.value
        }
    ];
    
    if( localStorage.getItem('data') === null){
        let str = [];
        str.push([obj]);
        localStorage.setItem('data',JSON.stringify(str));
    }
    else{
        let newList =localStorage.getItem('data');
        str = JSON.parse(newList);

        str.push(obj);
        // str.country = "str";
        localStorage.setItem('data',JSON.stringify(str));
    }
}