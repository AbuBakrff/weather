import React, { useState } from 'react'
import "./Header.css"
// import { Quyosh } from "../Svgs/Svg"
import Havoshar from "../../images/havosharcha.png"
import { Search } from '../Svgs/Svg'
import "../Main/Main.css"
import axios from 'axios'

function Header() {
  let d = new Date()
  let hours = d.getUTCHours();
  let minut = d.getMinutes();
  let week = d.toDateString();

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f2f04e9635d1e8ac89eecca136b80fe6`

  const searchLonation =(event) =>{
    if (event.key === "Enter" ) {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data);
      })
      searchLonation("");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(location);
  }


  // function myFunction() {
  //   document.getElementById("demo").style.display = "block";
  // }

  return (<>

    <div className='header container'>
      <div className="header__mini">&#127781; the.weather </div>
      <div className="header__content"></div>
     <div  id='demo'>  <img src="https://images.theconversation.com/files/442675/original/file-20220126-17-1i0g402.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop" alt="rasm" className='header__bakg' /></div>     <div className="header__image"><img src={Havoshar} alt="Havoshar" width="300px" /> </div>
      <div className="header__content"></div>
      <div className="header__contentt"></div>
      <div className="header__contentu"></div>
      <div className="header__contenta"></div>
      <div className="header__contente"></div>
      <div className="header__contenti"></div>
      <div className="header__contento"></div>
      <div className="header__body">
      <div className="header__title">   {data.main ? <p className="header__title">{data.main.temp.toFixed()}℃</p>: null}  </div>
      <div className="header__news">      

      <div className="header__city">{data.name}<sup>{data.sys ? <sup >{data.sys.country}</sup>: null}</sup></div>
      <div className="header__data">{hours+ data.timezone / 3600}:{minut} -  {week} </div>
      </div>
      <div className="headers">
      <div className="header__wether">
      <div className="header__icon">&#127781;</div>
      <div className="header__text">{data.weather ? <p>{data.weather[0].main}</p>: null}</div>
      </div>
      </div>
      </div>
    </div>
    <div className='main '> 
    <form onSubmit={handleSubmit} className="main__head"><p><Search/></p>
    <input 
     placeholder='Joylashuvni kiriting'
     value={location}
     onChange={(event) => setLocation(event.target.value)}
     onKeyPress={searchLonation}
     type="text"
      className="main__gps"></input>
    <input  value="." type='submit' className="main__search"></input>
    </form>
    <div className="main__main">
    <div className="main__text">Toshkent</div>
    <div className="main__text">Andijon</div>
    <div className="main__text">Namandan</div>
    <div className="main__text">Fargʻona</div>
    <div className="main__text">Jizzax</div>
    <div className="main__text">Samarqand</div>
    <div className="main__text">Buxoro</div>
    <div className="main__text">Xorazm</div>
    <div className="main__text">Surxondaryo</div>
    <div className="main__text">Sirdaryo</div>
    <div className="main__text">Navoiy</div>
     <div className="main__text">Qashqadaryo</div> 
    </div>
    <div className="main__title">Weather Details</div>
    <div className="main__footer">
    <div className="main__could">
    <div className="main__text">Bulut</div>
    <div className="main__subtext">
      {data.clouds ? <p className='col bold'>{data.clouds.all}%</p>: null}
    </div>
    </div>
    <div className='main__hmd'><div className="main__text">Namlik</div> 
        <div className="main__subtext">    {data.main ? <p className='hum bold'>{data.main.humidity}%</p>: null}</div>
</div>
   <div className='main__wind'>
    <div className="main__text">Shamol</div>  
     {data.wind ? <p className='wind bold'>{data.wind.speed.toFixed()}km/h</p>: null} 
   </div> 
<div className="main__rain">
 

    <div className="main__text">Tuyilishi</div>
        <div className="main__subtext">  {data.main ? <p className='rain bold'>{data.main.feels_like.toFixed()}℃</p>: null} </div>
</div>
</div>
    </div>
    </>
  )
}
export default Header;