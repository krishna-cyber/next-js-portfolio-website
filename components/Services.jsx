import React from 'react'
import Link from 'next/link';

const Services = ({services}) => {
  console.log(services);
  return (
    <section className='services container mx-auto'>
        <h1>What We Can Do?</h1>
        
        <h1>Services we can help you with</h1>
        <div>
          {
            services.map(service=>{
              return(
              <Link id={service.id} href={`/products`}>
              <div className="card">
                {service.title}
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