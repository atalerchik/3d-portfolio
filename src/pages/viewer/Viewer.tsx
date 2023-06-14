import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

export const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls>();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [t, i18n] = useTranslation();

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
        setIsLoading(true);
        const data = await fetchData();
        const loader = new GLTFLoader();
        const gltf = await loader.parseAsync(data, "");

        scene.add(gltf.scene);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading model:", error);
      }
    };

    const scene = new THREE.Scene();

    if (!mountRef.current) {
      return;
    }

    const camera = new THREE.PerspectiveCamera(
      90,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(1, 2, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);

    const ambientLight = new THREE.AmbientLight(0xf55fff, 1.5);
    renderer.outputEncoding = THREE.sRGBEncoding;
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(1, 1, 0);
    scene.add(directionalLight);

    mountRef.current.appendChild(renderer.domElement);

    loadModel();

    const animate = () => {
      requestAnimationFrame(animate);

      const mesh = scene.getObjectByName("gltfModel");
      if (mesh) {
        mesh.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleWindowResize = () => {
      if (mountRef.current) {
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.rotateSpeed = 0.5;
    controlsRef.current = controls;

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      controlsRef.current?.dispose();
    };
  }, [id]);

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
    <div ref={mountRef} onWheel={handleMouseWheel} className="h-screen">
      {isLoading && <div className="loading absolute top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black opacity-50">{t("loading")}</div>}
    </div>
  );
};
