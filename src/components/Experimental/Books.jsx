// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// const Book = () => {
// 	const bookRef = useRef();

// 	useEffect(() => {
// 		const scene = new THREE.Scene();
// 		const camera = new THREE.PerspectiveCamera(
// 			75,
// 			window.innerWidth / window.innerHeight,
// 			0.1,
// 			1000
// 		);

// 		const renderer = new THREE.WebGLRenderer();
// 		renderer.setSize(window.innerWidth, window.innerHeight);
// 		bookRef.current.appendChild(renderer.domElement);

// 		const loader = new GLTFLoader();

// 		loader.load(
// 			'../../3d/viking_book/scene.gltf',
// 			(gltf) => {
// 				scene.add(gltf.scene);
// 			},
// 			undefined,
// 			(error) => console.error(error)
// 		);

// 		const pointLight = new THREE.PointLight(0xffffff, 1, 100);
// 		pointLight.position.set(0, 0, 10);
// 		scene.add(pointLight);

// 		camera.position.set(0, 0, 50); // Set the camera position further away
// 		const controls = new OrbitControls(camera, renderer.domElement);
// 		controls.update();

// 		const animate = () => {
// 			requestAnimationFrame(animate);

// 			controls.update();
// 			renderer.render(scene, camera);
// 		};

// 		animate();

// 		return () => {
// 			bookRef.current.removeChild(renderer.domElement);
// 		};
// 	}, []);

// 	return <div ref={bookRef}></div>;
// };

// export default Book;
