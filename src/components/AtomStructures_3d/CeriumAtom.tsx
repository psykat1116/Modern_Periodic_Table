import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CeriumAtom = ({ theme, containerSize }) => {
  const containerRef = useRef();

  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerSize.width / containerSize.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(containerSize.width, containerSize.height);
    containerRef?.current?.appendChild(renderer.domElement);

    // Cerium atom model
    const nucleusGeometry = new THREE.SphereGeometry(1, 32, 32);
    const nucleusMaterial = new THREE.MeshBasicMaterial({ color: theme === "dark" ? 0x333333 : 0xffffff });
    const ceriumNucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    scene.add(ceriumNucleus);

    // Create electrons for cerium
    const electrons = [];
    const electronMaterial = new THREE.MeshBasicMaterial({ color: theme === "dark" ? 0x0000ff : 0xff0000 });

    // Electron orbits for cerium
    const orbitRadii = [3, 6, 9, 12, 15, 18];
    const orbitElectronCounts = [2, 8, 18, 19, 9, 2];
    const orbitSegments = 64;

    for (let orbitIndex = 0; orbitIndex < orbitRadii.length; orbitIndex++) {
      for (let electronIndex = 0; electronIndex < orbitElectronCounts[orbitIndex]; electronIndex++) {
        const radius = orbitRadii[orbitIndex];
        electrons.push(createElectron(electronMaterial, radius, electronIndex + 1));
      }
    }

    // Add electrons to the scene
    scene.add(...electrons);

    // Create electron orbits
    const orbitGeometries = orbitRadii.map((radius) => new THREE.CircleGeometry(radius, orbitSegments));
    const orbitMaterials = new THREE.LineBasicMaterial({ color: 0xffffff });

    const electronOrbits = orbitGeometries.map((geometry) => new THREE.LineSegments(new THREE.EdgesGeometry(geometry), orbitMaterials));
    scene.add(...electronOrbits);

    // Position camera
    camera.position.z = 25;

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    // Animation
    let angles = orbitRadii.map(() => 0.5); // Initial angles for the orbits

    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the cerium nucleus
      ceriumNucleus.rotation.x += 0.01;
      ceriumNucleus.rotation.y += 0.01;

      // Move the electrons in orbits
      for (let orbitIndex = 0; orbitIndex < orbitRadii.length; orbitIndex++) {
        for (let electronIndex = 0; electronIndex < orbitElectronCounts[orbitIndex]; electronIndex++) {
          electrons[electronIndex + sumArray(orbitElectronCounts.slice(0, orbitIndex))].position.x =
            orbitRadii[orbitIndex] * Math.cos(angles[orbitIndex] + electronIndex * (2 * Math.PI / orbitElectronCounts[orbitIndex]));
          electrons[electronIndex + sumArray(orbitElectronCounts.slice(0, orbitIndex))].position.y =
            orbitRadii[orbitIndex] * Math.sin(angles[orbitIndex] + electronIndex * (2 * Math.PI / orbitElectronCounts[orbitIndex]));
        }
        angles[orbitIndex] += 0.02;
      }

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
    function createElectron(material, radius, distance) {
      const electronGeometry = new THREE.SphereGeometry(0.2, 16, 16);
      const electron = new THREE.Mesh(electronGeometry, material);
      return electron;
    }

    // Function to sum an array
    function sumArray(arr) {
      return arr.reduce((total, value) => total + value, 0);
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

export default CeriumAtom;