import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import noData from "../../../public/images/no-data.gif"
import { useRouter } from 'next/navigation';

const NoData = ({ label, path }: { label: string, path: string }) => {

    const router = useRouter()
    return (
        <div className="mx-auto ">
            <div className="bg-secondary p-4 h-fit rounded-md border-b-blue-700 border-2 shadow-md">
                <Image
                    src={noData}
                    alt='No Data'
                    width={500}
                    height={500}
                />
            </div>
            <Button
                className=' mt-3 w-full'
                onClick={() => path && router.push(path)}
            >{label}</Button>
        </div>
    )
}

export default NoData