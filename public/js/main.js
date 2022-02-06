const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector('.middle_layer');
const day = document.getElementById("day");
const today_date = document.getElementById("today_date");

var weekday = new Array(7);
weekday[0]="SUNDAY";
weekday[1]="MONDAY";
weekday[2]="TUESDAY";
weekday[3]="WEDDAY";
weekday[4]="THRUSDAY";
weekday[5]="FRIDAY";
weekday[6]="SATURDAY";
let currentTime = new Date();
day.innerText = weekday[currentTime.getDay()];

var months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
];

const month = months[currentTime.getMonth()];
const date = currentTime.getDate();

today_date.innerText = `${date} ${month}`;

const getinfo = async(event) =>{
        event.preventDefault();
        let cityVal = cityName.value;
        if(cityVal=== ""){
                city_name.innerHTML = `Please the write the name before search`;
                datahide.classList.add("data_hide");
        }
        else{
                try{
                let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=799a23d0e49e3a8b70add240fa55f6fc`
                const response = await fetch(url);
                const data = await response.json();
                const arrData = [data];
                city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
                temp_real_val.innerText = arrData[0].main.temp;
                const tempSta = arrData[0].weather[0].main;
                if(tempSta == "Clear"){
                        temp_status.innerHTML = "<i class='fas fa-sun' style='color : #eccc68;'></i>"
                    }else if(tempSta == "Clouds"){
                        temp_status.innerHTML = "<i class='fas fa-cloud' style='color : #f1f2f6;'></i>"
                    }else if(tempSta == "Rain"){
                        temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color : #a4b0be;'></i>"
                    }else{
                        temp_status.innerHTML = "<i class='fas fa-cloud' style='color : #44c3de;'></i>"
                    }
                    datahide.classList.remove("data_hide");

                }catch{
                 city_name.innerHTML = `Please Enter The City Name Properly`;
                 datahide.classList.add("data_hide");
                }
        }
}

submitBtn.addEventListener("click", getinfo);