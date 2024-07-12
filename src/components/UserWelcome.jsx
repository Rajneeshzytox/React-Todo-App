import { useState } from "react"

function UserWelcomeBox(){

    // bottom steps list
    const welcomeSteps = ['Welcome', 'Functionality', 'Themes', 'Analytics',];
    // welcome msg array ith Index to display
        const [welcomeMsgIndex, setWelcomeMsgIndex] = useState(0);
        // welcome msg details array of object
        const [welcomeMsg, setWelcomeMsg] = useState([
            {
                // index 0
                title: 'wlcome title 1 msg',
                disc: 'text disc',
                src: '/me.jpg',
            },
            {
                // index 1
                title: 'wlcome title 2 msg',
                disc: 'text disc',
                src: '/me.jpg',
            },
            {
                // index 2
                title: 'wlcome title 3 msg',
                disc: 'text disc',
                src: '/me.jpg',
            },
            {
                // index 3
                title: 'wlcome title 4 msg',
                disc: 'text disc',
                src: '/me.jpg',
            },

        ])


        // stepClick function sets the index value to setWelcomeMsg state and also add class step-primary to add primary color to steps
        function stepClick( index){
            setWelcomeMsg(index);
        }

    return(
        // background overlay
        <div id="UserWelcome" className="bg-base-300 bg-opacity-50 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center backdrop-blur-sm  ">
        
        {/* hide welcome or skip  */}
        <div className="absolute top-12 right-12 select-none cursor-pointer btn btn-ghost btn-circle rotate-45 text-3xl block z-[2]" 
          onClick={() => document.getElementById('UserWelcome').style.display = "none"}
        >
            {'+'}
        </div>

        {/* white msg welcom box */}
        <div className="max-w-[80%] md:w-[600px] sm:w-[500px] w-[70%] min-w-1/2  bg-slate-200  min-h-[30vh] text-slate-800 px-8 py-4 rounded-xl shadow-2xl z-[1] max-h-[60vh]  overflow-y-scroll">
             {/* Welcome Text Content  */}
            <h4 className="text-xl text-balance font-semibold my-2">
                {welcomeMsg[welcomeMsgIndex].title}
            </h4>
            <p>
                {welcomeMsg[welcomeMsgIndex].disc}
            </p>
            <div className="divider divider-neutral"></div>
             {/* Welcome Box Gif  */}
            <img src={welcomeMsg[welcomeMsgIndex].src}></img>

        </div>

        {/* welcome steps */}
        <ul className="steps mt-6 steps-horizontal ">
            {
                welcomeSteps.map((step, index) => (
                    <li
                    
                        key={index}
                        onClick={(e) => (
                            stepClick(index)
                        )}
                        className="step"
                        
                    >
                        {step}
                    </li>
                ))
            }
               
        </ul>
        </div>
    )
}

export default function UserWelcome(){
    function modelRun(){

    }
    return(
        <UserWelcomeBox />
    )
}