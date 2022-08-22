import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

const Post = ({ post }) => {
  const { id, myName, userName, userImage, img, timeStamp, text } = post
  console.log(post)
  return (
    <div className='flex p-3 cursor-pointer border-b border-gray-200'>
      {/* user image */}
      <img
        src={userImage}
        alt='User Image'
        className='h-11 w-11 rounded-full mr-4'
      />

      <div className='flex-1'>
        <div className='flex items-center justify-between'>
          {/* header on the right */}
          <div className='flex items-center space-x-1 whitespace-nowrap'>
            <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>
              {myName}
            </h4>
            <span className='text-sm sm:text-[15px]'>{userName}</span>

            <span className='text-sm sm:text-[15px] hover:underline'>
              {timeStamp}
            </span>
          </div>
          <DotsHorizontalIcon className='h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 ' />
          {/* dotted icon */}
        </div>
        <p className='text-gray-800 text-[15px sm:text-[16px] mb-2'>{text}</p>
        <img
          src={img}
          alt='Post Image'
          className='rounded-2xl mr-2 h-64 w-96'
        />

        <div className='flex justify-between text-gray-500 p-2'>
          <div className='flex items-center select-none'>
            <ChatIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
            <TrashIcon className='h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100' />
            <HeartIcon className='h-9 w-9 hoverEffect p-2 text-red-600 hover:bg-red-100' />
            <ShareIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
            <ChartBarIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
          </div>
          {/* Icon */}
        </div>
      </div>
    </div>
  )
}

export default Post
