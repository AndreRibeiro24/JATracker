import React from 'react'
import {useState} from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

export default function AvatarAndre({
    name="Andre Ribeiro",
    role="FullStack Developer",
    skills="React, JavaScript, HTML, CSS",
    github="https://github.com/AndreRibeiro24",
    linkedin="to get url",
    bio="Fellow Student at Ironhack",
    avatarUrl="https://avatars.githubusercontent.com/u/242829480?v=4",
})
{
    const [imgError, setImgError] = useState(false) //trying to build if imgUrl doesnt load, display user name initials
    const initials = name //still to build
    /*code of initials will go here*/

    const showAvatar = avatarUrl && !imgError //if avatarUrl is true and !imgError is true = shows avatar
  return (//starting customization of Component
    <div className="flex flex-col sm:flex-row gap-6 items-start bg-[#001031] rounded-xl p-6 w-full max-w-3xl border-5 border-[#7727e8]">
      {/*Avatar div*/}<div>
      {showAvatar ? (
        <img src={avatarUrl} alt={`${name}'s avatar`} className="w-80 h-full object-cover rounded-xl" onError={()=> setImgError(true)}/>
      ) : (<span className="text-2x1 font-bold">{initials}</span>)}
      </div>

     {/*onto the card info*/}
     <div className="flex-1 min-w-0">
      <h1 className="text-[#f0f6ff] font-bold text-large">{name}</h1>
      <p className='text-[#f0f6ff] font-light'>{role}</p>
      </div> 
    </div>
  )
}
