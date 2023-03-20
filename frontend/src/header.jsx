import React from 'react';

export default function Header (){
    return (<div className='mb-36 w-[100%] h-1/5 xl:h-1/3 2xl:h-1/3 md:h-1/3  bg-[#323d59]'>  
    
    <div className='h-full relative  justify-center flex items-center'>
 <img className='absolute w-screen h-full' src="https://static.vecteezy.com/ti/vetor-gratis/p1/5897906-metaverse-blue-tecnologia-fundo-modelo-gratis-vetor.jpg" alt="" />
 <div  className='top-6 absolute text-[4vh] sm:text-[4vw] 2xl:text[4vw] xl:top-0  text-white font-header-letter '>Literally Dayvison</div>

 
 <a className='absolute flex  justify-around w-[90%] sm:w-1/2  md:h-[90%] md:w-2/3 lg:w-1/2 h-full top-[50%] bg-[#232b41]'>
   <div className='flex items-center justify-around w-[90%]  h-[90%]'>
    <img className='w-[30%]  2xl:w-[25%]'  src="https://avatars.githubusercontent.com/u/88006182?s=400&u=9490874abc1734edb18d5b9053d8636e2b605ca8&v=4.png" alt="" />
<div className=' flex flex-col items-center justify-around h-full '>
    <text className='m-5'>Dayvison da Paz</text></div> 

    <div className='h-[10%] absolute bottom-3'>github</div>   
</div>

 </a>
 </div>
       
        </div>
      
    );
}


