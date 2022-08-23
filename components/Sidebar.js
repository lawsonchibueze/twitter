import Image from 'next/image'
import React from 'react'
import SidebarMenuItem from './SidebarMenuItem'
import { HomeIcon } from '@heroicons/react/solid'
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from '@heroicons/react/outline'
const Sidebar = () => {
  return (
    <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24'>
      {/* Twitter Logo */}
      <div className='hoverEffect'>
        <Image
          src='https://help.twitter.com/content/dam/help-twitter/brand/logo.png'
          height={50}
          width={50}
        />
      </div>

      {/* Menu */}
      <div>
        <SidebarMenuItem text='Home' Icon={HomeIcon} active />
        <SidebarMenuItem text='Explore' Icon={HashtagIcon} />
        <SidebarMenuItem text='Notifications' Icon={BellIcon} />
        <SidebarMenuItem text='Messages' Icon={InboxIcon} />
        <SidebarMenuItem text='Bookmark' Icon={BookmarkIcon} />
        <SidebarMenuItem text='Lists' Icon={ClipboardIcon} />
        <SidebarMenuItem text='Profile' Icon={UserIcon} />
        <SidebarMenuItem text='More' Icon={DotsCircleHorizontalIcon} />
      </div>

      {/* Buttons */}
      <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>
        Tweet
      </button>

      {/* Mini Profile */}
      <div className='hoverEffect text-gray-700 flex items-center justify-center xl:justify-start '>
        <Image
          src='https://pbs.twimg.com/media/Es_CjYVXEAA5Vnm.jpg'
          alt='profile'
          height={50}
          width={50}
          className='rounded-full'
        />
        <div className='text-gray mr-2 leading-5 hidden md:inline'>
          <h4 className='font-bold'>Lawson Chibueze</h4>
          <p className='text-gray-500 hidden xl:inline'>@lawsonchibueze</p>
        </div>
        <DotsHorizontalIcon className='h-5 xl:ml-8' />
      </div>
    </div>
  )
}

export default Sidebar
