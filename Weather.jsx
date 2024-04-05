import React, { useState } from 'react'
import './Weather.css'
const api={
  key:"51c72d67165d4542032722b26613af76",
  base:"https://api.openweathermap.org/data/2.5/"
};
const Weather = () => {
  const [query,setQuery]=useState('');
  const [weather,setWeather]=useState({});
  const search= event =>{
  if(event.key==="Enter"){//if enter is pressed then the key is fetched andconverted to json
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(response=>response.json())
      .then(data=>{
        setWeather(data);
        setQuery('');
        console.log(data)
        document.querySelector(".back").style.display='none';
      })
  }
  } 
            
const datebuilder=(d)=>{
  let months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  let day=days[d.getDay()];
  let date=d.getDate();
  let month=months[d.getMonth()];
  let year=d.getFullYear();

  return `${day} ${date} ${month} ${year} `;
}
function searchit(){
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)//fetching data from the key
  .then(response=>response.json())//converting data to json
  .then(data=>{
    setWeather(data);
    setQuery('');})  
   document.querySelector(".back").style.display='none';
}
  return (
    
    <div>
   <div  className={(typeof weather.main !="undefined")?((weather.weather[0].main==="Haze")? 'warm':'cold'):'app'}>
    <main>
  <div className="searchbox w-5/6  mx-auto flex">
    <input type="text" placeholder='Search for a city' className='searchbar mt-8 h-10 w-11/12 rounded-xl border-2 border-gray-400' value={query}
    onChange={e=>setQuery(e.target.value)} onKeyPress={search}/>
   <button onClick={searchit} > <img className='h-10 w-12 ml-10 mt-8' src="https://cdn0.iconfinder.com/data/icons/it-hardware/100/search-512.png" alt="" /></button>
  </div>
  <div  className ="back flex justify-around">
        <h1 className='text-black-300 font-bold text-8xl pt-12 w-6/12 font-sans'>Type the name<br /><span className='text-gray-500'>of the city</span></h1>
        <img className='w-4/12 ' src="https://th.bing.com/th/id/R.f521a5dc7644d4eae779faa2b617e9d1?rik=MtinExjnCQ%2bJTA&riu=http%3a%2f%2pluspng.com%2fimg-png%2fpng-sun-and-clouds-sun-behind-the-cloud-clipart-by-
        iramsej-2400.png&ehk=MvpDnvQs0Z%2fpiRhX0yL4cA3xW%2bv6tWr%2f5qG4CYvP0Mo%3d&risl=&pid=ImgRaw&r=0" alt="" />
      </div>
  <div className='flex rounded-4xl '> 
  {(typeof weather.main !="undefined")?(
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
  </div>): <div  className ="back flex justify-around">
        <h1 className='text-black-300 font-bold text-8xl pt-12 w-6/12 font-sans'>Type the name<br /><span className='text-gray-500'>of the city</span></h1>
        <img className='w-4/12 ' src="https://th.bing.com/th/id/R.f521a5dc7644d4eae779faa2b617e9d1?rik=MtinExjnCQ%2bJTA&riu=http%3a%2f%2pluspng.com%2fimg-png%2fpng-sun-and-clouds-sun-behind-the-cloud-clipart-by-
        iramsej-2400.png&ehk=MvpDnvQs0Z%2fpiRhX0yL4cA3xW%2bv6tWr%2f5qG4CYvP0Mo%3d&risl=&pid=ImgRaw&r=0" alt="" />
      </div>}
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
