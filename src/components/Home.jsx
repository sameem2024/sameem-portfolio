import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <section id ="home" className='min-h-screen pb-[100px] sm:w-full sm:h-screen pt-[20%] bg-[#0a192f]'>

      {/* container */}

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col gap-3 justify-center h-[90%] lg:ml-40'>
        <p className='text-pink-700 text-3xl sm:text-5xl font-bold'>I'M</p>
        <h1 className='text-3xl sm:text-5xl font-bold text-[#ccd6f6]'>Sameem</h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0]'>Web Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a Flexible and ambitious web-developer specializing in building 
           exceptional UI experiences and leveraging problem-solving and interpersonal skills
           to enhance UI experiences as well as support the company development initiatives.
        </p>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          <span className='text-2xl italic'>I</span>nnovative , <span className='text-2xl italic'>P</span>roficient , <span className='text-2xl italic'> D</span>
            etail-oriented developer and programmer with 2.3 years of experience in various software
            development life cycle initiatives.
        </p>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I am looking for an opportunity to leverage full stack coding proficiencies and 
          grow as a professional programmer ultimately.
        </p>
        <button className='w-[180px] text-white whitespace-nowrap sm:min-w-[150px] sm:text-white group border-2 rounded-lg border-gray-200 px-6 py-3 flex items-center hover:bg-pink-700 hover:border-pink-700 '>
            <a href='#projects'> View Work   </a>
            <span className='sm:group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='text-gray-200' />
            </span>
            
      </button>
      </div>
    <div>
      
     
    </div>

    </section>
  )
}

export default Home