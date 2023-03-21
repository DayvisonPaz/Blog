import React from "react"
import Header from './header';

export default function Home() {
  return (
    <div className=' rounde h-[100vh] w-screen overflow-y-scroll bg-[#000D30]'>
    <Header></Header>

<input placeholder="Pesquise por um post" className='bg-[#0a1021] text-center text-white h-12 2xl:mt-10 xl:mt-10 ml-[10%] w-[80vw]' type="text" />

   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 items-center h-4/5 w-full '>

 
  <div className='rounded-lg overflow-hidden w-[88vw] h-[46vw] sm:w-[44vw] md:w-[44vw] lg:w-[44vw] xl:w-[44vw] 2xl:w-[44vw] sm:h-[26vw] md:h-[26vw] lg:h-[26vw] xl:h-[26vw] 2xl:h-[26vw]  bg-gray-500 m-[5%]'>

<img className='h-[80%] w-full'  src="https://external-preview.redd.it/WvUAd4Wspcbx89ZtF2pbZojvfAO5shxZnYAX9YaEfP4.png?format=pjpg&auto=webp&s=4721a9174829073a4bc7c4fe54a01645e8415b7b" alt="" />
<h1 className='text-center  text-white'>Beleza em berserk mesmo com tragedias</h1>
  </div>


 






   </div>
  </div>
  )
}
