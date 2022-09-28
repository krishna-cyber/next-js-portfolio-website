import React from 'react'
import Circle from './Circle'
import Image from 'next/image'

const Testinomial = () => {
  return (
    <section className="testinomial flex flex-col items-center overflow-hidden gap-16 relative container mx-auto mt-3">
        <Circle backgroundColor="#01c686" top= "-80vh" left="0" right="0" />
        <h1 className='text-center mt-6 py-10 font-bold text-3xl'>Testinomials</h1>
        <div className="comments flex flex-wrap justify-around w-full">
          <div className="comment-cards p-3">
            <Image src="/img/facebook.png" height="30px" width="30px" />
            <p className=' text-justify mt-3 text-slate-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et culpa laudantium deserunt asperiores dolore doloremque amet, aliquam eum exercitationem, porro praesentium necessitatibus tempore. Neque officiis expedita animi dolorem rerum.</p>
            <div className="profile flex items-center gap-2">
              <Image className='avatar' src="/img/user1.jpeg" height="50px" width="50px" objectFit='content'/>
              <div className='flex flex-col py-3'>
                <h2 className='font-bold'>Krishna Tiwari</h2>
                <p className=' text-slate-600'>MERN Developer</p>
              </div>
            </div>
          </div>

          <div className="comment-cards p-3">
            <Image src="/img/google.png" height="30px" width="30px" />
            <p className=' text-justify mt-3 text-slate-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et culpa laudantium deserunt asperiores dolore doloremque amet, aliquam eum exercitationem, porro praesentium necessitatibus tempore. Neque officiis expedita animi dolorem rerum.</p>
            <div className="profile py-1 flex items-center gap-2">
              <Image className='avatar' src="/img/user2.jpeg" height="50px" width="50px" objectFit='content'/>
              <div>
                <h2 className='font-bold'>Dammar Kumar Tiruwa</h2>
                <p className='text-slate-600'>Graphics Designer</p>
              </div>
            </div>
          </div>
          <div className="comment-cards p-3">
            <Image src="/img/yahoo.png" height="30px" width="30px" />
            <p className=' text-justify mt-3 text-slate-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et culpa laudantium deserunt asperiores dolore doloremque amet, aliquam eum exercitationem, porro praesentium necessitatibus tempore. Neque officiis expedita animi dolorem rerum.</p>
            <div className="profile py-1 flex items-center gap-2">
              <Image className='avatar' src="/img/user3.jpeg" height="50px" width="50px" objectFit='content'/>
              <div>
                <h2 className='font-bold'>Nabin Ghimire</h2>
                <p className='text-slate-600'>System Analytics</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Testinomial