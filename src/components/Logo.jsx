import imgUrl1 from '/creative-todo.svg'
import imgUrl2 from '/creative-todo-tick.svg'
import { useState } from 'react';


export default function Logo({
    opposite, // if true image will change src in opposite direction
    parentAnimation  //run other func in parent node, whne mouse enter or leave
}){
    const imgUrl = (opposite) ? imgUrl2 : imgUrl1;
    const [logo, setlogo] = useState(imgUrl)
    return(
        <>
        
        {/* LOGO HERE */}
         <img className='transition-all w-full size-full' 
          src={logo} 
          onMouseEnter={() => {
                setlogo(old => (opposite) ? imgUrl1 : imgUrl2) ;
                parentAnimation.onMouseEnterLogo();
            }} 
          onMouseLeave={()=> {
            setlogo(old=> (opposite) ? imgUrl2 : imgUrl1);
            parentAnimation.onMouseLeaveLogo();
          }}
         />
        </>
        
    )
}

