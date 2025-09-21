"use client"
import { Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarFooter } from '@/components/ui/sidebar'
import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
function AppSidebar() {
  const {theme, setTheme} = useTheme();
  return (
     <Sidebar>
      <SidebarHeader>
      <div className='p-3 '>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-3'>
          <Image src="/logo.svg" alt="Logo" width={60} height={60 } className='w-[40px] h-[40px]' />
          <h2 className='font-bold text-xl'>AI Fusion</h2>
          </div>
          {theme === 'dark' ? 
          <Button variant={'ghost'} onClick={() => setTheme('light')}>
            <Moon/>
          </Button>
          :
          <Button variant={'ghost'} onClick={() => setTheme('dark')}>
            <Sun/>
          </Button>
          }

        </div>
        <Button className='mt-7 w-full' size={'lg'}>+ New chat</Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className='p-3'>
            <h2 className='font-bold text-lg'>Chat</h2>
            <p className='text-sm text-gray-400 '>Sign-in to start chatting with multiple AI models</p>
           </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className='p-3 mb-10'>
          <Button className='w-full' size={'lg'}>Sign-in/Sign-up</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar