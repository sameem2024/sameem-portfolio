

const Contact = () => {
  return (
    <section id="contact" className='w-full h-screen pt-[10%] bg-[#0a192f] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/apjmvoma" method="POST">
            <div className="flex flex-col justify-center items-center">
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-400'>
                    Contact
                </p>
                <p className='text-gray-400  my-5'>
                    Submit the form below or Shoot me an email - guunnsameem@gmail.com
                </p>
            </div>
            <div className="flex flex-col gap-4">
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            </div>
            
            <button className='text-white border-2 rounded-3xl hover:bg-pink-600  px-4 py-3 mt-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>

    </section>
        

  )
}

export default Contact