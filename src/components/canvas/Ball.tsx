import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Preload,
  PresentationControls,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <mesh castShadow receiveShadow scale={2.75}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[-2.5, 2.5, 5]} />
      <sphereGeometry args={[1, 24, 24]} />
      <meshStandardMaterial
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1}
        map={decal}
        flatShading
      />
    </mesh>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PresentationControls
          polar={[-Infinity, Infinity]}
          snap
        >
          <Ball imgUrl={icon} />
        </PresentationControls>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
