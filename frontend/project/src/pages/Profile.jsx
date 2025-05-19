import React from 'react'
import { IoMdTime } from "react-icons/io";
import { MdMenuBook } from "react-icons/md";
import { IoCode } from "react-icons/io5";
import { MdIncompleteCircle } from "react-icons/md";

const Profile = () => {

    const data=[
        {
            id:1,
            icon:<IoMdTime />,
            head:"hour studies",
            mid:"56H"
        },
           {
            id:2,
            icon:<MdIncompleteCircle />,
            head:"completion rate",
            mid:"56%"
        },
           {
            id:3,
            icon:<MdMenuBook />,
            head:"Total studies",
            mid:"12"
        },
           {
            id:4,
            icon:<IoCode />,
            head:"Most study ",
            mid:"programming"
        },
    ]

  return (
    <>
    <div className='w-screen h-screen flex'>
        <div className='h-screen  w-1/2 bg-linear-to-r/srgb from-indigo-500 to-teal-400 flex flex-col py-3'>
         <h1 className='text-2xl font-bold my-5'>Hours Studies</h1>
         <div className='flex justify-around items-center py-2 px-3 bg-gray-200'>
            <h1>0</h1>
            <h1>1</h1>
            <h1>2</h1>
            <h1>3</h1>
            <h1>4</h1>
            <h1>5</h1>
            <h1>6</h1>
            <h1>7</h1>
         </div>
             <div className='overflow-y-scroll '>
                  <progress className="progress progress-success h-7  my-2 w-full" value="80" max="100"></progress>
            <progress className="progress progress-success h-7 w-full my-2" value="56" max="100"></progress>
            <progress className="progress progress-success h-7 w-full my-2" value="70" max="100"></progress>
            <progress className="progress progress-success h-7 w-full my-2" value="80" max="100"></progress>
            <progress className="progress progress-success h-7 w-full my-2" value="90" max="100"></progress>
            <progress className="progress progress-success h-7  w-full my-2" value="80" max="100"></progress>
            <progress className="progress progress-success h-7 w-full my-2" value="0" max="100"></progress>
                <progress className="progress progress-success h-7 w-full my-2" value="56" max="100"></progress>
            <progress className="progress progress-success h-7 w-full my-2" value="70" max="100"></progress>
            <progress className="progress progress-success h-7 w-full my-2" value="80" max="100"></progress>
            <progress className="progress progress-success h-7 w-full my-2" value="90" max="100"></progress>
            <progress className="progress progress-success h-7  w-full my-2" value="80" max="100"></progress>
            <progress className="progress progress-success h-7 w-full my-2" value="0" max="100"></progress>
            

             </div>
          
          
    
        </div>

        <div className='h-screen w-1/2 bg-linear-to-r/srgb from-indigo-500 to-teal-400 justify-center items-center gap-x-16 flex flex-wrap '>
        {
            data.map(({id,icon,head,mid})=>{
                return(
                    <div className='h-56 p-4 w-80 border-2 border-gray-600 rounded' key={id}>
                        <div className='h-full w-full border-l-4 px-3 border-red-400'>
                          <div className='flex justify-between items-center'>
                            <h1 className='text-2xl'>{head}</h1>
                            <h1 className='text-3xl'>{icon}</h1>
                        </div>

                        <div className='text-4xl my-16'>{mid}</div>
                        </div>
                    </div>
                )
            })
        }

        </div>
    </div>
      
    </>
  )
}

export default Profile
