import React,{ useState, useEffect } from 'react'

function UseEffectComponent() {
    const [screenWidth, setscreenWidth] = useState(window.screen.width);
    const currentScreenWidth = () => {
        setscreenWidth(window.innerWidth);
    }
    useEffect(() => {
       window.addEventListener('resize', currentScreenWidth);
       return () => {
        window.removeEventListener('resize', currentScreenWidth);
       }
    },[screenWidth])
    
  return (
    <div className="text-center display-4" style={{marginTop:'16%'}}>The screen width <span className="text-primary">{screenWidth}</span></div>
  )
}

export default UseEffectComponent