'use client'
import Image from 'next/image'

export const Slider = () => {
  return (
    <>
      <div className='imageRing absolute inset-0 -z-10 min-h-screen'>
        <Image
          src='/frank-mckenna-4V8JxijgZ_c-unsplash.jpg'
          layout='fill'
          objectFit='cover'
          alt='Background'
          priority
        />
      </div>
      <div className='imageRing2 absolute inset-0 -z-10 min-h-screen'>
        <Image
          src='/frank-mckenna-4V8JxijgZ_c-unsplash.jpg'
          layout='fill'
          objectFit='cover'
          alt='Background'
          priority
        />
      </div>
    </>
  )
}
