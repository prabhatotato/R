import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from '../../components/FormSection';
import PreviewSection from '../../components/PreviewSection';

function EditResume() {
    const params= useParams()

    useEffect(()=>{
        console.log(params);
    },[])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
      {/* Form Section */}
      <FormSection/>
      <PreviewSection/>

      {/* Preview Section */}
    </div>
  )
}

export default EditResume