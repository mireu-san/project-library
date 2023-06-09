/* eslint-disable react/no-unknown-property */
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Paladin = () => {
	const paladin = useGLTF('./paladin/scene.gltf');

	return (
		<primitive object={paladin.scene} scale={4} position-y={0} rotation-y={0} />
	);
};

const PaladinCanvas = () => {
	return (
		<Canvas
			shadows
			frameloop="always"
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [-4, 3, 6],
			}}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
					enableZoom={true}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
					minDistance={1}
					maxDistance={1.5}
				/>
				<ambientLight intensity={0.5} />
				<directionalLight position={[0, 10, 5]} intensity={1} />

				<Paladin />
				<Preload all />
			</Suspense>
		</Canvas>
	);
};

export default PaladinCanvas;
