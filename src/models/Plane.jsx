import React, { useEffect, useRef } from 'react'
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane = ({isRotating, ...props}) => {
    const ref = useRef();
    // Load the 3D model and its animations
    const { scene, animations } = useGLTF(planeScene);
    // Get animation actions associated with the plane
    const { actions } = useAnimations(animations, ref);
  

    useEffect(() => {
        // Turn on and turn off plane
        if (isRotating) {
            actions["Take 001"].play();
          } else {
            actions["Take 001"].stop();
          }
    }, [actions, isRotating]);
    return (
        <mesh {...props}>
           {   /** use the primitive element when you want to directly embed a complex 3D
      model or scene */ }
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane;
