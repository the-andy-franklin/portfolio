import React, { useMemo, useRef } from "react";
import fragmentShader from "./fragmentShader";
import vertexShader from "./vertexShader";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, Material, MathUtils, Mesh, NormalBufferAttributes, ShaderMaterial } from "three";

const Blob = () => {
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
        0.1,
        0.02
      );
    }
  });

  return (
    <mesh
      ref={mesh}
      scale={1.5}
      position={[0, -1, 0]}
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

export default Blob;
