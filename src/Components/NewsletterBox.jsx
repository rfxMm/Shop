import React from 'react'

const NewsletterBox = () => {

    const onSubmiteHandler = () => {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe new & get 20% off</p>
      <p className='text-gray-400 mt-3'>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' onSubmit={onSubmiteHandler}> 
        <input className='w-full sm:flex-1 outline-none  ' type="email" placeholder='Enter your email' required />
        <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
