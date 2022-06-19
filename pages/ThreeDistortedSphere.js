import Link from "next/link";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import AnimatedSphere from "../components/animatedSphere";

import { Stars } from "@react-three/drei";

export default function threeD(){
    return(
        <>
        <Link href="/"><h1 className="absolute z-10 text-white mt-2 ml-2 p-2 text-xl border-2 border-white flex justify-center items-center font-semibold cursor-pointer hover:bg-gray-700">Back</h1></Link>


        <div className="flex w-full h-screen">

        <Canvas style={styleForCanVas}>
            {/* If you want to turn off zoom write enableZoom={false} inside Orbitontrols as an attribute */}
            <OrbitControls />
            <ambientLight intensity={0.8} />
            <directionalLight position={[-2,5,2]} intensity={1} />
            <Stars
                radius={100} // Radius of the inner sphere (default=100)
                depth={50} // Depth of area where stars should fit (default=50)
                count={5000} // Amount of stars (default=5000)
                factor={4} // Size factor (default=4)
                saturation={0} // Saturation 0-1 (default=0)
                fade // Faded dots (default=false)
            />
            <Suspense fallback={null}>
            <AnimatedSphere />
            </Suspense>
        </Canvas>
        </div>
        
        </>
    )
}

const styleForCanVas={
    border:"2px solid black",
    backgroundColor:"black",
    height:"100%",
}