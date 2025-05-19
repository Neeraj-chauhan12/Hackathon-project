import React from 'react'
import Navbar from '../components/Navbar'
import Educationschedule from '../components/Educationschedule'
import EducationUpcoming from './EducationUpcoming'

const Home = () => {

   

  return (
    <>
    <div className='min-h-screen bg-linear-to-r/srgb from-indigo-500 to-teal-400 w-screen overflow-x-hidden'>
        <Navbar />
       
       
        <h1 className='text-3xl pl-10 mt-10 font-bold'>Education Schedule</h1>
        

       <div>
        <Educationschedule />
       </div>

      
        <h1 className='text-3xl pl-10 mt-10 font-bold'>Education Upcoming Schedule</h1>
        


       <div>
        <EducationUpcoming />
       </div>
       

    </div>
      
    </>
  )
}

export default Home
