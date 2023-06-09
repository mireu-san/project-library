import { React, useState, useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
	const ref = useRef();
	const [sphere] = useState(() =>
		random.inSphere(new Float32Array(5000), { radius: 1.2 })
	);

	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / 15;
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
				<PointMaterial
					transparent
					color="#f272c8"
					// size={0.002}
					size={0.005}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

const StarsCanvas = () => {
	const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);
	const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);

	useEffect(() => {
		const handleResize = () => {
			setCanvasWidth(window.innerWidth);
			setCanvasHeight(window.innerHeight);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div
			className="w-full h-auto absolute inset-0 z-[-1]"
			style={{
				width: '100%',
				height: '100%',
			}}
		>
			<Canvas
				camera={{ position: [0, 0, 1] }}
				style={{ width: canvasWidth, height: canvasHeight }}
			>
				<Suspense fallback={null}>
					<Stars />
				</Suspense>

				<Preload all />
			</Canvas>
		</div>
	);
};

export default StarsCanvas;
