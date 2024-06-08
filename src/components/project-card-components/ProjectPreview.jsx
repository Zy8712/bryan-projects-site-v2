'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function ProjectPreview(props) {

    const SkeletonLoader = () => (
        <div className="animate-pulse w-full h-full bg-gradient-to-t from-white to-gray-500"></div>
    );

    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && <SkeletonLoader />}
            <Image
                src={props.preview_image}
                alt="qr_code_preview"
                width={400}
                height={293.333333}
                layout="responsive"
                className="duration-300 transform scale-100 group-hover:scale-108 transition-transform"
                onLoadingComplete={handleImageLoad}
                priority={true}
            />
        </>
    );
}