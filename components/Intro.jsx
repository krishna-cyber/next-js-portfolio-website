import React from 'react'
import Image from 'next/image'
import Circle from './Circle'

const Intro = () => {
  return (
    <main className='intro container relative overflow-hidden flex mx-auto'>
    <Circle backgroundColor="#01c686" right="-40vh" />
    <Circle backgroundColor="#b0ff49" top="-40vh" left="-30vh" />
        <div className='w-1/2 py-32 flex flex-1 flex-col h-full px-16 justify-around'>
        <h1 className=' font-bold text-4xl uppercase text-3xl'><span className='brand font-bold'>AV0CAD0</span> Digital Production Agency</h1>
        <p className=' text-lg'>
          Create live segments and target the right people for messages based on their behaviour.
        </p>
        <button className='btn text-center py-3 rounded-lg w-1/4 px-4 font-bold text-white'>
          Discover
        </button>
        </div>

        <div className='w-1/2 flex flex-1 h-full p-20 relative'>
        <Image src='/img/Avocado.png'
        priority ={true}
        layout='fill'
        objectFit='cover'
         />
        </div>
    </main>
  )
}

export default Intro