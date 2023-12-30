import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";

{
  /**
    <section className='w-full h-screen relative'>
        <div className="absoute top-28 left-0 right-0 z-10 flex items-center
            justify-center">
            POPUP
        </div>
    </section>
 */
}
const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  // Ajustamnos el tamaño de la isla dependiendo del tamaño de la pantalla
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

    // Ajustamnos el tamaño del avion dependiendo del tamaño de la pantalla
    const adjustPlaneForScreenSize = () => {
      let screenScale, screenPosition;
  
      if (window.innerWidth < 768) {
        screenScale = [1.5, 1.5, 1.5];
        screenPosition = [0, -1.5, 0];
      } else {
        screenScale = [3, 3, 3];
        screenPosition = [0, -4, -4];
      }
  
      return [screenScale, screenPosition, rotation];
    };

  const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        {/** Se ejecuta mientras se carga el modelo 3D */}
        <Suspense fallback={<Loader />}>
          {/** Diferentes tipos de luces que hay, un componente las renderiza */}
          {/** Luz que viene desde lo lejos, como el sol */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          {/** Ilumina todos los objetos en la escena sin castear sombras */}
          <ambientLight intensity={0.5} />
          {/** Emite luz hacia todas las direcciones desde un punto en específico */}
          {/** <pointLight /> */}
          {/** Emite luz hacia todas las direcciones desde un punto en específico pero en forma de cono, se le da un angulo */}
          {/** <spotLight /> */}
          {/**Ilumina la escena con un gradiente */}
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0,20,0]}
          ></Plane>
          <Bird></Bird>
          <Sky></Sky>
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Plane />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
