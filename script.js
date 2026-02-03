// http://api.weatherapi.com/v1/current.json?key=e898aef308874046887133020260202&q=Mumbai&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time p:first-child");
const dateandTimeField = document.querySelector(".time p:last-child");
const conditionField = document.querySelector(".condition p:last-child");
const searchField = document.querySelector(".search");
const form = document.querySelector('form')
let target='Pune'
const fetchresults= async(target)=>{
    let url=`http://api.weatherapi.com/v1/current.json?key=e898aef308874046887133020260202&q=${target}&aqi=no`  
    const res=await fetch(url)
    const data= await res.json()
    console.log(data)

    let locationnname=data.location.name 
    let temp=data.current.temp_c +"°C"
    let time=data.location.localtime
    let condition = data.current.condition.text;
    updateDetails(temp, locationnname, time, condition);

}
function updateDetails(temp, locationName, time, condition) {
    temperatureField.innerText = temp;
    locationField.innerText = locationName;
    dateandTimeField.innerText = time;
    conditionField.innerText = condition;
}
function searchForLocation(e) {
    e.preventDefault();
    target = searchField.value;
    fetchresults(target);
}
form.addEventListener('submit',searchForLocation)
fetchresults(target);
