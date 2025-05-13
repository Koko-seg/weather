import {Container} from "@/components/Container"
import {Search} from "@/components/Search"
import {Moon} from "@/components/Moon"
import {Circle} from "@/components/Circle"
//  import React, { useState } from 'react';


export default function Home() {
  return (
    <div className="flex w-[100wv]">
      <div className="bg-[#f3f4f6] w-[50%] h-[1200px] relative flex flex-col items-center justify-center ">
       <div className="relative  w-[800px] h-[100%] border-2 border-indigo-600 my-0 mx-auto flex items-center justify-center">
         <Search />
        <img src="/weather/sun-little.webp" className="w-[174px] h-[174px] absolute top-[100px] left-30 z-0"/>
        <Container/>
      </div>
      </div>
      <Circle/>
      <div className="bg-[#0F141E] w-[50%] h-[1200px]">
        <div className="relative  w-[800px] h-[100%] border-2 border-indigo-600 my-0 mx-auto flex items-center justify-center">
        <img src="/weather/moon-little.webp" className="w-[174px] h-[174px] absolute box-border border-none m-auto block bottom-[100px] right-30"/>
        <Moon/>
</div>
      </div>
    </div>
  )}
 