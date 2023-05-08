import React, { useState } from 'react'
import { useEffect } from 'react'
import {apiKey,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
import YouTube from 'react-youtube'

function Banner() {
  const [movie,setMovie]=useState()
  const [urlId,setUrlId]=useState()
  useEffect(()=>{
    axios.get(`/trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
      let image=Math.floor(
        Math.random()*response.data.results.length
      )
      setMovie(response.data.results[image])
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then((response)=>{
        if(response.data.results.length!==0){
            setUrlId(response.data.results[0])
        }else{
            console.log('array empty');
        }
    })
  }

  return (
    <div className='banner'style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}}>
        <div className='content'>
            <h1 className='title'>movie ? movie.title : '' }</h1>
            <div className='banner_buttons'>
              <button className='button' onClick={()=>{handleMovie(movie.id) }}>Play</button>
              <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview  : ''}</h1>
        </div>

        <div className="fade_bottom"></div>
        { urlId && <YouTube opts={opts} videoId={urlId.key}/> }
    </div>
    
  )
}

export default Banner
