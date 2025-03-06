import { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <p className='bg-white'>Home Page</p>
      <p className='bg-blue text-white'>Home Page</p>
      <p className='bg-green text-white'>Home Page</p>
       <p className='bg-orange text-white'>Home Page</p>
       <p className='bg-pink text-white'>Home Page</p>
       <p className='bg-yellow'>Home Page</p>
       <p className='bg-taupe'>Home Page</p>
       <p className='bg-light-blue'>Home Page</p>
      </div>
    </>
  )
}

export default Home;
