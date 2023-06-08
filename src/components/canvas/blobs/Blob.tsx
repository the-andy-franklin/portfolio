import React, { useMemo, useRef } from "react";
import fragmentShader from "./fragmentShader";
import vertexShader from "./vertexShader";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, Material, MathUtils, Mesh, NormalBufferAttributes } from "three";

const Blob = () => {
  const mesh = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>>(null);
  const hover = useRef(false);
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      (mesh.current.material as any).uniforms.u_time.value =
        0.4 * clock.getElapsedTime();

      (mesh.current.material as any).uniforms.u_intensity.value = MathUtils.lerp(
        (mesh.current.material as any).uniforms.u_intensity.value,
        hover.current ? 1 : 0.35,
        0.02
      );
    }
  });

  return (
    <mesh
      ref={mesh}
      scale={1.5}
      position={[0, -1, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronBufferGeometry args={[1.8, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Blob;
