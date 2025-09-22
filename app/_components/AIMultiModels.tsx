import {useState } from 'react'
import { AIModelList } from '@/shared/AIModelList'
import Image from 'next/image'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { MessageSquare, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
function AIMultiModels() {
  const [aiModelList, setAIModelList] = useState(AIModelList)
  const onToggleChange = (model : string,value: boolean)  => {
    setAIModelList((prev) => prev.map((m) => 
      m.model === model ? {...m,enable: value} : m)    
    )
  }
  return (
    <div className='flex flex-1 h-[75vh] border-b'>
      {aiModelList.map((model) => (
        <div className={` ${model.enable? 'flex flex-1 min-w-[400px]' : 'w-[100px] flex flex-none'} flex-col border-r h-full overflow-auto`} key={model.model}>
        <div className='flex w-full items-center  h-[70px] justify-between border-b p-4'>
          <div className='flex items-center gap-4'>
            <Image src={model.icon} alt={model.model} width={24} height={24} />
            {model.enable &&
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={model.subModel[0].name} />
              </SelectTrigger>
              <SelectContent>
                {model.subModel.map((subModel) => (
                  <SelectItem key={subModel.id} value={subModel.name}>
                    {subModel.name}
                  </SelectItem>
                ))
                }
              </SelectContent>
            </Select>}
          </div>
          <div>
            {model.enable ?
            <Switch checked={model.enable} onCheckedChange={(value) => onToggleChange(model.model,value)} />
            :<MessageSquare onClick={() => onToggleChange(model.model,true)} className='cursor-pointer'/>}
            </div>
        </div>
        {model.premium && model.enable && <div className='flex items-center justify-center h-full'>
          <Button> <Lock />Upgrade to unlock</Button>
        </div>}
        </div>
      ))}
     
    </div>
  )
}

export default AIMultiModels