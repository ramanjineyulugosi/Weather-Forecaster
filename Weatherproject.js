
const cityValue=document.querySelector("#cityValue")
const cityName=document.querySelector("#cityName")
const countryName=document.querySelector("#countryName")
const temp=document.querySelector("#temp")
const iconimage=document.querySelector("#icon")
const humidity=document.querySelector("#humidity")
const windSpeed=document.querySelector("#windSpeed")
const airPressure=document.querySelector("#airPressure")
// let search=async()=>{
  async function search(){
    try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityValue.value}&units=metric&appid=a214c0369f92f0783171cd7acef7df32`
    const response =await fetch(url)
    let data= await response.json()
    console.log(data);
    cityName.textContent=data.name
    countryName.textContent=data.sys.country
    const temperature =data.main.temp
    temp.textContent= Math.floor(temperature)
    humidity.textContent = data.main.humidity
    windSpeed.textContent = data.wind.speed
    airPressure.textContent =data.main.pressure

    const image=data.weather[0].main
   if(image=="Clear"){
    iconimage.src="Assets/clear.png"
   }
   else if(image=="Clouds"){
    iconimage.src="Assets/cloud.png"
   }
   else if(image=="Rain"){
    iconimage.src="Assets/rain.png"
   }
   else if(image=="Drizzle"){
    iconimage.src="Assets/drizzle.png"
   }
   else if(image=="Snow"){
    iconimage.src="Assets/snow.png"
   }
  }
  catch{
    alert("Please enter valid City Name")
  }
}


const btn=document.querySelector("#btn")
function eHover(e){
  btn.style.backgroundColor="green";
}

btn.addEventListener("mouseout",function(){
  btn.style.backgroundColor="white"
})




  
   
    

