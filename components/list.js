import { useState, useEffect } from 'react';

export default function List(){

    const [ myProjects, SetMyProjects] = useState([]);

    useEffect(()=>{
        const myProjectsArray=[
            {name:"One",details:"Details....!"},
            {name:"Two",details:"Details....!"},
            {name:"Three",details:"Details....!"},
            {name:"Four",details:"Details....!"},
            {name:"One",details:"Details....!"},
            {name:"Two",details:"Details....!"},
            {name:"Three",details:"Details....!"},
            {name:"Four",details:"Details....!"},
        ]
        SetMyProjects(myProjectsArray);
    },[]);

    return(
        <>
        <div className="border-4 flex flex-col w-full items-center overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-100">
            {myProjects.map((project)=>(
                <div className="flex w-[80%] p-4 m-4 text-3xl bg-white shadow-md shadow-gray-400 hover:shadow-gray-800 hover:bg-gray-800 hover:text-white cursor-pointer">
                    {project.name}
                </div>
            ))}
        </div>
        </>
    )
}