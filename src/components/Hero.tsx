import React, { Suspense } from 'react'
import { motion } from "framer-motion";
import { OrbitControls, Preload } from '@react-three/drei'
import CanvasLoader from "./Loader";
import { styles } from "../styles";
import { Canvas } from "@react-three/fiber";
import { Blob } from "./canvas";
import { Vector3 } from 'three';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#2A95D8]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#4EA8DE]">Andy</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <br className="sm:block hidden" />
          </p>
        </div>
      </div>
      <Canvas camera={{ position: [0, 0, 8], rotation: [-Math.PI / 6, 0, 0] }}>
        <Suspense fallback={<CanvasLoader />}>
          <Blob />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2 - 0.1}
            minPolarAngle={Math.PI / 2 - 0.1}
          />

          <Preload all/>
        </Suspense>
      </Canvas>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
