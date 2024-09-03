import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import React from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import java from '../assets/java.png';


const Skills = () => {
  return (
    <section id='skills' className='w-full min-h-screen sm:w-full sm:h-screen bg-[#0a192f] text-gray-300'>

        {/* flex container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full lg:ml-40 lg:mr-5'>

            <div className='text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                    Skills
                </p>
                <p className='text-2xl py-4 font-semibold'>
                    Technologies worked with
                </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 ml-4 text-center py-8 lg:gap-4 lg:ml-15 '>

                <div className='shadow-md shadow-pink-400 hover:scale-110 duration-500 m-0 py-3 max-w-[240px]'>
                    <img className='w-10 mx-auto mb-3' src={HTML} alt="Html icon" />
                    <p>HTML</p>
                </div>
                <div className='shadow-md shadow-pink-400 hover:scale-110 duration-500 m-0 py-3 max-w-[240px]'>
                    <img className='w-10 mx-auto mb-3' src={CSS} alt="CSS icon" />
                    <p>CSS</p>
                </div>
                <div className='shadow-md shadow-pink-400 hover:scale-110 duration-500 m-0 py-3 max-w-[240px]'>
                    <img className='w-10 mx-auto mb-3' src={JavaScript} alt="Javascript icon" />
                    <p>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-pink-400 hover:scale-110 duration-500 m-0 py-3 max-w-[240px]'>
                    <img className='w-10 mx-auto mb-3' src={React} alt="react icon" />
                    <p>REACT</p>
                </div>
                <div className='shadow-md shadow-pink-400 hover:scale-110 duration-500 m-0 py-3 max-w-[240px]'>
                    <img className='w-10 mx-auto mb-3' src={tailwind} alt="tailwind icon" />
                    <p>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-pink-400 hover:scale-110 duration-500 m-0 py-3 max-w-[240px]'>
                    <img className='w-10 mx-auto mb-3' src={java} alt="tailwind icon" />
                    <p>JAVA</p>
                </div>

            </div>

        </div>

    </section>
  )
}

export default Skills