import CreativeTodo from '../svgs/creative-todo';
import CreativeTodoTick from '../svgs/CreativeTodoTick';



export default function Logo({opposite, 
}){
    // if opposite true image will change src in opposite 
    const logo = (opposite) ?
                    <CreativeTodoTick /> : 
                    <CreativeTodo />;
    return(
            <div 
                className=" h-full w-full overflow-hidden"
            >
               {logo}
            </div>
        
    )
}

