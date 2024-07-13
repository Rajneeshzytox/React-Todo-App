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
                title: 'Welcome to Creative Todo App',
                disc: 'Welcome to Creative Todo App, a simple and efficient way to manage your tasks. Stay organized with features that help you add, view, and manage your todos effortlessly. Dive in and start getting things done!',
                src: '/gif/welcomeTodo.png',
                bg: '#e6e6e6'
            },
            {
                // index 1
                title: 'App Functionality',
                disc: 'Explore the powerful functionality of Creative Todo App. Easily add new tasks, view your todo list, mark tasks as complete, restore deleted tasks, and permanently delete tasks you no longer need. Each feature is designed to make task management seamless and intuitive.',
                src: '/gif/featuresTodoApp.png',
                bg: '#DEDEDD',
            },
            {
                // index 2
                title: 'Customize Your Experience With Themes',
                disc: ' Personalize App with theme feature. Switch between different themes to match your style and mood. Enjoy a tailored user experience with dynamic SVG colors that change with the theme.',
                src: '/gif/themesTodo.gif',
                bg: '#F4F7F3',
            },
            {
                // index 3
                title: 'Track Your Progress',
                disc: 'Stay on top of your productivity with analytics feature. Get insights into your task management',
                src: '/gif/progressTodo.png',
                bg: '#e5e6e6',
            },

        ])


        // stepClick function sets the index value to setWelcomeMsg state and also add class step-primary to add primary color to steps
        function stepClick( index){
            setWelcomeMsgIndex(index);
        }

    return(
        // background overlay
        <div id="UserWelcome" className="fixed z-50 min-h-screen w-[100vw] flex flex-col items-center justify-center text-slate-900 px-10 text-center overflow-y-scroll" style={{background: `${welcomeMsg[welcomeMsgIndex].bg}`}}>
        
        {/* hide welcome or skip  */}
        <div className="absolute top-12 right-12 select-none cursor-pointer btn btn-ghost btn-circle rotate-45 text-3xl block z-[2]" 
          onClick={() => document.getElementById('UserWelcome').style.display = "none"}
        >
            {'+'}
        </div>

        {/* white msg welcom box */}
        
             {/* Welcome Box Gif  */}
            <img className="max-h-[40vh] mx-auto" src={welcomeMsg[welcomeMsgIndex].src}></img>
            <div className="divider"></div>
             {/* Welcome Text Content  */}
            <h4 className="text-xl text-balance font-semibold my-2">
                {welcomeMsg[welcomeMsgIndex].title}
            </h4>
            <p className="max-w-[500px]">
                {welcomeMsg[welcomeMsgIndex].disc}
            </p>


        {/* welcome steps */}
        <ul className="steps mt-6 steps-horizontal ">
            {
                welcomeSteps.map((step, index) => (
                   

                    <li
                        key={index}
                        className="step "
                        data-tip={step}
                        onClick={() => (
                            stepClick(index)
                        )}
                    >
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