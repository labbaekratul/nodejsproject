const submitbtn = document.getElementById('submitbtn');
const cityName  = document.getElementById('cityName');
const city_name  = document.getElementById('city_name');
const temp  = document.getElementById('temp');
const temp_status  = document.getElementById('temp_status');
const data_hide =document.querySelector('.data-hide')
const day  = document.getElementById('day');
const day_date  = document.getElementById('day_date');


const CurrentDate = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let day_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

day.innerText = day_week[CurrentDate.getDay()];
day_date.innerText =  `${CurrentDate.getDate()} , ${months[CurrentDate.getMonth()]}`;





const getinfo = async (event) =>{
    event.preventDefault();

    let url = `http://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=716536c610d959ddf3e0456b12b9bbf0`
    
    const cityVal = cityName.value;

    if(cityVal === ''){
         city_name.innerHTML=`please write the name before search`
         
    }
     else{
            try{
                let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=716536c610d959ddf3e0456b12b9bbf0`
                const response = await fetch(url);
                const data = await response.json();
                const arrdata= [data];
                city_name.innerText= `${arrdata[0].name}, ${arrdata[0].sys.country}`
                temp.innerHTML = `${arrdata[0].main.temp} , K `;
                const tempStatus =  arrdata[0].weather[0].main;

                if(tempStatus=='Clear'){

                    temp_status.innerHTML= '<i class="fas fa-sun style = "color : #eccc68></i>'
                }
                 else if(tempStatus=='Clouds'){
                      temp_status.innerHTML= '<i class="fas fa-cloud-meatball"></i>'
                 }
                
                 else if(tempStatus=='Rain'){
                    temp_status.innerHTML= '<i class="fas fa-cloud-rain"></i>'
               }

               else{
                temp_status.innerHTML= '<i class="fas fa-sun  style = "color : #eccc68"></i>'
               }
                 
               
                

            }catch{
                city_name.innerText=`"please enter the city name properly"`
                
            }

     }

}


submitbtn.addEventListener('click', getinfo);

