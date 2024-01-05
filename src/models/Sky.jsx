import React, { useRef } from 'react'
import skyScene from '../assets/3d/sky.glb'; 
import { useGLTF } from '@react-three/drei';

const Sky = ({isRotating}) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();
      {/** Elemento primitivo */}
  return (
    <mesh>
        <primitive object={sky.scene}/>
    </mesh>
  );
}

export default Sky