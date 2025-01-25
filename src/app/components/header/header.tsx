import React from 'react'
import Image from 'next/image'; 
import Link from 'next/link';
import myImage from "../../../../public/assets/web-development.png"
import { Typography, Avatar, Navbar, Button } from "@material-tailwind/react";

const Header = () => {
  return (
    <Navbar className="sticky max-w-full rounded-none border-none p-5 bg-purple-500">
        <div className="container mx-auto px-12">
            <main>
                <div className='flex flex-row gap-3'>
                    <div className='w-1/4 border border-black'>
                      <div className='flex flex-row p-2'>
                        <div>
                            <Image src={myImage} alt='profile' width={75} height={75}/>
                            {/* <Avatar src={myImage} alt="avatar" /> */}
                        </div>
                        <div className='flex flex-col justify-center mx-3'>
                            <Typography variant='h5' color='black' className='text-white font-lato'>Portfolio</Typography>
                            <Typography variant='h6' color='black' className='font-josefinsans text-white'>My Official journey</Typography>
                        </div>
                    </div>
                  </div>

                  <div className='w-2/4 border border-black'>
                        <ol className='flex flex-row justify-around items-center gap-3 h-full'>
                            <li className='px-3 py-1'>
                            <Button variant="gradient" color='amber' className="flex items-center gap-0.5 rounded-full">
                                <svg className='text-black h-5 w-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                </svg>
                                <Link href = "#" className='font-lato text-black'>Tech Known</Link>
                            </Button>
                            </li>
                            <li className='text-whitepx-3 py-1'>
                            <Button color='amber' className="flex items-center gap-0.5 rounded-full">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                              </svg>
                                <Link href = "#" className='font-lato'>Experience</Link>
                            </Button>
                            </li>
                            <li className='text-white font-josefinsans font-semibold px-3 py-1 rounded-2xl'>
                            <Button color='amber' className="flex items-center gap-0.5 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                </svg>

                                <Link href = "#" className='font-lato'>Projects</Link>
                            </Button>
                            </li>
                        </ol>
                  </div>

                  <div className='w-1/4 border border-black'>
                      01
                  </div>
                </div>
            </main>
        </div>
    </Navbar>
  )
}

export default Header