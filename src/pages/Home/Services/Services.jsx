import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setService] = useState([])

    useEffect(() => {
        fetch('services.json')
        .then(res =>  res.json())
        .then(data => {
            setService(data)
        })
    }, [])
    return (
        <>
          <div className='w-1/2 mx-auto text-center'>
            <h3 className='text-base font-bold text-red-700'>Services</h3>
            <h2 className='text-3xl font-bold w-1/2 mx-auto mt-1 mb-2'>Our service area</h2>
            <p className='text-md'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>  

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                        />)
                }
            </div>
        </>
    );
};

export default Services;