import React, { useRef } from 'react';
import LiIcon from './LiIcon';
import { motion } from 'framer-motion'

export const ExperienceDetails = ({ position, company, companyLink, time, address, description }) => {
    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-left justify-between'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink}
                    target="_blank"
                    className='text-primary capitalize'
                >@{company}</a></h3>

                <span className='capitalize font-medium text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {description}
                </p>
            </motion.div>
        </li>
    );
};