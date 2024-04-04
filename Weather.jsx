import React, { useState } from 'react'
import './Weather.css'
const api={
  key:"51c72d67165d4542032722b26613af76",//api key
  base:"https://api.openweathermap.org/data/2.5/"//for weather
};
const Weather = () => {
  const [query,setQuery]=useState('');//takes the current state of input and updates the input
  const [weather,setWeather]=useState({});//api generated data is stored in setweather
  const search= event =>{
  if(event.key==="Enter"){//if you click on enter
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)//fetching data from the key
      .then(response=>response.json())//converting data to json
      .then(data=>{//jo data aaya
        setWeather(data);//use setweather me update krdo
        setQuery('');//ab kyuki data mil gya hai to query me jo input tha use khaali krdo
        console.log(data)
        document.querySelector(".back").style.display='none';
      })
  }
  } 
              //object bnaya
const datebuilder=(d)=>{
  let months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  let day=days[d.getDay()];//getday 0 se 6 index deta hai to days me koi ek milega
  let date=d.getDate();//date 1 to 31
  let month=months[d.getMonth()];//0 se 11 tk months array me se nikaal lega
  let year=d.getFullYear();// 4 digit year

  return `${day} ${date} ${month} ${year} `;
}
function searchit(){
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)//fetching data from the key
  .then(response=>response.json())//converting data to json
  .then(data=>{//jo data aaya
    setWeather(data);//use setweather me update krdo
    setQuery('');})
   
}
  return (
    
    <div>
   <div  className={(typeof weather.main !="undefined")?((weather.weather[0].main==="Haze")? 'warm':'cold'):'app'}>
    <main>
  <div className="searchbox w-5/6  mx-auto flex">
    <input type="text" placeholder='Search for a city' className='searchbar mt-8 h-10 w-11/12 rounded-xl border-2 border-gray-400' value={query}//input ke andar store hoga
    onChange={e=>setQuery(e.target.value)} onKeyPress={search}/>
   <button onClick={searchit} > <img className='h-10 w-12 ml-10 mt-8' src="https://cdn0.iconfinder.com/data/icons/it-hardware/100/search-512.png" alt="" /></button>
  </div>
  <div  className ="back flex justify-around">
        <h1 className='text-black-300 font-bold text-8xl pt-12 w-6/12 font-sans'>Type the name<br /><span className='text-gray-500'>of the city</span></h1>
        <img className='w-4/12 ' src="https://th.bing.com/th/id/R.f521a5dc7644d4eae779faa2b617e9d1?rik=MtinExjnCQ%2bJTA&riu=http%3a%2f%2pluspng.com%2fimg-png%2fpng-sun-and-clouds-sun-behind-the-cloud-clipart-by-
        iramsej-2400.png&ehk=MvpDnvQs0Z%2fpiRhX0yL4cA3xW%2bv6tWr%2f5qG4CYvP0Mo%3d&risl=&pid=ImgRaw&r=0" alt="" />
      </div>
  <div className='flex rounded-4xl '> 
  {(typeof weather.main !="undefined")?(// bahaut zruri line chaap lo
  <div className='infobox mx-auto mt-12'>
  <div className="locationbox mt-16 ">
    <div className="location text-white text-center">
      {weather.name},{weather.sys.country}  <br />
       {datebuilder(new Date())}
      </div>
  </div>
  <div className="weatherbox mt-20">
    <div className="temp text-white text-center text-4xl font-bold">
      {Math.round(weather.main.temp)}°C
    </div>
    <div className="weatherhow text-white text-center text-3xl mt-16 font-semibold pb-4">
      {weather.weather[0].main}
    </div>
  </div>
  </div>):('')}
  </div>
</main>
    </div>
</div>
  )
}
export default Weather





























// import React, { useState } from 'react'
// //
// const api={
//     key:"5bab4efbdd294f55ab87a918edc0c817",
//     base:"https://api.openweathermap.org/data/2.5/Weather.jsx:12"
// }  
// const Weather = () => {
//   const[query,setQuery]=useState('')
//   const [weather, setWeather] = useState({})
//     const search=event=>{
//         if(event.key==="Enter"){
//             fetch(`${api.base}weather?q${query}&units=metric&APPID=${api.key}`)
//              .then(res=>res.json()).then(result=>{ 
//               setWeather(result);
//               setQuery('')
//             console.log(result)   })
//         }
//     }

//   return (
//     <div>
//       <main>
//     <div className="searchbox">
//         <input type="text" placeholder="Search for a city..." className='searchbar' value={query} 
//         onChange={e => setQuery(e.target.value)} onKeyPress={search} />
// </div>
// <div className="locationbox">
//   <div className="location">
//     {weather.name}
//   </div>
// </div>

//     </main>
//     </div>
//   )
// }

// export default Weather
