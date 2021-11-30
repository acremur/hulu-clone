import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { forwardRef } from 'react'

const Thumbnail = forwardRef(({ result }, ref) => {

    const { 
        id, 
        backdrop_path, 
        poster_path, 
        overview, 
        title, 
        original_name,
        release_date,
        vote_count
    } = result
    const BASE_URL = 'https://image.tmdb.org/t/p/original'
    
    return (
        <div 
            ref={ref} 
            className='group p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'
        >
            <Image 
                layout='responsive'
                width={1920}
                height={1080}
                src={`${BASE_URL}/${backdrop_path || poster_path}`}
            />
            <div className='p-2'>
                <p className='truncate max-w-md'>{overview}</p>
                <h2 className='mt-1 text-2xl text-white transform-all duration-100 ease-in-out group-hover:font-bold'>{title || original_name}</h2>
                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {release_date} • <ThumbUpIcon className='h-5 mx-2' />
                    {vote_count}
                </p>
            </div>
        </div>
    )
})

export default Thumbnail