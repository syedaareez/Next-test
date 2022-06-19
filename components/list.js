import { useState } from 'react';
import Link from 'next/link';

export default function List(){

    const [ myThree, SetMyThree] = useState([
        {name:"Distorted Sphere",details:"Details....!",page:"ThreeDistortedSphere"},
        {name:"Box",details:"Details....!",page:"ThreeBox"},
    ]);

    const [ myDesktop, SetMyDesktop] = useState([
        {name:"Hover effect",details:"Details....!",page:"Hover"},
    ]);

    return(
        <>
        <div className="border-4 flex flex-col w-full items-center overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-100">
            <div className="flex w-[95%] sm:w-[80%] p-1 m-2 text-2xl">
                For Desktop
            </div>
            {myDesktop.map((project,id)=>(
                <>
                <Link href={`${project.page}`}>
                    <div key={id} className="flex w-[95%] m-2 sm:w-[80%] p-3 sm:m-2 text-2xl bg-white shadow-md shadow-gray-400 hover:shadow-gray-800 hover:bg-gray-800 hover:text-white cursor-pointer">
                        {project.name}
                    </div>
                </Link>
                </>
            ))}
            <div className="flex w-[95%] sm:w-[80%] p-1 m-2 text-2xl">
                Three JS Shapes
            </div>
            {myThree.map((project,id)=>(
                <>
                <Link href={`${project.page}`}>
                    <div key={id} className="flex w-[95%] m-2 sm:w-[80%] p-3 sm:m-2 text-2xl bg-white shadow-md shadow-gray-400 hover:shadow-gray-800 hover:bg-gray-800 hover:text-white cursor-pointer">
                        {project.name}
                    </div>
                </Link>
                </>
            ))}
            
        </div>
        </>
    )
}