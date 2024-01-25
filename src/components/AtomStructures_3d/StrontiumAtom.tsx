import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const StrontiumAtom = ({ theme, containerSize }: { theme: string, containerSize: { width: number, height: number } }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerSize.width / containerSize.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(containerSize.width, containerSize.height);
    containerRef?.current?.appendChild(renderer.domElement);

    // Strontium atom model
    const nucleusGeometry = new THREE.SphereGeometry(1, 32, 32);
    const nucleusMaterial = new THREE.MeshBasicMaterial({ color: theme === "dark" ? 0x333333 : 0xffffff });
    const strontiumNucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    scene.add(strontiumNucleus);

    // Create electrons for strontium (2 in the first orbit, 8 in the second orbit, 18 in the third orbit, 8 in the fourth orbit, 2 in the fifth orbit)
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

    for (let i = 0; i < 8; i++) {
      electrons.push(createElectron(electronMaterial, 8, i + 1));
    }

    for (let i = 0; i < 2; i++) {
      electrons.push(createElectron(electronMaterial, 10, i + 1));
    }

    // Add electrons to the scene
    scene.add(...electrons);

    // Create electron orbits
    const orbitRadius1 = 3;
    const orbitRadius2 = 6;
    const orbitRadius3 = 9;
    const orbitRadius4 = 12;
    const orbitRadius5 = 15;
    const orbitSegments = 64;

    const orbitGeometry1 = new THREE.CircleGeometry(orbitRadius1, orbitSegments);
    const orbitGeometry2 = new THREE.CircleGeometry(orbitRadius2, orbitSegments);
    const orbitGeometry3 = new THREE.CircleGeometry(orbitRadius3, orbitSegments);
    const orbitGeometry4 = new THREE.CircleGeometry(orbitRadius4, orbitSegments);
    const orbitGeometry5 = new THREE.CircleGeometry(orbitRadius5, orbitSegments);

    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

    const electronOrbit1 = new THREE.LineSegments(new THREE.EdgesGeometry(orbitGeometry1), orbitMaterial);
    const electronOrbit2 = new THREE.LineSegments(new THREE.EdgesGeometry(orbitGeometry2), orbitMaterial);
    const electronOrbit3 = new THREE.LineSegments(new THREE.EdgesGeometry(orbitGeometry3), orbitMaterial);
    const electronOrbit4 = new THREE.LineSegments(new THREE.EdgesGeometry(orbitGeometry4), orbitMaterial);
    const electronOrbit5 = new THREE.LineSegments(new THREE.EdgesGeometry(orbitGeometry5), orbitMaterial);

    scene.add(electronOrbit1, electronOrbit2, electronOrbit3, electronOrbit4, electronOrbit5);

    // Position camera
    camera.position.z = 20;

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    // Animation
    let angles = [0, 0, 0, 0, 0.5]; // Initial angles for each orbit

    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the strontium nucleus
      strontiumNucleus.rotation.x += 0.01;
      strontiumNucleus.rotation.y += 0.01;

      // Move the electrons in orbits
      for (let orbit = 0; orbit < 5; orbit++) {
        for (let i = 0; i < getElectronCount(orbit); i++) {
          const electronIndex = getElectronIndex(orbit, i);
          electrons[electronIndex].position.x = getOrbitRadius(orbit) * Math.cos(angles[orbit] + i * (2 * Math.PI / getElectronCount(orbit)));
          electrons[electronIndex].position.y = getOrbitRadius(orbit) * Math.sin(angles[orbit] + i * (2 * Math.PI / getElectronCount(orbit)));
        }
        angles[orbit] += 0.02;
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
    function createElectron(material: THREE.Material, radius: number, distance: number, orbit: number): THREE.Mesh {
      const electronGeometry = new THREE.SphereGeometry(0.2, 16, 16);
      const electron = new THREE.Mesh(electronGeometry, material);

      return electron;
    }

    // Function to get the electron count for each orbit
    function getElectronCount(orbit) {
      return [2, 8, 18, 8, 2][orbit];
    }

    // Function to get the electron index in the electrons array for each orbit and electron
    function getElectronIndex(orbit, electron) {
      let index = 0;
      for (let i = 0; i < orbit; i++) {
        index += getElectronCount(i);
      }
      return index + electron;
    }

    // Function to get the orbit radius for each orbit
    function getOrbitRadius(orbit) {
      return [orbitRadius1, orbitRadius2, orbitRadius3, orbitRadius4, orbitRadius5][orbit];
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

export default StrontiumAtom;