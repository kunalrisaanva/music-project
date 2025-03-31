'use client';

import React, { FormEvent, useState } from 'react';
import { Meteors } from '@/components/ui/meteors';

function MusicSchoolContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formData,setFormData] = useState({email:"",message:""})
  const [isLoading,setIsLoading] = useState(false)

  const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();
    console.log('Submitted:', { email, message });
    setIsLoading(true);
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData({...formData, [target.name]: target.value});
    
    const response = await fetch("api/send/",{
        method:"Post",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(formData),
    })
    console.log("respones form backend --->",response);
    if(response.status === 200){
        setIsLoading(false)
        setFormData({email:"",message:""})
    }
  };

//   if)


//   if(isLoading) return <p className='text-center text-gray-100'>Loading...</p>

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
     
      {/* Ensure the container is relative */}
      {/* BackgroundBeams with adjusted z-index */}
        <Meteors number={20} className='absolute top-0 left-0 z-0'/>
      {/* <Meteors className="absolute top-0 left-0 w-full h-full z-0" /> */}

      {/* Content with higher z-index */}
      <div className="max-w-2xl mx-auto p-4 relative z-10">
       
        {/* Add relative and z-10 to bring content to the front */}
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>

        {isLoading && <div className=' border-white p-2 rounded-md flex flex-col justify-center items-center mt-8'>Sendig Message...</div> }
        
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;