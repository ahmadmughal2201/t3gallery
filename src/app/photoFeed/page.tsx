import React from 'react';
import photoList from './photoList';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="flex flex-col gap-1 w-2/3 h-[95vh]">
                <div className="flex gap-1 h-52">
                    <div className="flex-1 relative">
                        <Link href={`/photoFeed/${photoList[0].id}`}>
                            <Image src={photoList[0].url} alt="" layout="fill" objectFit="cover" className="rounded-lg" />
                        </Link>
                    </div>
                    <div className="flex-shrink-0 w-1/3 relative">
                        <Link href={`/photoFeed/${photoList[1].id}`}>
                            <Image src={photoList[1].url} alt="" layout="fill" objectFit="cover" className="rounded-lg" />
                        </Link>
                    </div>
                </div>
                <div className="flex gap-1 h-52">
                    <div className="flex-shrink-0 w-1/3 relative">
                        <Link href={`/photoFeed/${photoList[2].id}`}>
                            <Image src={photoList[2].url} alt="" layout="fill" objectFit="cover" className="rounded-lg" />
                        </Link>
                    </div>
                    <div className="flex-1 relative">
                        <Link href={`/photoFeed/${photoList[3].id}`}>
                            <Image src={photoList[3].url} alt="" layout="fill" objectFit="cover" className="rounded-lg" />
                        </Link>
                    </div>
                </div>
                <div className="flex gap-1 h-52">
                    <div className="flex-1 relative">
                        <Link href={`/photoFeed/${photoList[4].id}`}>
                            <Image src={photoList[4].url} alt="" layout="fill" objectFit="cover" className="rounded-lg" />
                        </Link>
                    </div>
                    <div className="flex-shrink-0 w-1/3 relative">
                        <Link href={`/photoFeed/${photoList[5].id}`}>
                            <Image src={photoList[5].url} alt="" layout="fill" objectFit="cover" className="rounded-lg" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
