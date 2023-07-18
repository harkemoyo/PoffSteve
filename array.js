let uri = 'forecast.json';
let req = new Request(uri, {method:'GET'});

// variables
let container, df

let log = console.log
// loading the DOM
document.addEventListener('DOMContentLoaded', init);

function init() {
    container = document.getElementById('container');
    df = new DocumentFragment();

    // fetch
    fetch(req)
    .then((response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('BAD HTTP');
        }
    })
//   DOM content

// creating weather grid
  .then((json)=>{
    log(json)
        json.hourly.data.forEach((hour)=>{
            // temperature
            let div = document.createElement('div');
            div.classList.add('hour');
            let timeStamp = hour.time;
            // log("time in second:",timeStamp)
            // find the id
            div.id = 'ts_' + timeStamp.toString();// id cannot be started with a number ('ts_') and return it as a string.
            let temp = parseInt(hour.temperature)
            div.textContent = temp.toString().concat('\u00B0')
            // div.icon = hour.icon
            div.title = hour.summary
            // Time
            let span = document.createElement('span');
            let date = new Date(timeStamp * 1000);
            span.textContent = date.getHours().toString().concat(":00")

          
            // append to
            div.appendChild(span);
            df.appendChild(div);
        });
       container.appendChild(df);
         // using array methods to find the time that will be raining 
         json.hourly.data.filter((hour) => {
            if( hour.precipProbability > 0.5){
             return true;
            }
            return false
         }).map((hour) =>{
             return hour.time;
         }).forEach((timeStamp) =>{

             let id = 'ts_'.concat(timeStamp);
         document.getElementById(id).classList.add('precip');
         })

        //  finding the highest temperature reducing the all to one
        let highest = json.hourly.data.reduce((acc,hour) => {
            if(hour.temperature > acc.temp){
                return {temp: hour.temperature, time: hour.time};
            }else{
                return acc;
            }
        }, { temp:-100, time:1000})
        // creating an id
        let id = 'ts_'+ highest.time;
        document.getElementById(id).classList.add('hot');
    })
   .catch ((error) => {
    log(error)
   })
}
