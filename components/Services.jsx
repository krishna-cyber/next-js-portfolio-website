import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Services = ({services}) => {
  console.log(services);
  return (
    <section className='services container mx-auto flex flex-col space-y-8'>
        <h1 className='services-title font-bold text-3xl'>What We Can Do?</h1>
        
        <h1 className='service-subtitle font-bold text-4xl'>Services we can help you with</h1>
        <div className='services-cards flex flex-wrap gap-10  justify-between'>
          {
            services.map(service=>{
              return(
              <Link id={service.id} href={`/products`}>
              <div className="card w-1/2 flex relative items-center justify-center">
                <span className='title top-3 left-3 text-lg text-slate-400 uppercase absolute'>{service.title}</span>
              
                  <p className='description'>{service.disc}</p>
          
                <div className="media mt-3 p-10">
                {
                  service.video?
                  <video className=' object-cover w-full h-full' src={`/img/${service.video}`} autoPlay loop muted/>
                  :<Image src={`/img/${service.image}`} width="100%" height="100%" layout='responsive' objectFit='cover'/>
                }
                </div>
                
              </div>
              </Link>
              )
            })
          }
          </div>
        </section>
    
  )
}

export default Services