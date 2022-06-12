import Link from "next/link";

// import * as THREE from 'three';

import { Canvas, useFrame } from "@react-three/fiber";
import Box from "../components/Box";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import { Stars } from "@react-three/drei";

export default function threeD(){
    return(
        <>
        <h1 className="absolute z-10 text-white mt-2 ml-2 p-2 text-xl border-2 border-white flex justify-center items-center font-semibold cursor-pointer hover:bg-gray-700"><Link href="/">Back</Link></h1>
        
        <div className="flex w-full h-screen">

        <Canvas style={styleForCanVas}>
            {/* If you want to turn off zoom write enableZoom={false} inside Orbitontrols as an attribute */}
            <OrbitControls/>
            {/* <Rig /> */}
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
            <Box />
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


// Function for mouse movements motion effect
// function Rig({ v = new THREE.Vector3() }) {
//     return useFrame((state) => {
//       state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.05)
//     })
//   }