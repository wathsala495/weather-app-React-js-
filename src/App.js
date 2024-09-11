import logo from './logo.svg';
import './App.css';
import thunder from './images/thunder.png'
import { useEffect, useState } from 'react';

function App() {
  
  const [city,setCity]=useState("Delhi")
  const [weatherData,setWeatherData] =useState(null)

  const currentDate = new Date()
 const months=[
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'Deember'
  

 ]
  
  
  const month =months[currentDate.getMonth()];
  const date =currentDate.getDate();
  const year = currentDate.getFullYear();

  const formatedDate= month + " "+ date + ","+year;
  const API_KEY ="ea1e412aafb4c15608164e38dd8ef8e2";

  const fetchWeatherData= async ()=>{
    try{
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
   const data =await response.json()
   console.log(data)
   setWeatherData(data)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchWeatherData()
  },[])

  const handleInputChange=(e)=>{
     e.preventDefault()
     console.log(e.target.value)
     setCity(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("handlesubmit")
    fetchWeatherData()
    console.log("end")
  }
 

  return (
    
    <div className='flex justify-center items-center h-screen  bg-[#89CFF0] '>
      
        <div className='container bg-gradient-to-r from-[#0000FF] to-blue-500  flex flex-col items-center shadow-2xl w-[300px] h-[500px] text-white py-[40px] rounded-2xl'>
          {weatherData && 
          <>
          <h1 className='container_date pt-[20px] '>{formatedDate}</h1>
        <div className='weather_data'>
          <h2 className='container_city text-center font-bold text-[20px] pb-[20px]'>{weatherData.name}</h2>
          <div className='flex justify-center'>
          <img className='container_imgflex w-[150px] pb-[20px]' src={thunder}/></div>
          <h2 className='container-degree text-center text-[30px] font-bold'>{weatherData.main.temp}</h2>
          <h2 className='country_per text-center'>{weatherData.weather[0].main}</h2>
          <form className='form pb-[10px] pt-[50px]' onSubmit={handleSubmit}>
            <input type="text" className='input p-[5px] text-[black]' placeholder='Enter city name' onChange={handleInputChange}/>
            <button type="submit" className='border bg-white text-black px-[8px] py-[4px]'  >Get</button>
          </form>
        </div>
          </>}
        
  
    </div>
      
      
    </div>
  );
}

export default App;

// import thunder from './images/thunder.png';
// import { useState } from 'react';

// function App() {
//   const [city, setCity] = useState("Delhi");
//   const [weatherData, setWeatherData] = useState(null);
//   const API_KEY = "ea1e412aafb4c15608164e38dd8ef8e2";

//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   const currentDate = new Date();
//   const month = months[currentDate.getMonth()];
//   const date = currentDate.getDate();
//   const year = currentDate.getFullYear();
//   const formattedDate = `${month} ${date}, ${year}`;

//   const fetchWeatherData = async () => {
//     try {
//       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//       if (!response.ok) {
//         throw new Error('City not found');
//       }
//       const data = await response.json();
//       setWeatherData(data);
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//       setWeatherData(null);
//     }
//   };

//   const handleInputChange = (e) => {
//     setCity(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchWeatherData();
//   };

//   return (
//     <div className='flex justify-center items-center h-screen bg-[#89CFF0]'>
//       <div className='container bg-gradient-to-r from-[#0000FF] to-blue-500 flex flex-col items-center shadow-2xl w-[300px] h-[500px] text-white py-[40px] rounded-2xl'>
//         {weatherData &&
//           <>
//             <h1 className='container_date pt-[20px]'>{formattedDate}</h1>
//             <div className='weather_data'>
//               <h2 className='container_city text-center font-bold text-[20px] pb-[20px]'>{weatherData.name}</h2>
//               <div className='flex justify-center'>
//                 <img className='container-img-flex w-[150px] pb-[20px]' src={thunder} alt="Weather Icon" />
//               </div>
//               <h2 className='container-degree text-center text-[30px] font-bold'>{weatherData.main.temp}°C</h2>
//               <h2 className='country_per text-center'>{weatherData.weather[0].description}</h2>
//               <form className='form pb-[10px] pt-[50px]' onSubmit={handleSubmit}>
//                 <input
//                   type="text"
//                   className='input p-[5px] text-black'
//                   placeholder='Enter city name'
//                   value={city}
//                   onChange={handleInputChange}
//                 />
//                 <button type="submit" className='border bg-white text-black px-[8px] py-[4px]'>Get</button>
//               </form>
//             </div>
//           </>
//         }
//       </div>
//     </div>
//   );
// }

// export default App;
