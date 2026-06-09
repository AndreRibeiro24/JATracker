import {useState, useEffect} from 'react'
import heroImage1 from '../assets/heroImage1.png'
import heroImage2 from '../assets/heroImage2.png'
import heroImage3 from '../assets/heroImage3.png'


export default function HeroSlider({
    images = [heroImage1, heroImage2 , heroImage3],
    name="JATracker - Gaming Library Tracker",
    }) 
    {
    const [current, setCurrent] = useState(0);

    //creating slider on with useEffect. Maybe advance 4secs? further discussion w/ group 
    useEffect(() => {
      if(images.length <= 1) return; //for safety
      const timer = setInterval(()=>{
        setCurrent((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(timer); 
    }, [images.length]);
    
  return (
    <div className="relative w-full h-[480px] overflow-hidden">
        {images.map((img,index)=>(
            <div key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
                backgroundImage :`url(${img})`,
                opacity: index === current ? 1 : 0
            }}
            /> 
            
        ))}
        {/*mapping done moving on to an overlay. maybe some type of dark. to dicuss with theo and julian */}
        <div className="absolute inset-0 bg-black/50"/>

        {/*time to display the slogan and logo on top*/}
        <div className= "relative z-10 flex flex-col items-center justify-center h-full gap-3 px-6 text-center">
            <h1 className = "text-white/85 text-sm font-semibold tracking-[0.3em] uppercase">{name}</h1>
            <h1 className = "text-white text-6xl font-black uppercase leading-tight tracking-tight drop-shadow-lg">Track<br/>
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 → slightly warmer purple into dark indigo"> Play </span><br/>
            Conquer

            </h1>
        </div>
    </div>
  )
}
