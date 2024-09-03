import { data } from '../data/data.js';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

const Projects = () => {
    const project = data;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFirst, setIsFirst] = useState(true);
    const [isLast, setIsLast] = useState(false);

    const goPrevious = () => {

        if (currentIndex === 0 || currentIndex - 1 === 0) {
            setIsFirst(true);
            setIsLast(false);
            return;
        }
        else {
            setIsFirst(false);
            setCurrentIndex(prev => prev - 1);
        }
    }
    const goNext = () => {
        if (currentIndex === project.length - 1 || currentIndex + 1 === project.length - 1) {
            setIsLast(true);
            setIsFirst(false);
            return;
        }
        else {
            setCurrentIndex(prev => prev + 1);
            setIsFirst(false);
        }
    }

    return (
        <section id="projects" className='bg-[#0a192f] sm:h-auto w-full md:h-screen text-gray-300'>

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col flex-grow justify-center w-full h-full lg:ml-40'>

                <div className='pb-8 text-center mt-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-700'>
                        Work
                    </p>
                    <p className='text-2xl font-semibold py-6'>
                        Feel Free to check my work
                    </p>
                </div>
                {/* for  mobile screens */}
                <div className='w-full h-auto my-[30px] flex flex-col gap-7 justify-center items-center md:hidden'>
                    {project.map(item => 
                        (<div key={item.id}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className='shadow-lg shadow-[#040c16]  group container m-auto w-[300px] h-[300px] rounded-md flex justify-center items-center content-div
                            '
                        >
                            <div className='opacity-0 group-hover:opacity-100 duration-500 ease-linear '>
                                <span className='text-2xl font-bold text-white tracking-wider mx-auto'>
                                    {item.name}
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href={item.github} target="_github link">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                            Github
                                        </button>
                                    </a>
                                    <a href={item.demo} target='_demo link'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                            Demo
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>)
                    )}

                </div>
                {/* for large screens */}
                <div className='hidden md:grid grid-cols-2 gap-4 ml-[20px] items-center h-[400px] relative'>
                    <FaChevronLeft className=
                        {isFirst ? 'absolute top-[50%] left-[-10px] flex justify-center items-center text-4xl text-white bg-gray-600 p-2 rounded-full' :
                            'absolute top-[50%] left-[-30px] flex justify-center items-center text-4xl text-white p-2 rounded-full bg-[#184589] hover:bg-pink-600'}
                        onClick={goPrevious} />

                    <FaChevronRight className=
                        {isLast ? 'absolute top-[50%] right-[-10px] flex justify-center items-center p-2 text-4xl text-white rounded-full bg-gray-500' :
                            'absolute top-[50%] right-[-10px] flex justify-center items-center p-2 text-4xl text-white rounded-full bg-[#184589] hover:bg-pink-600 '}
                        onClick={goNext} />

                    {/* image 1 */}

                    <div key={project[currentIndex].id}
                        style={{ backgroundImage: `url(${project[currentIndex].image})` }}
                        className='shadow-lg shadow-[#040c16] group container m-auto w-[350px] h-[80%] rounded-md flex justify-center items-center content-div
                        '
                    >
                        <div className='opacity-0 group-hover:opacity-100 duration-500 ease-linear'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                {project[currentIndex].name}
                            </span>
                            <div className='pt-8 text-center'>
                                <a href={project[currentIndex].github} target="_github link">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Github
                                    </button>
                                </a>
                                <a href={project[currentIndex].demo} target='_demo link'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* image 2 */}

                    <div key={project[currentIndex + 1].id}
                        style={{ backgroundImage: `url(${project[currentIndex + 1].image})` }}
                        className='shadow-lg shadow-[#040c16] group container m-auto w-[350px] h-[80%] rounded-md flex justify-center items-center content-div
                        '
                    >
                        <div className='opacity-0 group-hover:opacity-100 duration-500 ease-linear'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                {project[currentIndex + 1].name}
                            </span>
                            <div className='pt-8 text-center'>
                                <a href={project[currentIndex + 1].github} target="_github link">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Github
                                    </button>
                                </a>
                                <a href={project[currentIndex + 1].demo} target='_demo link'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white  text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    )
}

export default Projects;