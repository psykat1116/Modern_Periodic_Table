import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const CaesiumAtom = ({ theme, containerSize }: { theme: string, containerSize: { width: number, height: number } }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerSize.width / containerSize.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(containerSize.width, containerSize.height);
    containerRef?.current?.appendChild(renderer.domElement);

    // Caesium atom model
    const nucleusGeometry = new THREE.SphereGeometry(1, 32, 32);
    const nucleusMaterial = new THREE.MeshBasicMaterial({ color: theme === "dark" ? 0x333333 : 0xffffff });
    const caesiumNucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    scene.add(caesiumNucleus);

    // Create electrons for caesium
    const electrons: THREE.Mesh[] = [];
    const electronMaterial = new THREE.MeshBasicMaterial({ color: theme === "dark" ? 0x0000ff : 0xff0000 });

    for (let i = 0; i < 2; i++) {
      electrons.push(createElectron(electronMaterial, 2, i + 1));
    }

    for (let i = 0; i < 8; i++) {
      electrons.push(createElectron(electronMaterial, 4, i + 1));
    }

    for (let i = 0; i < 18; i++) {
      electrons.push(createElectron(electronMaterial, 6, i + 1));
    }

    for (let i = 0; i < 18; i++) {
      electrons.push(createElectron(electronMaterial, 8, i + 1));
    }

    for (let i = 0; i < 8; i++) {
      electrons.push(createElectron(electronMaterial, 10, i + 1));
    }

    electrons.push(createElectron(electronMaterial, 12, 1)); // One electron in the 6th orbit

    // Add electrons to the scene
    scene.add(...electrons);

    // Create electron orbits
    const orbitRadius1 = 3;
    const orbitRadius2 = 6;
    const orbitRadius3 = 9;
    const orbitRadius4 = 12;
    const orbitRadius5 = 15;
    const orbitRadius6 = 18; // New orbit for Caesium
    const orbitSegments = 64;

    const orbitGeometry1 = new THREE.CircleGeometry(orbitRadius1, orbitSegments);
    const orbitGeometry2 = new THREE.CircleGeometry(orbitRadius2, orbitSegments);
    const orbitGeometry3 = new THREE.CircleGeometry(orbitRadius3, orbitSegments);
    const orbitGeometry4 = new THREE.CircleGeometry(orbitRadius4, orbitSegments);
    const orbitGeometry5 = new THREE.CircleGeometry(orbitRadius5, orbitSegments);
    const orbitGeometry6 = new THREE.CircleGeometry(orbitRadius6, orbitSegments); // New orbit for Caesium

    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

    const electronOrbit1 = new THREE.LineSegments(new THREE.EdgesGeometry(orbitGeometry1), orbitMaterial);
    const electronOrbit2 = new THREE.LineSegments(new THREE.EdgesGeometry(orbitGeometry2), orbitMaterial);
    const electronOrbit3 = new THREE.LineSegments(new THREE.EdgesGeometry(orbitGeometry3), orbitMaterial);
    const electronOrbit4 = new THREE.LineSegments(new THREE.EdgesGeometry(orbitGeometry4), orbitMaterial);
    const electronOrbit5 = new THREE.LineSegments(new THREE.EdgesGeometry(orbitGeometry5), orbitMaterial);
    const electronOrbit6 = new THREE.LineSegments(new THREE.EdgesGeometry(orbitGeometry6), orbitMaterial); // New orbit for Caesium

    scene.add(electronOrbit1, electronOrbit2, electronOrbit3, electronOrbit4, electronOrbit5, electronOrbit6); // Include the new orbit for Caesium

    // Position camera
    camera.position.z = 20;

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    // Animation
    let angle1 = 0;
    let angle2 = 0;
    let angle3 = 0;
    let angle4 = 0;
    let angle5 = 0.5;
    let angle6 = 0.25; // Initial angle for the sixth orbit

    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the caesium nucleus
      caesiumNucleus.rotation.x += 0.01;
      caesiumNucleus.rotation.y += 0.01;

      // Move the electrons in orbits
      for (let i = 0; i < 2; i++) {
        electrons[i].position.x = orbitRadius1 * Math.cos(angle1 + i * (2 * Math.PI / 2));
        electrons[i].position.y = orbitRadius1 * Math.sin(angle1 + i * (2 * Math.PI / 2));
      }

      for (let i = 2; i < 10; i++) {
        electrons[i].position.x = orbitRadius2 * Math.cos(angle2 + (i - 2) * (2 * Math.PI / 8));
        electrons[i].position.y = orbitRadius2 * Math.sin(angle2 + (i - 2) * (2 * Math.PI / 8));
      }

      for (let i = 10; i < 28; i++) {
        electrons[i].position.x = orbitRadius3 * Math.cos(angle3 + (i - 10) * (2 * Math.PI / 18));
        electrons[i].position.y = orbitRadius3 * Math.sin(angle3 + (i - 10) * (2 * Math.PI / 18));
      }

      for (let i = 28; i < 46; i++) {
        electrons[i].position.x = orbitRadius4 * Math.cos(angle4 + (i - 28) * (2 * Math.PI / 18));
        electrons[i].position.y = orbitRadius4 * Math.sin(angle4 + (i - 28) * (2 * Math.PI / 18));
      }

      for (let i = 46; i < 54; i++) {
        electrons[i].position.x = orbitRadius5 * Math.cos(angle5 + (i - 46) * (2 * Math.PI / 8));
        electrons[i].position.y = orbitRadius5 * Math.sin(angle5 + (i - 46) * (2 * Math.PI / 8));
      }

      electrons[54].position.x = orbitRadius6 * Math.cos(angle6);
      electrons[54].position.y = orbitRadius6 * Math.sin(angle6);

      angle1 += 0.02;
      angle2 += 0.02;
      angle3 += 0.02;
      angle4 += 0.02;
      angle5 += 0.02;
      angle6 += 0.02;

      // Update controls
      controls.update();

      renderer.render(scene, camera);
    };

    // Handle window resize
    window.addEventListener("resize", () => {
      const newWidth = containerSize.width;
      const newHeight = containerSize.height;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });

    // Start animation
    animate();

    // Function to create an electron
    function createElectron(material: THREE.Material, radius: number, distance: number, orbit: number): THREE.Mesh {
      const electronGeometry = new THREE.SphereGeometry(0.2, 16, 16);
      const electron = new THREE.Mesh(electronGeometry, material);

      return electron;
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", () => {});
      containerRef?.current?.removeChild(renderer.domElement);
    };
  }, [theme]);

  return (
    <motion.div
      className={`flex justify-center flex-col items-center shadow-md w-full h-[66vh] rounded-sm p-5 bg-opacity-60 backdrop-blur-require`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      <div ref={containerRef} className="w-full h-full flex justify-center items-center max-[1200px]:scale-[0.70] max-sm:scale-[0.60] scale-95 max-sm:h-[500px]" />
    </motion.div>
  );
};

export default CaesiumAtom;