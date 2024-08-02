import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';

function ResumeCardItem({resume}) {

  
  // console.log('card item called with resume:', resume);
  return (
    <Link to= {'/dashboard/resume/' + resume.documentId + '/edit'}>
    
        <div className='p-14 py-24 
        bg-secondary 
        flex items-center 
        justify-center 
        mt-10
        h-[280px]
        rounded-lg
        border
        border-primary
        hover:scale-105 transition-all
        hover: shadow-lg
        hover: cursor-pointer '>
            <Notebook/>
            {/* <h2>resume card item</h2> */}
        </div>
            <h2 className='text-center my-1'>{resume.title}</h2>
    </Link>
  )
}

export default ResumeCardItem