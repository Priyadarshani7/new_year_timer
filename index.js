const daye1 = document.getElementById('days');
const houre1 = document.getElementById('hours');
const mine1=document.getElementById('mins');
const sece1=document.getElementById('secs');



const newyear = '1 Jan 2024';

function countdown(){
const newyearsdate = new Date(newyear)
const currentdate = new Date();
const totalseconds = (newyearsdate-currentdate)/1000;

const days = Math.floor(totalseconds/3600/24)
const hours =Math.floor(totalseconds/3600)%24;
const min =Math.floor(totalseconds/60)%24%60;
const sec = Math.floor(totalseconds % 60);

daye1.innerHTML= days;
houre1.innerHTML=hours;
mine1.innerHTML=min;
sece1.innerHTML=sec;
}
countdown();

setInterval(countdown,1000)