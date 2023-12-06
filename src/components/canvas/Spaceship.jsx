import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const SpaceshipCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);
	const spaceship = useGLTF("./spaceship/scene.glb");

	useEffect(() => {
		// add listener to check for screen size
		const mediaQuery = window.matchMedia("(max-width: 500px)");
		setIsMobile(mediaQuery.matches);

		// define callback function to handle changes to media query
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		// add callback function as a listener for changes to the media query
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		// remove listener when component is unmounted
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

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
						scale={isMobile ? 0.08 : 0.15}
						position={[0, 0, 0]}
					/>
				</mesh>
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default SpaceshipCanvas;
