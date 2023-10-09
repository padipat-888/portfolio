import './App.css'
import React, { useState, useEffect, useRef } from "react";
import GoTop from './GoTop.jsx';



function App() {
  const [count, setCount] = useState(0);


  const goProject = useRef(null);
  const goExperience = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      scrollBehavior: "smooth",
    });
  }

  const changeColor = (name) => {
    if(name === "html") {
      เปลี่ยนสี
    }
  };

  return (
    <>
      <GoTop />

        <button
        className="
        fixed top-[80px] right-[40px] border-2 border-black rounded-md hover:bg-sky-300 focus:outline-none focus:ring focus:ring-red-500 bg-white p-1 m-1"
        onClick={() => scrollToSection(goExperience)} 
        >
          Experience
        </button>
        <button
        className="
        fixed top-[120px] right-[40px] border-2 border-black rounded-md hover:bg-sky-300 focus:outline-none focus:ring focus:ring-red-500 bg-white p-1 m-1"
        onClick={() => scrollToSection(goProject)} 
        >
          Project
        </button>
 

     


      <div className='frame-all flex flex-row justify-center gap-20 mt-20 mb-20'>

        <div className='frame-left flex flex-col w-1/6 gap-10'>

          <div className='frame-bio'>
            <div className=' frame-name bg-red-500'>
              <h1 className="text-4xl font-bold ">
                Padipat Pajanra
              </h1>
            </div> {/* end frame-name // frame-bio */}
            <div className=' frame-role bg-green-500'>
              <h2 className="text-2xl font-bold ">
                Full-Stack Developer
              </h2>
            </div> {/* end frame-role // frame-bio */}
            <div className='frame-contact flex flex-col items-start bg-blue-500'>
              <p>tel : 085-120-7266</p>
              <p>email : padipat.p10@gmail.com</p>
              <a target="_blank" href='https://www.linkedin.com/in/padipat-pajanra/'>linkedin : linkedin.com/in/padipat-pajanra/</a>
              <a target="_blank" href='https://github.com/padipat-888'>github : github.com/padipat-888</a>
              
            </div>  {/* end frame-contact // frame-bio */}
          </div>  {/* end frame-bio // frame-left */}

          {/* <div className='frame-slogan'>
            <h2 className='text-2xl bg-blue-500'>
              My goal is to build your goal
            </h2>
          </div> end frame-slogan // frame-left */}

          <div className='frame-about'>
            <p>
              I am graduated from JSD Generation Thailand program. Previously, I have gained 2 years of experience in customer support and sales coordinator roles. I am adaptable and work well as part of a team. I have experience in communicating and coordinating with customers.
            </p>
          </div> {/* end frame-about // frame-right */}

          <div className='frame-skill bg-yellow-500'>
            <p>skills</p>
            <button className='rounded-md bg-white p-1 m-1'>HTML</button>
            <button className='rounded-md bg-white p-1 m-1'>CSS</button>
            <button className='rounded-md bg-white p-1 m-1'>Javasript</button>
            <button className='rounded-md bg-white p-1 m-1'>React</button>
            <button className='rounded-md bg-white p-1 m-1'>MongoDB</button>

          </div> {/* end frame-skill // frame-left */}
          
          <div className='frame-more bg-pink-500'>
            <div>
              Download my CV
            </div>
            <div>
              View full project achive
            </div>
            <div>
            View full experience achive
            </div>
          </div> {/* end frame-more // frame-left */}

        </div> {/* end frame-left */}

        <div className='frame-right flex flex-col w-2/6 gap-10'>

          <div ref={goExperience} className='frame-experience flex flex-col gap-5 bg-gray-300'>
            <button  onClick={() => scrollToSection(goExperience)} 
            className="border-2 border-black rounded-md hover:bg-sky-300 focus:outline-none focus:ring focus:ring-red-500 bg-white p-1 m-1">
            Experience
            </button> 
            <div className='frame-experience-list flex flex-col bg-gray-200 p-3'>
              <div className='company-name text-xl font-medium'>
                Generation Thailand
              </div>
              <div className='company-date'>
                july 2023 - present
              </div>
              <div className='company-work'>
                full-stack developer
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda animi voluptates libero? Explicabo unde excepturi obcaecati eos tempore voluptatem inventore ipsa a officiis quisquam! Unde aliquid accusantium maiores corporis repellendus.
              </div>
              <div className='company-skill'>
                <button className='rounded-md bg-white p-1 m-1'>HTML</button>
                <button className='rounded-md bg-white p-1 m-1'>CSS</button>
                <button className='rounded-md bg-white p-1 m-1'>React</button>
              </div>
            </div> {/* end frame-experience-list // frame-experience */}
            
            {/* <div className='frame-experience-list flex flex-col'>
              <div className='company-name text-xl font-medium'>
                Microsoft Thailand
              </div>
              <div className='company-date'>
                july 2023 - present
              </div>
              <div className='company-work'>
                full-stack developer
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minima itaque quae? Repudiandae dolorum necessitatibus magnam aut possimus perferendis exercitationem ducimus repellendus sapiente eaque nulla, velit a ratione pariatur? Placeat.
              </div>
              <div className='company-skill'>
                <button className='rounded-md bg-white p-1 m-1'>HTML</button>
                <button className='rounded-md bg-white p-1 m-1'>CSS</button>
                <button className='rounded-md bg-white p-1 m-1'>React</button>
              </div>
            </div>  */}
            {/* end frame-experience-list // frame-experience */}
            {/* <div className='frame-experience-list flex flex-col'>
              <div className='company-name text-xl font-medium'>
                Google Thailand
              </div>
              <div className='company-date'>
                july 2023 - present
              </div>
              <div className='company-work'>
                full-stack developer
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga perspiciatis delectus officia, placeat qui neque odio obcaecati quis doloremque deleniti explicabo unde. Tempora quod tempore nulla. Consequatur deserunt error magnam.
              </div>
              <div className='company-skill'>
                <button className='rounded-md bg-white p-1 m-1'>HTML</button>
                <button className='rounded-md bg-white p-1 m-1'>CSS</button>
                <button className='rounded-md bg-white p-1 m-1'>React</button>
              </div>
            </div> */}
             {/* end frame-experience-list // frame-experience */}
          </div> {/* end frame-experience // frame-right */}

          <div ref={goProject} className='frame-project flex flex-col gap-5 bg-gray-300'>
            <button  onClick={() => scrollToSection(goProject)} 
            className="border-2 border-black rounded-md hover:bg-sky-300 focus:outline-none focus:ring focus:ring-red-500 bg-white p-1 m-1">
            Project
            </button> 
            <div className='frame-project-list flex flex-col bg-gray-200 p-3'>
              <div className='project-name text-xl font-medium'>
                Hulk-Fit Project
              </div>
              <div className='project-work'>
                full-stack developer
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda animi voluptates libero? Explicabo unde excepturi obcaecati eos tempore voluptatem inventore ipsa a officiis quisquam! Unde aliquid accusantium maiores corporis repellendus.
              </div>
              <div className='project-skill'>
                <button className='rounded-md bg-white p-1 m-1'>HTML</button>
                <button className='rounded-md bg-white p-1 m-1'>CSS</button>
                <button className='rounded-md bg-white p-1 m-1'>React</button>
                <button className='rounded-md bg-white p-1 m-1'>MongoDB</button>
              </div>
            </div> {/* end frame-project-list // frame-project */}
            <div className='frame-project-list flex flex-col bg-gray-200 p-3'>
              <div className='project-name text-xl font-medium'>
              React CRUD
              </div>
              <div className='project-work'>
                full-stack developer
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga perspiciatis delectus officia, placeat qui neque odio obcaecati quis doloremque deleniti explicabo unde. Tempora quod tempore nulla. Consequatur deserunt error magnam.
              </div>
              <div className='project-skill'>
                <button className='rounded-md bg-white p-1 m-1'>HTML</button>
                <button className='rounded-md bg-white p-1 m-1'>CSS</button>
                <button className='rounded-md bg-white p-1 m-1'>React</button>
              </div>
            </div> {/* end frame-project-list // frame-project */}
            <div className='frame-project-list flex flex-col bg-gray-200 p-3'>
              <div className='project-name text-xl font-medium'>
                Find My Hat
              </div>
              <div className='project-work'>
                full-stack developer
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minima itaque quae? Repudiandae dolorum necessitatibus magnam aut possimus perferendis exercitationem ducimus repellendus sapiente eaque nulla, velit a ratione pariatur? Placeat.
              </div>
              <div className='project-skill'>
                <button className='rounded-md bg-white p-1 m-1'>Javascript</button>
              </div>
            </div> {/* end frame-project-list // frame-project */}
            <div className='frame-project-list flex flex-col bg-gray-200 p-3'>
              <div className='project-name text-xl font-medium'>
              Colmar Academy
              </div>
              <div className='project-work'>
                full-stack developer
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga perspiciatis delectus officia, placeat qui neque odio obcaecati quis doloremque deleniti explicabo unde. Tempora quod tempore nulla. Consequatur deserunt error magnam.
              </div>
              <div className='project-skill'>
                <button className='rounded-md bg-white p-1 m-1'>HTML</button>
                <button className='rounded-md bg-white p-1 m-1'>CSS</button>
                <button className='rounded-md bg-white p-1 m-1'>React</button>
              </div>
            </div> {/* end frame-project-list // frame-project */}
          </div> {/* end frame-project // frame-right */}

        </div> {/* end frame-right */}

      </div> {/* end frame-all */}
      
      

    </>
  )
}

export default App
