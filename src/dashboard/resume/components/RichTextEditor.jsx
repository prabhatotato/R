import { Button } from "@/components/ui/button";
import React, { useContext, useState } from "react";
import { Editor, EditorProvider } from "react-simple-wysiwyg";
import {
    BtnBold,
    BtnBulletList,
    BtnClearFormatting,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnRedo,
    BtnStrikeThrough,
    BtnStyles,
    BtnUnderline,
    BtnUndo,
    HtmlButton,
    Separator,
    Toolbar,
  } from 'react-simple-wysiwyg';
import { Brain, Loader2 } from "lucide-react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { toast } from "sonner";
import { AIchatSession } from "@/service/AI_Model";

  const PROMPT = 'position title: {positionTitle}. Depending on the position title, give me 5-7 bullet points for my experience in resume.The result should be in html format.'

function RichTextEditor({onRichextEditorChange, index}) {
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false)

  const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext)

  const generateSummaryWithAI = async()=>{
    setLoading(true)
    if(!resumeInfo.experience[index].title){
      toast('Please add Position title')
      setLoading(false)
      return
    }
    const prompt = PROMPT.replace('{positionTitle}', resumeInfo.experience[index].title  )

    const result = await AIchatSession.sendMessage(prompt)
    
    console.log(result.response.text());

    let resp = JSON.parse(result.response.text())
    
    setValue(resp.experience.join('\n  '))

    setLoading(false)
    
  }

  return (
    <div>

      <div className="flex justify-between my-2">
        <label className="text-xs">
          Summary
        </label>

        <Button className='flex gap-2 border-primary text-primary'
        variant='outline'
        size='sm'
        onClick = {generateSummaryWithAI}
        >
          <Brain className='h-4 w-4'/>
          {
            loading?<Loader2 className="animate-spin"/>:'Generate using AI'
          }
          
        </Button>
      </div>
      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onRichextEditorChange(e)
          }}
        >
          <Toolbar>
            <BtnUndo />
            <BtnRedo />
            <Separator />
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
            <BtnClearFormatting />
            <HtmlButton />
            <Separator />
            <BtnStyles />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
