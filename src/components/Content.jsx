import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../csscomponents/Content.css'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import winter from '../images/winter.jpeg'
import sunny from '../images/sunny.jpg'
import forest from '../images/forest.jpg'
import X01d from '../svgs/01d.svg'
import X01n from '../svgs/01n.svg'
import X02d from '../svgs/02d.svg'
import X02n from '../svgs/02n.svg'
import X03a from '../svgs/03.svg'
import X04a from '../svgs/04.svg'
import X09a from '../svgs/09.svg'
import X10d from '../svgs/10d.svg'
import X10n from '../svgs/10n.svg'
import X11a from '../svgs/11.svg'
import X13a from '../svgs/13.svg'
import X50a from '../svgs/50.svg'

const {REACT_APP_WEATHER_API} =process.env

function Content({fcity}){
    const openweatherurl = 'https://api.openweathermap.org/data/2.5/weather?q='+fcity+'&appid='+REACT_APP_WEATHER_API+'&units=metric'
    const [data, setdata] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, seterror] = useState(false)
    useEffect(()=>{
        axios.get(openweatherurl).then((response)=>{
            setdata(response);
            setLoading(false);
            seterror(false);
        }).catch((err)=>{
            console.log(err);
            seterror(true)
        })
    },[openweatherurl])
    function imgset(icon){
        if(icon === '01d'){
            return X01d
        }
        else if(icon === '02d'){
            return X02d
        }
        else if(icon === '03d'){
            return X03a
        }
        else if(icon === '04d'){
            return X04a
        }
        else if(icon === '09d'){
            return X09a
        }
        else if(icon === '10d'){
            return X10d
        }
        else if(icon === '11d'){
            return X11a
        }
        else if(icon === '13d'){
            return X13a
        }
        else if(icon === '50d'){
            return X50a
        }
        else if(icon === '01n'){
            return X01n
        }
        else if(icon === '02n'){
            return X02n
        }
        else if(icon === '03n'){
            return X03a
        }
        else if(icon === '04n'){
            return X04a
        }
        else if(icon === '09n'){
            return X09a
        }
        else if(icon === '10n'){
            return X10n
        }
        else if(icon === '11n'){
            return X11a
        }
        else if(icon === '13n'){
            return X13a
        }
        else if(icon === '50n'){
            return X50a
        }
    }
  if(isLoading){
    return (
    <div className='Contentdiv'>
        <div className='gridcontent' style={{display:"flex", alignItems:"flex-end", justifyContent:"center"}}>
        <Box sx={{ width: '90%' }}>
            <LinearProgress color="inherit" style={{marginBottom:"25px"}} />
        </Box>
        </div>
    </div>
    )
  }
  if(error){
    return (
        <div className='Contentdiv'>
            <h1 style={{marginTop:"50px", fontSize:"50px"}}>🚫Uh oh!🚫</h1>
            <h2 style={{marginTop:"10px", fontSize:"25px"}}>Data Not Found!</h2>
            <p style={{marginTop:"10px", fontSize:"20px"}}>Note:Please make sure that the city name is spelled correct!</p>
        </div>
    )
  }
  if(Math.round(data.data.main.temp)<=19){
    document.body.style.backgroundImage = `url(${winter})`;
  }else if(Math.round(data.data.main.temp)<=28){
    document.body.style.backgroundImage = `url(${forest})`;
  }else{
    document.body.style.backgroundImage = `url(${sunny})`;
  }
  return (
    <div className='Contentdiv'>
        <div className='gridcontent'>                                                           
        <div className='item1'>
                    <img className='weatherimg' src={imgset(data.data.weather[0].icon)} alt='temp'/>
            </div>
            <div className='item2'>{Math.round(data.data.main.temp)}°c</div>
            <div className='item3'>{data.data.name}, {data.data.sys.country}</div>
            <div className='item4'>Humidity: {data.data.main.humidity}</div>
            <div className='item5'>24hr Range: {Math.round(data.data.main.temp_min)}-{Math.round(data.data.main.temp_max)}°C</div>   
        </div>
    </div>
  )
}

export default Content