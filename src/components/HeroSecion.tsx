import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

const HeroSecion = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-x-hidden mx-auto py-10 md:py-0'>

<Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="gold"
      />
    
    <div className='p-4 relative z-10 text-center w-full'>
            <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master The Art of Music</h1>
            <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
                Dive into our comprehensive Music courses and transform your Musical Journey today. whether your are beginner or looking to refine your skills, jion us to talk your true potential</p>

            <div className='mt-4'>

                <Link href={"/courses"} >
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore courses
                </Button>
                </Link>

            </div>
    </div>

    </div>
  )
}

export default HeroSecion