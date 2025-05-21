import Image from 'next/image';
import React from 'react'

type Props = {
    image: string;
    title: string;
};

const WhyChooseCard = ({ image, title }:Props) => {
  return (
    <div>
        {/* image */}
        <Image
            src={image}
            width={70}
            height={70}
            alt="image"
            className="mx-auto"
        /> 
        {/* content */}  
        <h1 className="mt-6 text-center text-gray-900 font-medium text-lg">
            {title}
        </h1> 
        <p className="mt-text-center text-xs font-medium text-gray-700">
            Lorem Hhhj UHuhb  stsdfg sgtsfg sgtsdg sdg gsg sg gssgsgs
        </p>
    </div>
  )
}

export default WhyChooseCard