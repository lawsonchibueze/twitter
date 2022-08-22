import { SparklesIcon } from '@heroicons/react/solid'
import React from 'react'
import Input from './Input'
import Post from './Post'

const Feed = () => {
  const posts = [
    {
      id: '3',
      myName: 'Oby Chibueze',
      userName: 'Obiageli.chibueze',
      userImage:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      img: 'https://media.istockphoto.com/id/152113274/photo/smiling-black-woman-using-a-laptop.webp?s=612x612&w=is&k=20&c=OSWkKFjvB3Vna7MiXOqrCT_KpPHVKPvl6IFxsX1lsmQ=',
      text: 'JavaScript Professional',
      timeStamp: '3 hours ago',
    },
    {
      id: '4',
      myName: 'Tobechukwu Chibueze',
      userName: 'tobe.chibueze',
      userImage: 'https://pbs.twimg.com/media/Es_CjYVXEAA5Vnm.jpg',
      img: 'https://media.istockphoto.com/id/1388575947/photo/mother-and-daughter-using-laptop-in-hotel.webp?s=612x612&w=is&k=20&c=rPc6b2vvDkHSr-Qk1ejmoqyKvdRoWm1ExUAqFur7zSs=',
      text: 'Proudly JavaScript',
      timeStamp: '3 hours ago',
    },
  ]
  return (
    <div className='xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl'>
      <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
        <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
        <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
          <SparklesIcon className='h-5' />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Feed
