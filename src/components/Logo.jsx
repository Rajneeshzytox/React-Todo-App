import imgUrl1 from '/creative-todo.svg'
import imgUrl2 from '/creative-todo-tick.svg'
import { useState } from 'react';


export default function Logo({opposite}){
    const imgUrl = (opposite) ? imgUrl2 : imgUrl1;
    const [logo, setlogo] = useState(imgUrl)
    return(
        <>
        
        {/* LOGO HERE */}
         <img className='transition-all' 
          src={logo} 
          onMouseEnter={() => setlogo(old => (opposite) ? imgUrl1 : imgUrl2)} 
          onMouseLeave={()=> setlogo(old=> (opposite) ? imgUrl2 : imgUrl1)} 
         />
        </>
        
    )
}

