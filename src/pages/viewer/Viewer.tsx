import React, { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls>();
  const { id } = useParams();

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/3d-data/${id}/object`);
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };

    const loadModel = async () => {
      try {
        const data = await fetchData();
        const loader = new GLTFLoader();
        const gltf = await loader.parseAsync(data, "");
        scene.add(gltf.scene);
      } catch (error) {
        console.error("Error loading model:", error);
      }
    };

    // Create a new Three.js scene
    const scene = new THREE.Scene();

    if (!mountRef.current) {
      return;
    }

    // Create a new Three.js camera
    const camera = new THREE.PerspectiveCamera(
      90,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(1, 2, 5);

    // Create a new Three.js renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    // Set the renderer size to the size of the container element
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);

    // Create a new Three.js ambient light
    const ambientLight = new THREE.AmbientLight(0xf55fff, 0.5);
    scene.add(ambientLight);

    // Create a new Three.js directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 0);
    scene.add(directionalLight);

    // Add the renderer to the container element
    mountRef.current.appendChild(renderer.domElement);

    // Load the model
    loadModel();

    // Create an animation loop using requestAnimationFrame
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the model
      const mesh = scene.getObjectByName("gltfModel");
      if (mesh) {
        mesh.rotation.y += 0.01;
      }

      // Render the scene
      renderer.render(scene, camera);
    };

    // Start the animation loop
    animate();

    // Resize the renderer when the window is resized
    const handleWindowResize = () => {
      if (mountRef.current) {
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    // Add the orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.rotateSpeed = 0.5;
    controlsRef.current = controls;

    // Clean up function to remove event listeners and controls
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      controlsRef.current?.dispose();
    };
  }, [id]);

  // Function to handle zooming with the mouse wheel
  const handleMouseWheel: React.WheelEventHandler<HTMLDivElement> = (event) => {
    if (controlsRef.current) {
      event.preventDefault();
      controlsRef.current.zoomO += event.deltaY * 0.01;
      controlsRef.current.minDistance = 1;
      controlsRef.current.maxDistance = 10;
      controlsRef.current.update();
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div ref={mountRef} onWheel={handleMouseWheel} className="h-screen"></div>
    </Suspense>
  );
};
