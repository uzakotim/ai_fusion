"use client"
import { Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarFooter } from '@/components/ui/sidebar'
import { Zap, Moon, Sun, User, User2 } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { SignIn, SignInButton, UserProfile, useUser } from '@clerk/nextjs'
import UsageCreditProgress from './UsageCreditProgress'
function AppSidebar() {
  const {theme, setTheme} = useTheme();
  const {user} = useUser();
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
        {user ?
        <Button className='mt-7 w-full' size={'lg'}>+ New chat</Button>
        : <SignInButton mode='modal'>
          <Button className='mt-7 w-full' size={'lg'}>Sign-in to start</Button>
          </SignInButton>
        }
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className='p-3'>
            <h2 className='font-bold text-lg'>Chat</h2>
            {!user && <p className='text-sm text-gray-400 '>Sign-in to start chatting with multiple AI models</p>}
           </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className='p-3 mb-10'>
          {!user ? <SignInButton mode='modal'>
          <Button className='w-full' size={'lg'}>Sign-in/Sign-up</Button>
          </SignInButton>
          : 
          <div>
            <UsageCreditProgress />
            <Button className='flex w-full mb-3' size={'lg'}>
              <Zap className='inline-block mr-2'/>
              <h2>Upgrade plan</h2>
            </Button>
            <Button className='flex w-full' variant={'ghost'} size={'lg'}>
              <User2 className='inline-block mr-2'/>
              <h2>Settings</h2>
            </Button>
          </div>
          }
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar