import './App.css'
import React, { useState, useEffect, useRef } from "react";
import GoTop from './GoTop.jsx';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { GrDocumentDownload } from 'react-icons/gr';



function App() {

  const [copied, setCopied] = useState(false);

  const handleCopy = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000); // Clear "Copied" message after 1 seconds
      })
      .catch((error) => console.error('Copy failed: ', error));
  };

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
    <div className="frame-container bg-gray-100 " >
      <GoTop />

      <div className='fixed inset-y-1/3 right-[40px] flex flex-col'>
        <button
        className="hover:scale-90 text-sm font-bold
         border-2 border-black rounded-md  focus:outline-none focus:ring focus:ring-red-500 bg-white hover:bg-sky-300 p-2 m-1"
        onClick={() => scrollToSection(goProject)} 
        >
          Projects
        </button>
        <button
        className=" hover:scale-90 text-sm font-bold
         border-2 border-black rounded-md  focus:outline-none focus:ring focus:ring-red-500 bg-white hover:bg-sky-300 p-2 m-1"
        onClick={() => scrollToSection(goExperience)} 
        >
          Experience
        </button>
      </div>

      <div className='fixed inset-y-1/3 left-[40px] flex flex-col'>
        <div className='group object-cover flex flex-row'>
          <a className='hover:scale-90' target="_blank" href='https://www.linkedin.com/in/padipat-pajanra/'>
            <BsLinkedin className=' m-2 w-9 h-9 '/>
          </a>  
          <p className=" top-0 left-0 w-full h-full flex items-center justify-center text-black text-normal font-bold  opacity-0 group-hover:opacity-100 transition-opacity">
            visit my linkedin
          </p>
        </div>
        <div className='group object-cover flex flex-row'>
          <a className='hover:scale-90' target="_blank" href='https://github.com/padipat-888'>
            <BsGithub className=' m-2 w-9 h-9'/>
          </a>
          <p className=" top-0 left-0 w-full h-full flex items-center justify-center text-black text-normal font-bold  opacity-0 group-hover:opacity-100 transition-opacity">
            visit my github
          </p>
        </div>
        <div className='group object-cover flex flex-row'>
          <a className='hover:scale-90' target="_blank" href='https://docs.google.com/document/d/1jWqvjegDoz-oJ4Ce29bZQXNlEzBNAfpEonOszUPBOCc/edit?usp=sharing'>
            <GrDocumentDownload className=' m-2 w-9 h-9'/>
          </a>
          <p className=" top-0 left-0 w-full h-full flex items-center justify-center text-black text-normal font-bold  opacity-0 group-hover:opacity-100 transition-opacity">
            download resume
          </p>
        </div>
      </div>

      {/* <div className="group relative">
        <img src="your-image.jpg" alt="Your Image" className="w-64 h-64 object-cover" />
        <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-lg bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity">
          Hover Text
        </p>
      </div> */}
      
      <div className='frame-all flex flex-row justify-center gap-20 pt-20 pb-20'>

        <div className='frame-left flex flex-col w-1/6 gap-10'>

          <div className='frame-bio '>
            <div className=' frame-name  shadow-md bg-gray-300 rounded-md p-2'>
              <h1 className="text-4xl font-bold p-2">
                Padipat Pajanra
              </h1>
            </div> {/* end frame-name // frame-bio */}
            <div className=' frame-role  shadow-md bg-gray-200 rounded-md p-2 '>
              <h2 className="text-2xl font-bold p-2">
                Full-Stack Developer
              </h2>
            </div> {/* end frame-role // frame-bio */}
            <div className='frame-contact  shadow-md flex flex-col items-start rounded-md p-4 bg-gray-200 '>
              <div className='flex flex-row gap-5'>
                <button className='hover:font-extrabold' onClick={() => handleCopy('padipat.p10@gmail.com')}>padipat.p10@gmail.com</button>
                {copied && <div className='text-normal font-bold'>Copied</div>}
              </div>
              <a className='hover:font-extrabold' target="_blank" href='https://www.linkedin.com/in/padipat-pajanra/'>linkedin.com/in/padipat-pajanra/</a>
              <a className='hover:font-extrabold' target="_blank" href='https://github.com/padipat-888'>github.com/padipat-888</a>
              <a className='hover:font-extrabold' target="_blank" href='https://docs.google.com/document/d/1jWqvjegDoz-oJ4Ce29bZQXNlEzBNAfpEonOszUPBOCc/edit?usp=sharing' >download resume</a>
            </div>  {/* end frame-contact // frame-bio */}
          </div>  {/* end frame-bio // frame-left */}



          <div className='frame-about  shadow-md p-2 bg-gray-200 rounded-md'>
            <h2 className="text-2xl font-bold pt-2 pl-2">
                About me
            </h2>
            <p className='p-2'>
              I am graduated from JSD Generation Thailand program. Previously, I have gained 2 years of experience in customer support and sales coordinator roles. I am adaptable and work well as part of a team. I have experience in communicating and coordinating with customers.
            </p>
          </div> {/* end frame-about // frame-right */}

          <div className='frame-tech-skill  shadow-md bg-gray-200 rounded-md p-2'>
            <h2 className="text-2xl font-bold p-2">
                Tech skills
            </h2>
            <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>HTML</button>
            <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>CSS</button>
            <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>Javasript</button>
            <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>React</button>
            <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>MongoDB</button>

          </div> {/* end frame-tech-skill // frame-left */}

          <div className='frame-tech-skill  shadow-md bg-gray-200 rounded-md p-2'>
            <h2 className="text-2xl font-bold p-2">
                Soft skills
            </h2>
            <p className='p-2 text-normal font-medium'>Mindsets</p> 
            <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>Personal Responsibility</button>
            <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>Growth Mindset</button>
            <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>Future Orientation</button>
            <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>Persistence</button>
            <p className='p-2 text-normal font-medium'>Behavioral skills</p>
            <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>Time Management</button>
            <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>Teamwork</button>
            <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>Orientation to Detail</button>
            <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>Proactiveness</button>

          </div> {/* end frame-tech-skill // frame-left */}
          
          {/* <div className='frame-more bg-gray-300  p-2'>
            <div>
              Download my CV
            </div>
            <div>
              View full project achive
            </div>
            <div>
            View full experience achive
            </div>
          </div>  */}
          {/* end frame-more // frame-left */}

        </div> {/* end frame-left */}

        <div className='frame-right flex flex-col w-2/6 gap-10'>



          <div ref={goProject} className='frame-project flex flex-col rounded-md gap-5 bg-gray-300'>
            <button  onClick={() => scrollToSection(goProject)} 
            className="border-2 border-black text-xl font-bold hover:font-normal rounded-md  focus:outline-none focus:ring focus:ring-red-500 bg-white hover:bg-sky-300 p-2 m-1 ">
            Project
            </button> 

            <div className='frame-project-list flex flex-col bg-gray-200 rounded-md p-2'>
              <div className='project-name text-2xl font-bold p-2'>
                Hulk-Fit Project
              </div>
              <div className='project-work p-2'>
              เว็บไซต์บันทึกข้อมูลประวัติการออกกำลังกายและสามารถดูประวัติย้อนหลังได้
              </div>
              <div className='flex flex-row justify-between'>
                <div className='project-skill p-2'>
                  <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>HTML</button>
                  <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>CSS</button>
                  <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>Javascript</button>
                  <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>React</button>
                  <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>MongoDB</button>
                </div>
                <div className='flex flex-row justify-end '> 
                    <div className='group object-cover flex flex-row'>
                      <p className=" flex items-center justify-center text-black text-normal font-bold  opacity-0 group-hover:opacity-100 transition-opacity">
                        visit my github
                      </p>
                      <a className='hover:scale-90' target="_blank" href='https://github.com/padipat-888'>
                        <BsGithub className=' mt-2 mr-2 w-9 h-9'/>
                      </a>
                    </div>
                    <button className='h-10 rounded-lg shadow-md hover:scale-90 bg-sky-300 border-black border-2 p-2 m-1 text-sm font-bold '>Demo</button>
                </div>
              </div>
            </div> 

            <div className='frame-project-list flex flex-col bg-gray-200 rounded-md p-3'>
              <div className='project-name text-2xl font-bold p-2'>
                React Assessment
              </div>
              <div className='project-work p-2'>
              เว็บไซต์สำหรับจัดการข้อมูล โดยใช้ crud เบื้องต้น create, read, update, delete
              </div>
              <div className='flex flex-row justify-between'>
                <div className='project-skill p-2'>
                  <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>HTML</button>
                  <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>CSS</button>
                  <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>Javascript</button>
                  <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>React</button>
                </div>
                <div className='flex flex-row justify-end '> 
                    <div className='group object-cover flex flex-row'>
                      <p className=" flex items-center justify-center text-black text-normal font-bold  opacity-0 group-hover:opacity-100 transition-opacity">
                        visit my github
                      </p>
                      <a className='hover:scale-90' target="_blank" href='https://github.com/padipat-888/career-changer-react-assessment'>
                        <BsGithub className=' mt-2 mr-2 w-9 h-9'/>
                      </a>
                    </div>
                    <a href='https://career-changer-react-assessment-lilac.vercel.app/' target='_blank'>
                      <button className='h-10 rounded-lg shadow-md hover:scale-90 bg-sky-300 border-black border-2 p-2 m-1 text-sm font-bold '>Demo</button>
                    </a>
                </div>
              </div>
            </div> 

            <div className='frame-project-list flex flex-col bg-gray-200 rounded-md p-3'>
              <div className='project-name text-2xl font-bold'>
                Find My Hat
              </div>
              <div className='project-work p-2'>
                เกมค้นหาหมวกในแผนที่แบบสุ่ม โดยห้ามตกหลุมกับดักและห้ามตกขอบแผนที่
              </div>
              <div className='flex flex-row justify-between'>
                <div className='project-skill p-2'>
                  <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>Javascript</button>
                </div>
                <div className='flex flex-row justify-end '> 
                    {/* <div className='group object-cover flex flex-row'>
                      <p className=" flex items-center justify-center text-black text-normal font-bold  opacity-0 group-hover:opacity-100 transition-opacity">
                        visit my github
                      </p>
                      <a className='hover:scale-90' target="_blank" href='https://github.com/padipat-888'>
                        <BsGithub className=' mt-2 mr-2 w-9 h-9'/>
                      </a>
                    </div> */}
                    <a href='https://replit.com/@zzzzzz44/25-find-your-hat' target='_blank'>
                    <button className='h-10 rounded-lg shadow-md hover:scale-90 bg-sky-300 border-black border-2 p-2 m-1 text-sm font-bold '>Demo</button>
                    </a>
                </div>
              </div>
            </div> 

            <div className='frame-project-list flex flex-col bg-gray-200 rounded-md p-3'>
              <div className='project-name text-2xl font-bold'>
              Colmar Academy
              </div>
              <div className='project-work p-2'>
                เว็บไซต์แสดงคอส์สเรียนออนไลน์ เป็นการจำลองการออกแบบหน้าเว็บไซต์
              </div>
              <div className='flex flex-row justify-between'>
                <div className='project-skill p-2'>
                  <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>HTML</button>
                  <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>CSS</button>
                </div>
                <div className='flex flex-row justify-end '> 
                    <div className='group object-cover flex flex-row'>
                      <p className=" flex items-center justify-center text-black text-normal font-bold  opacity-0 group-hover:opacity-100 transition-opacity">
                        visit my github
                      </p>
                      <a className='hover:scale-90' target="_blank" href='https://github.com/padipat-888/colmar'>
                        <BsGithub className=' mt-2 mr-2 w-9 h-9'/>
                      </a>
                    </div>
                    <a href='https://colmar-psi.vercel.app/' target='_blank'> 
                      <button className='h-10 rounded-lg shadow-md hover:scale-90 bg-sky-300 border-black border-2 p-2 m-1 text-sm font-bold '>Demo</button>
                    </a>
                </div>
              </div>
            </div> 
            {/* https://colmar-psi.vercel.app/ */}
          </div> {/* end frame-project // frame-right */}


          <div ref={goExperience} className='frame-experience flex flex-col rounded-md gap-5 bg-gray-300'>
            <button  onClick={() => scrollToSection(goExperience)} 
            className="border-2 border-black text-xl font-bold hover:font-normal  rounded-md  focus:outline-none focus:ring focus:ring-red-500 bg-white hover:bg-sky-300 p-2 m-1 ">
            Experience
            </button> 

            <div className='frame-experience-list flex flex-col bg-gray-200 rounded-md p-3'>
              <div className='company-name text-2xl font-bold p-2'>
                Generation Thailand
              </div>
              <div className='company-date pl-2'>
                July - October 2023
              </div>
              <div className='company-work p-2'>
                full-stack developer
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda animi voluptates libero? Explicabo unde excepturi obcaecati eos tempore voluptatem inventore ipsa a officiis quisquam! Unde aliquid accusantium maiores corporis repellendus.
              </div>
              <div className='company-skill p-2'>
                <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold'>HTML</button>
                <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>CSS</button>
                <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>Javascript</button>
                <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>React</button>
                <button className='rounded-full shadow-md bg-white p-2 m-1 text-sm font-bold '>MongoDB</button>
              </div>
            </div> {/* end frame-experience-list // frame-experience */}

          </div> {/* end frame-experience // frame-right */}




        </div> {/* end frame-right */}






      </div> {/* end frame-all */}
      
    </div>
  )
}

export default App