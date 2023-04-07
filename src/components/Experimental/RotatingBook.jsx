/* eslint-disable react/no-unknown-property */
// src/RotatingBook.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Book(props) {
	const meshRef = useRef();

	useFrame((state) => {
		meshRef.current.rotation.x += 0.01;
		meshRef.current.rotation.y += 0.01;
	});

	return (
		<mesh ref={meshRef} {...props}>
			<boxGeometry args={[1, 1.5, 0.1]} />
			<meshStandardMaterial color="blue" />
		</mesh>
	);
}

export default function RotatingBook() {
	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Book position={[0, 0, 0]} />
		</Canvas>
	);
}
