import styles from '../styles/hover.module.css';
import Link from "next/link";

import { Canvas } from "@react-three/fiber";
import { OrbitControls,Html, Stars } from "@react-three/drei";
import { Suspense } from "react";
import { useFrame } from '@react-three/fiber';

import * as THREE from 'three';

export default function Hover(){
    return(
        <>
        
        <div className='h-screen'>
        
            {/* <Link href="/">
            <h1 style={styleforback} >Back
            </h1>
            </Link> */}
        
        <Canvas style={styleForCanVas}>
        {/* <Stars /> */}
            <Suspense fallback={null}>
                    <Rig />
                    <Html
                        as='div' // Wrapping element (default: 'div')
                        center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
                        style={styleforhead}
                        >
                        <div className={styles.grid}>
                            <div className={`${styles.grid__item} ${styles.pos_name}`}>
                                    <div className={styles.sur}>Syed</div>
                                    <div className={styles.pre}>Aareez</div>
                                </div>
                                <div className={`${styles.grid__item} ${styles.pos_1}`}>
                                    <div className={styles.grid__item_img} style={{backgroundImage:'url(./images/1.jpg'}}></div>
                                </div>
                                <div className={`${styles.grid__item} ${styles.pos_2}`}>
                                    <div className={styles.grid__item_img} style={{backgroundImage:'url(/images/2.jpg'}}></div>
                                </div>
                                <div className={`${styles.grid__item} ${styles.pos_3}`}>
                                    <div className={styles.grid__item_img} style={{backgroundImage:'url(/images/3.jpg'}}></div>
                                </div>
                                <div className={`${styles.grid__item} ${styles.pos_4}`}>
                                    <div className={styles.grid__item_img} style={{backgroundImage:'url(/images/1.jpeg'}}></div>
                                </div>
                                <div className={`${styles.grid__item} ${styles.pos_5}`}>
                                    <div className={styles.grid__item_img} style={{backgroundImage:'url(/images/4.jpg'}}></div>
                                </div>
                                <div className={`${styles.grid__item} ${styles.pos_6}`}>
                                    <div className={styles.grid__item_img} style={{backgroundImage:'url(/images/6.jpg'}}></div>
                                </div>
                                <div className={`${styles.grid__item} ${styles.pos_7}`}>
                                    <div className={styles.grid__item_img} style={{backgroundImage:'url(/images/environment.jpg'}}></div>
                                </div>
                                <div className={`${styles.grid__item} ${styles.pos_8}`}>
                                    <div className={styles.grid__item_img} style={{backgroundImage:'url(/images/istockphoto-1205970089-170667a.jpg'}}></div>
                                </div>
                                <div className={`${styles.grid__item} ${styles.pos_9}`}>
                                    <div className={styles.grid__item_img} style={{backgroundImage:'url(/images/naruto.jpg'}}></div>
                                </div>
                                <div className={`${styles.grid__item} ${styles.pos_10}`}>
                                    <div className={styles.grid__item_img} style={{backgroundImage:'url(/images/creative.jpg'}}></div>
                                </div>
                            </div>
                        </Html>
            </Suspense>
        </Canvas>
        </div>
        

        </>
    )
}

const styleForCanVas={
    height:'100%',
    backgroundColor:"black",
}

const styleforhead={
    width:'1400px',
    height:"660px",

}
// Function for mouse movements motion effect
function Rig({ v = new THREE.Vector3() }) {
    return useFrame((state) => {
      state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.5)
    })
}