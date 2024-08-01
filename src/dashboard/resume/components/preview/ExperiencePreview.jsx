import React from 'react'

function ExperiencePreview({resumeInfo}) {
  return (
    <div className='my-6'>
        <h2 className='text-center font-bold text-sm mb-2'
        style={{color: resumeInfo?.themeColor}}
        >
            Professional Experience
        </h2>

        <hr style={{color: resumeInfo?.themeColor}}></hr>

        {
            resumeInfo?.experience.map((exp, index) => (
                <div key={index} className='my-5'>
                    <h2 className='txt-sm font-bold'
                    style={{color: resumeInfo?.themeColor}}
                    >{exp?.title}</h2>
                    <h2 className='text-xs flex justify-between'>{exp?.companyName}, 
                    {exp?.city}, 
                    {exp?.state}
                    <span>{exp?.startDate} - {exp?.currentlyWorking? 'Present':exp?.endDate}</span>
                    </h2>

                    <p className=' text-xs my-2'>
                        {exp.workSummary}
                    </p>
                </div>
            )

            )
        }
    </div>
  )
}

export default ExperiencePreview