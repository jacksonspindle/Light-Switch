import React, { Suspense, useRef, useState } from 'react'
import './style.css'
// import LightSwitch from './LightSwitch'
import LightSwitch from './LightSwitch'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


export default function App() {

    const [lightState, setLightState] = useState(.1)

    
    return (
        <div>
            <Suspense>
                <Canvas className='canvas' >
                <directionalLight position={[-6, 11, 30]} intensity={lightState} />
                    <LightSwitch lightStateChanger={setLightState} />
                <OrbitControls maxDistance={5} minDistance={3} maxAzimuthAngle={.6} minAzimuthAngle={5} />
                </Canvas>
                
            </Suspense>
        </div>
    )
}