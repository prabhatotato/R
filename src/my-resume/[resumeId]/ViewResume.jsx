import React, { useEffect, useState } from 'react'
import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import PreviewSection from '@/dashboard/resume/components/PreviewSection'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { useParams } from 'react-router-dom'
import GlobalService from '@/service/GlobalService'

function ViewResume() {

  const [resumeInfo, setResumeInfo] = useState()
  const {resumeId} = useParams()

  useEffect(()=>{
    getResumeInfo()
  },[])

  const getResumeInfo = ()=>{
    GlobalService.getResumeById(resumeId).then(resp =>{
      console.log(resp.data.data);
      setResumeInfo(resp.data.data)
      
    })
  }

  return (
    <>
    <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>

        <Header/>

        <div className='my-10 mx-10 md:mx-20 lg:mx36'>

        <h2 className='text-center text-2xl font-medium'> Your resume is ready!</h2>
        <p className='text-center'>You can Download and share your resume via link</p>

          <div className='flex justify-between px-44 my-10'>
            <Button>
              Download
            </Button>
            <Button>
              Share
            </Button>
          </div>

          <div>
            <PreviewSection/>
          </div>
        </div>
    </ResumeInfoContext.Provider>
    </>
  )
}

export default ViewResume