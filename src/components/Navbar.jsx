import logo from '../assets/heroImage.png';
import React,{useState} from 'react';
import { FaBars ,
        FaTimes,
        FaGithub,
        FaLinkedin,
        
} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Navbar = () => {
  const [nav,setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center scroll-smooth px-4 bg-[#0a192f] text-gray-300">
      <div className='w-[100px] h-[100px] mt-5'>
        <img src={logo} alt ="" className='w-[full] h-[full]' />
      </div>

      {/* Menu */}
     
        <ul className='hidden md:flex'>
          <a href='#home' className='hover:text-pink-500'>Home</a>
          <a href='#about'  className='hover:text-pink-500'>About</a>
          <a href='#skills'  className='hover:text-pink-500'>Skills</a>
          <a href='#projects'  className='hover:text-pink-500'>Work</a>
          <a href='#contact'  className='hover:text-pink-500'>Contact</a>
        </ul>
     

      {/* Hamburger Menu */}

      <div onClick={handleClick}className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
        
      </div>


      {/* Mobile Menu */}

      <ul className={!nav ?'hidden':'z-10 absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '}>
        <a href='#home' className='py-6 text-4xl' onClick={handleClick}>Home</a>
        <a href='#about'  className='py-6 text-4xl' onClick={handleClick}>About</a>
        <a href='#skills'  className='py-6 text-4xl' onClick={handleClick}>Skills</a>
        <a href='#projects'  className='py-6 text-4xl' onClick={handleClick}>Work</a>
        <a href='#contact'  className='py-6 text-4xl' onClick={handleClick}>Contact</a>
      </ul>

      {/* Social Icons */}

      
        <nav className='hidden lg:flex flex-col fixed top-[35%] left-0 z-100'>
         
            <a href='https://www.linkedin.com/in/sameem-banu-5020179b/' target="_blank" rel="noopener noreferrer" className='flex justify-between items-center px-4 text-gray-300 w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600' >
            LinkedIn <FaLinkedin size={30}/>
            </a>
            <a href='https://github.com/sameem2024?tab=repositories' target="_blank" rel="noopener noreferrer" className='flex justify-between items-center px-4 text-gray-300 w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]' >
            Github <FaGithub size={30}/>
            </a>
            <a href='https://mail.google.com/' target="_blank" rel="noopener noreferrer" className='flex justify-between items-center px-4 text-gray-300 w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]' >
            Email <HiOutlineMail size={30}/>
            </a>
            <a href='https://turquoise-carmelina-91.tiiny.site' rel="noopener noreferrer" target="_blank" className='flex justify-between items-center px-4 text-gray-300 w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]' >
            Resume <BsFillPersonLinesFill size={30}/>
            </a>

       </nav>

    
    </div>
  )
}

export default Navbar