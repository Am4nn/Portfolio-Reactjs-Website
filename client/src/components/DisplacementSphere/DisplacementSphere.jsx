import { useReducedMotion, useSpring } from 'framer-motion';
import { useInViewport } from '../../hooks/useInViewport';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useFps } from '../../hooks/useFps';
import { startTransition, useEffect, useRef, useState } from 'react';
import {
    AmbientLight,
    Color,
    DirectionalLight,
    Mesh,
    MeshPhongMaterial,
    PerspectiveCamera,
    Scene,
    SphereBufferGeometry,
    UniformsUtils,
    Vector2,
    WebGLRenderer,
    sRGBEncoding,
} from 'three';
import { media } from '../../utils/style';
import { cleanRenderer, cleanScene, removeLights } from '../../utils/three';
import fragShader from './displacementSphereFragment.glsl.js';
import vertShader from './displacementSphereVertex.glsl.js';
import { useMediaQuery } from '@mui/material';

const springConfig = {
    stiffness: 30,
    damping: 20,
    mass: 2,
};

const backgroundColor = { r: 18, g: 18, b: 18 };
const parallaxFactor = 0.45;

const DisplacementSphere = props => {
    const start = useRef(Date.now());
    const canvasRef = useRef();
    const mouse = useRef();
    const renderer = useRef();
    const camera = useRef();
    const scene = useRef();
    const lights = useRef();
    const uniforms = useRef();
    const material = useRef();
    const geometry = useRef();
    const sphere = useRef();
    const reduceMotion = useReducedMotion();
    const isInViewport = useInViewport(canvasRef);
    const windowSize = useWindowSize();
    const rotationX = useSpring(0, springConfig);
    const rotationY = useSpring(0, springConfig);
    const { measureFps, isLowFps } = useFps(isInViewport);
    const isMobile = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        const { innerWidth, innerHeight } = window;
        mouse.current = new Vector2(0.8, 0.5);
        renderer.current = new WebGLRenderer({
            canvas: canvasRef.current,
            antialias: false,
            alpha: true,
            powerPreference: 'high-performance',
            failIfMajorPerformanceCaveat: true,
        });
        renderer.current.setSize(innerWidth, innerHeight);
        renderer.current.setPixelRatio(1);
        renderer.current.outputEncoding = sRGBEncoding;

        camera.current = new PerspectiveCamera(54, innerWidth / innerHeight, 0.1, 100);
        camera.current.position.z = 52;

        scene.current = new Scene();

        material.current = new MeshPhongMaterial();
        material.current.onBeforeCompile = shader => {
            uniforms.current = UniformsUtils.merge([
                shader.uniforms,
                { time: { type: 'f', value: 0 } },
            ]);

            shader.uniforms = uniforms.current;
            shader.vertexShader = vertShader;
            shader.fragmentShader = fragShader;
        };

        startTransition(() => {
            geometry.current = new SphereBufferGeometry(32, 128, 128);
            sphere.current = new Mesh(geometry.current, material.current);
            sphere.current.position.z = 0;
            sphere.current.modifier = Math.random();
            scene.current.add(sphere.current);
        });

        return () => {
            cleanScene(scene.current);
            cleanRenderer(renderer.current);
        };
    }, []);

    useEffect(() => {
        const dirLight = new DirectionalLight('white', 0.6);
        const ambientLight = new AmbientLight('white', 0.1);

        dirLight.position.z = 200;
        dirLight.position.x = 100;
        dirLight.position.y = 100;

        lights.current = [dirLight, ambientLight];
        // commenting out background color to make it transparent
        // scene.current.background = new Color(backgroundColor.r / 255, backgroundColor.g / 255, backgroundColor.b / 255);
        lights.current.forEach(light => scene.current.add(light));

        return () => {
            removeLights(lights.current);
        };
    }, []);

    useEffect(() => {
        let { width, height } = windowSize;

        const adjustedHeight = height + height * 0.3;
        renderer.current.setSize(width, adjustedHeight);
        camera.current.aspect = width / adjustedHeight;
        camera.current.updateProjectionMatrix();

        // Render a single frame on resize when not animating
        if (reduceMotion) {
            renderer.current.render(scene.current, camera.current);
        }

        if (width <= media.mobile) {
            sphere.current.position.x = 14;
            sphere.current.position.y = 10;
        } else if (width <= media.tablet) {
            sphere.current.position.x = 18;
            sphere.current.position.y = 14;
        } else {
            sphere.current.position.x = 22;
            sphere.current.position.y = 16;
        }
    }, [reduceMotion, windowSize]);

    useEffect(() => {
        const onMouseMove = event => {
            const position = {
                x: event.clientX / window.innerWidth,
                y: event.clientY / window.innerHeight,
            };

            rotationX.set(position.y / 2);
            rotationY.set(position.x / 2);
        };

        if (!isMobile && !reduceMotion && isInViewport) {
            window.addEventListener('mousemove', onMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, [isInViewport, reduceMotion, rotationX, rotationY, isMobile]);

    useEffect(() => {
        let animation;

        const animate = () => {
            animation = requestAnimationFrame(animate);

            if (uniforms.current !== undefined) {
                uniforms.current.time.value = 0.00005 * (Date.now() - start.current);
            }

            sphere.current.rotation.z += 0.001;
            sphere.current.rotation.x = rotationX.get();
            sphere.current.rotation.y = rotationY.get();

            renderer.current.render(scene.current, camera.current);

            measureFps();

            if (isLowFps.current) {
                renderer.current.setPixelRatio(0.5);
            } else {
                renderer.current.setPixelRatio(1);
            }
        };

        if (!reduceMotion && isInViewport) {
            animate();
        } else {
            renderer.current.render(scene.current, camera.current);
        }

        return () => {
            cancelAnimationFrame(animation);
        };
    }, [isInViewport, measureFps, reduceMotion, isLowFps, rotationX, rotationY]);

    // for a transaction in opacity when page loads
    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        setOpacity(1);
    }, []);

    // for using Parallax Effect only when not in mobile
    useEffect(() => {
        const handleScroll = () => {
            if (!canvasRef.current) return;
            canvasRef.current.style.transform = `translateY(${window.scrollY * parallaxFactor}px)`;
        }
        if (!isMobile) {
            window.addEventListener("scroll", handleScroll);
        }
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile]);

    return (
        <canvas
            style={{
                opacity: `${opacity}`,
                position: "absolute",
                width: "100dvw",
                inset: 0,
                transition: "opacity 3s cubic-bezier(0.4, 0.0, 0.2, 1)"
            }}
            aria-hidden
            ref={canvasRef}
            {...props}
        />
    );
};

export default DisplacementSphere;