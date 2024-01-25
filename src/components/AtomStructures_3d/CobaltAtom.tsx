import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const CobaltAtom = ({ theme, containerSize }: { theme: string, containerSize: { width: number, height: number } }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerSize.width / containerSize.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(containerSize.width, containerSize.height);
    containerRef?.current?.appendChild(renderer.domElement);

    // Cobalt atom model
    const nucleusGeometry = new THREE.SphereGeometry(1, 32, 32);
    const nucleusMaterial = new THREE.MeshBasicMaterial({ color: theme === "dark" ? 0x333333 : 0xffffff });
    const cobaltNucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    scene.add(cobaltNucleus);

    // Create electrons for cobalt
    const electrons: THREE.Mesh[] = [];
    const electronMaterial = new THREE.MeshBasicMaterial({ color: theme === "dark" ? 0x0000ff : 0xff0000 });

    for (let i = 0; i < 2; i++) {
      electrons.push(createElectron(electronMaterial, 2, i + 1));
    }

    for (let i = 0; i < 8; i++) {
      electrons.push(createElectron(electronMaterial, 4, i + 1));
    }

    for (let i = 0; i < 15; i++) {
      electrons.push(createElectron(electronMaterial, 6, i + 1));
    }

    for (let i = 0; i < 2; i++) {
      electrons.push(createElectron(electronMaterial, 8, i + 1));
    }

    // Add electrons to the scene
    scene.add(...electrons);

    // Create electron orbits
    const orbitRadius1 = 3;
    const orbitRadius2 = 6;
    const orbitRadius3 = 9;
    const orbitRadius4 = 12;
    const orbitSegments = 64;

    const orbitGeometry1 = new THREE.CircleGeometry(orbitRadius1, orbitSegments);
    const orbitGeometry2 = new THREE.CircleGeometry(orbitRadius2, orbitSegments);
    const orbitGeometry3 = new THREE.CircleGeometry(orbitRadius3, orbitSegments);
    const orbitGeometry4 = new THREE.CircleGeometry(orbitRadius4, orbitSegments);

    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

    const electronOrbit1 = new THREE.LineSegments(new THREE.EdgesGeometry(orbitGeometry1), orbitMaterial);
    const electronOrbit2 = new THREE.LineSegments(new THREE.EdgesGeometry(orbitGeometry2), orbitMaterial);
    const electronOrbit3 = new THREE.LineSegments(new THREE.EdgesGeometry(orbitGeometry3), orbitMaterial);
    const electronOrbit4 = new THREE.LineSegments(new THREE.EdgesGeometry(orbitGeometry4), orbitMaterial);

    scene.add(electronOrbit1, electronOrbit2, electronOrbit3, electronOrbit4);

    // Position camera
    camera.position.z = 18;

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
    let angle4 = 0.5; // Initial angle for the fourth orbit

    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the cobalt nucleus
      cobaltNucleus.rotation.x += 0.01;
      cobaltNucleus.rotation.y += 0.01;

      // Move the electrons in orbits
      for (let i = 0; i < 2; i++) {
        electrons[i].position.x = orbitRadius1 * Math.cos(angle1 + i * (2 * Math.PI / 2));
        electrons[i].position.y = orbitRadius1 * Math.sin(angle1 + i * (2 * Math.PI / 2));
      }

      for (let i = 2; i < 10; i++) {
        electrons[i].position.x = orbitRadius2 * Math.cos(angle2 + (i - 2) * (2 * Math.PI / 8));
        electrons[i].position.y = orbitRadius2 * Math.sin(angle2 + (i - 2) * (2 * Math.PI / 8));
      }

      for (let i = 10; i < 25; i++) {
        electrons[i].position.x = orbitRadius3 * Math.cos(angle3 + (i - 10) * (2 * Math.PI / 15));
        electrons[i].position.y = orbitRadius3 * Math.sin(angle3 + (i - 10) * (2 * Math.PI / 15));
      }

      for (let i = 25; i < 27; i++) {
        electrons[i].position.x = orbitRadius4 * Math.cos(angle4 + (i - 25) * (2 * Math.PI / 2));
        electrons[i].position.y = orbitRadius4 * Math.sin(angle4 + (i - 25) * (2 * Math.PI / 2));
      }

      angle1 += 0.02;
      angle2 += 0.02;
      angle3 += 0.02;
      angle4 += 0.02;

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

export default CobaltAtom;