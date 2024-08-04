import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import RichTextEditor from '../RichTextEditor'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'

const formField = {
    title:'',
    companyName:'',
    city:'',
    state:'',
    startDate:'',
    endDate:'',
    workSummary:''
}
 
function Experience() {

  const [loading, setLoading] = useState(false)
    const [experienceList, setExperienceList] = useState([
        formField
    ])

    const {resumeInfo, setResumeInfo}=useContext(ResumeInfoContext)

    useEffect(()=>{
      setResumeInfo({
        ...resumeInfo,
        experience:experienceList
      })
    }, [experienceList])

  const handleChange = (e, index)=>{
    const newEntries = experienceList.slice()
    const {name, value} = e.target
    newEntries[index][name] = value
    setExperienceList(newEntries)
    console.log(experienceList);

  }

  const addNewExperience = ()=>{    
    setExperienceList([...experienceList, formField])    
  }

  const removeExperience = ()=>{

    setExperienceList(experienceList.slice(0,-1))
  }

  const handleRichTextEditor = (e, name, index )=>{
    const newEntries = experienceList.slice()
    newEntries[index][name] = e.target.value
    setExperienceList(newEntries)
    console.log(experienceList);

  }

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Professional experience</h2>
        <p>Details about your work experience </p>

        <div>
        {
          experienceList.map((item, index)=>(
            <div key={index}>
              <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                <div>
                  <label className='text-xs'>Position Title</label>
                  <Input name='title' onChange={(e)=>handleChange(e, index)}></Input>
                </div>

                <div>
                  <label className='text-xs'>Company Name</label>
                  <Input name='companyName' onChange={(e)=>handleChange(e, index)}></Input>
                </div>

                <div>
                  <label className='text-xs'>State</label>
                  <Input name='state' onChange={(e)=>handleChange(e, index)}></Input>
                </div>

                <div>
                  <label className='text-xs'>City</label>
                  <Input name='city' onChange={(e)=>handleChange(e, index)}></Input>
                </div>

                <div>
                  <label className='text-xs'>Start Date</label>
                  <Input name='startDate' type = 'date'onChange={(e)=>handleChange(e, index)}></Input>
                </div>

                <div>
                  <label className='text-xs'>End Date</label>
                  <Input name='endDate' type = 'date' onChange={(e)=>handleChange(e, index)}></Input>
                </div>
                
                <div className='col-span-2'>
                 {/* Work Summary */}
                 <RichTextEditor 
                 onRichextEditorChange={(e)=>handleRichTextEditor(e, 'workSummary', index)}
                  index={index}
                 />
                </div>

              </div>
            </div>
          ))
        }
        </div>

        <div className=' flex justify-between'>
          <div className='flex gap-2'>

            <Button variant = 'outline' 
            className= 'text-primary' 
            onClick = {addNewExperience}
            >+Add More</Button>

            <Button variant = 'outline' 
            className= 'text-primary' 
            onClick = {removeExperience}
            >-Remove</Button>
          </div>
          <Button disabled = {loading}
          onClick={()=>onSave()}
            >
            {loading? <Loader2 className='animate-spin'/>:'Save'}
            </Button>
        </div>
    </div>
  )
}

export default Experience