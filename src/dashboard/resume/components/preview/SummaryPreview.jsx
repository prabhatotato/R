import React from 'react'

function SummaryPreview({resumeInfo}) {
  return (
    <div className='text-xs'>
    summary info
    {resumeInfo?.summary}
    </div>
  )
}

export default SummaryPreview