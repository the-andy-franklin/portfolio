import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { isMobile } from "react-device-detect";

export const Planet = () => {
  const planet = useGLTF("./low-poly-world.glb");

  return (
    <primitive
      object={planet.scene}
      position-y={-1}
      scale={isMobile ? 0.75 : 1}
    />
  );
};

export const PlanetCanvas = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {isMobile && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        ></div>
      )}
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 3, 12],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Planet />
          <OrbitControls
            autoRotate
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={3} />
          <spotLight position={[10, 10, 10]} angle={0.3} intensity={2} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default PlanetCanvas;
