import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useSpring, a as web } from "@react-spring/web";
import { a as three } from "@react-spring/three";
import { motion } from "framer-motion";

const Model: React.FC<{ open: boolean; hinge: ReturnType<typeof useSpring>[0]['open'] }> = ({ open, hinge }) => {
  const group = useRef<THREE.Group>(null!);
  interface GLTFResult {
    nodes: {
      Cube008: THREE.Mesh;
      Cube008_1: THREE.Mesh;
      Cube008_2: THREE.Mesh;
      keyboard: THREE.Mesh;
      Cube002: THREE.Mesh;
      Cube002_1: THREE.Mesh;
      touchbar: THREE.Mesh;
    };
    materials: {
      aluminium: THREE.Material;
      "matte.001": THREE.Material;
      "screen.001": THREE.Material;
      keys: THREE.Material;
      trackpad: THREE.Material;
      touchbar: THREE.Material;
    };
  }
  const { nodes, materials } = useGLTF(
    "/mac-draco.glb"
  ) as unknown as GLTFResult;

  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const g = group.current;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, open ? Math.cos(t / 10) / 10 + 0.25 : 0, 0.1);
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, open ? Math.sin(t / 10) / 4 : 0, 0.1);
    g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, open ? Math.sin(t / 10) / 10 : 0, 0.1);
    g.position.y = THREE.MathUtils.lerp(g.position.y, open ? (-2 + Math.sin(t)) / 3 : -4.3, 0.1);
  });

  return (
    <group
      ref={group}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={() => setHovered(false)}
    >
      <three.group rotation-x={hinge.to([0, 1], [1.575, -0.425])} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cube008.geometry}
            material={materials.aluminium}
          />
          <mesh
            geometry={nodes.Cube008_1.geometry}
            material={materials["matte.001"]}
          />
          <mesh
            geometry={nodes.Cube008_2.geometry}
            material={materials["screen.001"]}
          />
        </group>
      </three.group>
      <mesh
        geometry={nodes.keyboard.geometry}
        material={materials.keys}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials.aluminium}
        />
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials.trackpad}
        />
      </group>
      <mesh
        geometry={nodes.touchbar.geometry}
        material={materials.touchbar}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
};

export const Hero: React.FC = () => {
  const [open, setOpen] = useState(true);
  const { open: o } = useSpring({ open: open ? 1 : 0 });

  return (
    <motion.main 
      className="py-20 md:py-48 px-6 md:px-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
        <web.div className="text-primary lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-7xl font-bold">Hi, I'm Reyhan</h1>
          <h2 className="text-xl lg:text-3xl mt-2 lg:mt-4">
            I build web applications and enjoy uncovering insights through data analytics.
          </h2>
        </web.div>
        
        <div className="w-full lg:w-1/2 h-[280px] md:h-[400px] lg:h-[500px]">
          <Canvas
            dpr={[1, 2]}
            camera={{ position: [0, 0, -30], fov: 25 }}
            gl={{ 
              antialias: true, 
              alpha: true,
              toneMapping: THREE.NoToneMapping
            }}
            style={{ 
              position: "relative", 
              width: "100%", 
              height: "100%",
              background: "transparent"
            }}
          >
            <ambientLight intensity={5} />
            <directionalLight position={[10, 10, 5]} intensity={2.5} />
            <directionalLight position={[-10, 10, 5]} intensity={2.5} />
            <directionalLight position={[10, -10, 5]} intensity={2} />
            <directionalLight position={[-10, -10, 5]} intensity={2} />
            <pointLight position={[0, 10, 0]} intensity={2} />
            <pointLight position={[0, -10, 0]} intensity={2} />
            <three.pointLight
              position={[10, 10, 10]}
              intensity={1.5}
              color={o.to([0, 1], ["#f0f0f0", "#d25578"])}
            />
            <Suspense fallback={null}>
              <group
                rotation={[0, Math.PI, 0]}
                onClick={(e) => (e.stopPropagation(), setOpen(!open))}
              >
                <Model open={open} hinge={o} />
              </group>
            </Suspense>
            <ContactShadows
              position={[0, -4.5, 0]}
              opacity={0.4}
              scale={20}
              blur={1.75}
              far={4.5}
            />
          </Canvas>
        </div>
      </div>
    </motion.main>
  );
};