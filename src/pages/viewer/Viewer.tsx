import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls>();

  useEffect(() => {
    if (mountRef.current) {
      // Create a new Three.js scene
      const scene = new THREE.Scene();

      // Create a new Three.js camera
      const camera = new THREE.PerspectiveCamera(
        90,
        mountRef.current.clientWidth / mountRef.current.clientHeight,
        0.1,
        1000,
      );
      camera.position.set(0, 0, 5);

      // Create a new Three.js renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true });

      // Set the renderer size to the size of the container element
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);

      // Add the renderer to the container element
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      // Create a new Three.js ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      // Create a new Three.js directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(1, 1, 0);
      scene.add(directionalLight);

      // Load the glb file using the GLTFLoader
      const loader = new GLTFLoader();
      loader.load(
        "model.glb",
        (gltf) => {
          // Add the gltf model to the scene
          scene.add(gltf.scene);
        },
        (xhr) => {
          // Log the progress of the load
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (error) => {
          // Log any errors that occur during the load
          console.error("Error loading glb file", error);
        },
      );

      // Create an animation loop using requestAnimationFrame
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate the model
        if (scene.children.length > 1 && scene.children[1] instanceof THREE.Mesh) {
          scene.children[1].rotation.y += 0.01;
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
      controls.rotateSpeed = 1;
      // Set the controlsRef to the controls object
      controlsRef.current = controls;

      // Clean up function to remove event listeners and controls
      return () => {
        window.removeEventListener("resize", handleWindowResize);
        controlsRef.current?.dispose();
      };
    }
  }, []);

  // Function to handle zooming with the mouse wheel
  const handleMouseWheel: React.WheelEventHandler<HTMLDivElement> = (event) => {
    if (controlsRef.current) {
      event.preventDefault();
      controlsRef.current.zoomO += event.deltaY * 0.01;
      controlsRef.current.update();
    }
  };

  return <div ref={mountRef} onWheel={handleMouseWheel} className="h-screen"></div>;
};
