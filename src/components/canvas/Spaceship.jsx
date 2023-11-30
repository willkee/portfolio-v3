/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const SpaceshipCanvas = () => {
	const spaceship = useGLTF("./spaceship/scene.glb");

	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 50 }}
			gl={{ preserveDrawingBuffer: true }}
			className="z-1 opacity-40"
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
					autoRotate={true}
					autoRotateSpeed={0.5}
				/>
				<mesh>
					<primitive
						object={spaceship.scene}
						scale={0.1}
						position={[0, 0, 0]}
					/>
				</mesh>
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default SpaceshipCanvas;
