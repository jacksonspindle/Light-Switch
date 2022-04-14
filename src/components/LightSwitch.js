import React, { useRef, Suspense } from "react";
import { Canvas,useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { BoxGeometry } from 'three'
import * as THREE from "three";


export default function LightSwitch() {
    return (
        <div>
            <Canvas  className='canvas' >
               <Suspense fallback={null}>
               <ambientLight intensity={0.1}  />
                <directionalLight position={[0, 0, 0]} />
                {/* <BookCover cover={Book.props.cover} /> */}
                 <mesh  >
                        <boxGeometry args={[6, 9, 9]}/>
                      <meshStandardMaterial attach="material"  />
                   </mesh>                
                 <OrbitControls minDistance={12} maxDistance={12} />
                </Suspense>
            </Canvas>
        </div>
    )
}