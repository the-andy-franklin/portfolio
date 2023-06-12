import React, { Suspense, useMemo, useRef } from "react";
import fragmentShader from "./fragmentShader";
import vertexShader from "./vertexShader";
import { Canvas, useFrame } from "@react-three/fiber";
import { BufferGeometry, Material, MathUtils, Mesh, NormalBufferAttributes, ShaderMaterial, Vector3 } from "three";
import { CanvasLoader } from "../..";
import { OrbitControls, Preload } from "@react-three/drei";

const Blob = () => {
  const hover = useRef(false);
  const mesh = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>>(null);
  const material = useRef<ShaderMaterial>(null)
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (material.current) {
      material.current.uniforms.u_time.value =
        0.4 * clock.getElapsedTime();

      material.current.uniforms.u_intensity.value = MathUtils.lerp(
        material.current.uniforms.u_intensity.value,
        hover.current ? 0.75 : 0.1,
        0.02
      );
    }
  });

  return (
    <mesh
      ref={mesh}
      scale={0.25}
      onPointerOver={() => {
        hover.current = true
      }}
      onPointerOut={() => {
        hover.current = false
      }}
    >
      <icosahedronGeometry args={[1.8, 20]} />
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const BlobCanvas = () => {
  return (
    <Canvas camera={{ position: new Vector3(1, 1, 1).setLength(1) }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 - 0.1}
          minPolarAngle={Math.PI / 2 - 0.1}
        />
        <Blob />
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default BlobCanvas;
