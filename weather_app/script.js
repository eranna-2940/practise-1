const inputValue = document.getElementById("location-input");
//const buttonValue = document.getElementById("btn");
const imgValue = document.getElementById("img");
const tempValue = document.getElementById("temp-value");
const weatherValue= document.getElementById("weather-desc");
const locationValue = document.getElementById("location")


const  link = "8f4485f5f505ef4d2ad72e90b213a15f"

function getvalue(){
    if(inputValue.value == ""){
        alert('Please Enter location')
    }else{
        let loc = inputValue.value
        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${link}`
        fetch(url).then(res => res.json())
        .then(data =>{
            console.log(data)
            const {name} = data
            const {feels_like} = data.main
            const {description} = data.weather[0]
            tempValue.innerText = Math.floor(feels_like-273)
            locationValue.innerText =name;
            weatherValue.innerText = description;
        })
        .catch(() =>{
            alert('Enter valid location')
        })
        inputValue.value = "";
    }
}