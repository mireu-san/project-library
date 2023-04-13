/* eslint-disable react/no-unknown-property */
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Loader, useGLTF } from '@react-three/drei';

const Model = () => {
	const gltf = useGLTF('/3d/viking_book/scene.gltf', true);
	return <primitive object={gltf.scene} dispose={null} />;
};

const Book = () => {
	return (
		<div className="book-container">
			<Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
				<Suspense fallback={<Loader />}>
					<Model />
					<Environment preset="sunset" background />
				</Suspense>
				<OrbitControls />
			</Canvas>
		</div>
	);
};

export default Book;
