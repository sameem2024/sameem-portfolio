import hero from '../assets/aboutImage.png'

const About = () => {
  return (
    <section id="about" className=" w-full min-h-screen pt-[25%] sm:w-full sm:h-screen bg-[#0a192f] text-gray-300">

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full lg:ml-40 lg:mr-5'>
          <div className="text-center mb-8">
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 mb-6'>
              About
            </p>
          </div>
       
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold lg:ml-28 tracking-wider">
            <p>
              Hi,Please take a look around.
            </p>
            <p className=" text-center mx-auto sm:animate-pulse my-6 w-[250px] h-[250px]">
              <img src={hero} alt="hero" className='sm:w-full sm:h-full rounded-full shadow-pink-400 shadow-2xl'/>
            </p>
          </div>
          <div className="border-gray-50 text-slate-400 p-4 pt-0 mx-auto">
            <p className="font-medium mb-5">
              Bachelor of Engineer in ACCET,karaikudi.
              <p>I have completed from (2010-2014)</p>
            </p>
            <p className="mb-5">
              Application developer in <span className="font-bold">Accenture services Pvt Ltd</span>
            </p>
            <p className="mb-5">
              <p className="inline pb-1 border-b-2 border-gray-100"> Sprint telecommunications Industry</p>
              <p className="mt-3">Application Developer</p>
              <span>[2015-2016]</span>
            </p>
            <p className="mb-5">
              <p className="inline pb-1 border-b-2 border-gray-100"> Starwood Hotels and Indstry</p>
              <p className="mt-3">Web Developer</p>
              <span>[2016-2017]</span>
            </p>
            <p>
              <p>Maternity time</p>
              <span>My career break does not going to break my aspiration</span>
              <span>I prefer Practice over Perfection</span>
            </p>
          </div>
        </div>

        </div>
      </section>

    
  )
}

export default About