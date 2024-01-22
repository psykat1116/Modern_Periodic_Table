import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const HeliumAtom = ({ theme, containerSize }) => {
  const containerRef = useRef();

  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerSize.width / containerSize.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(containerSize.width, containerSize.height);
    containerRef?.current?.appendChild(renderer.domElement);

    // Helium atom model
    const nucleusGeometry = new THREE.SphereGeometry(1, 32, 32); // Larger nucleus for helium
    const nucleusMaterial = new THREE.MeshBasicMaterial({ color: theme === "dark" ? 0x333333 : 0xffffff });
    const heliumNucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    scene.add(heliumNucleus);

    // Create electrons
    const electrons = [];
    const electronMaterial = new THREE.MeshBasicMaterial({ color: theme === "dark" ? 0x0000ff : 0xff0000 });

    for (let i = 0; i < 2; i++) { // Helium has 2 electrons
      electrons.push(createElectron(electronMaterial, i + 1));
    }

    // Add electrons to the scene
    scene.add(...electrons);

    // Create electron orbits (optional)
    const orbitRadius = 2;
    const orbitSegments = 64;
    const orbitGeometry = new THREE.CircleGeometry(orbitRadius, orbitSegments);
    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const electronOrbits = [];

    for (let i = 0; i < 2; i++) {
      const electronOrbit = new THREE.LineSegments(new THREE.EdgesGeometry(orbitGeometry), orbitMaterial);
      electronOrbits.push(electronOrbit);
      scene.add(electronOrbit);
    }

    // Position camera
    camera.position.z = 5;

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    // Animation
    let angle = 0;
    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the helium nucleus
      heliumNucleus.rotation.x += 0.01;
      heliumNucleus.rotation.y += 0.01;

      // Move the electrons in orbits
      electrons.forEach((electron, index) => {
        const radius = 2;
        electron.position.x = radius * Math.cos(angle + index * Math.PI); // Distribute electrons on opposite sides
        electron.position.y = radius * Math.sin(angle + index * Math.PI);
      });

      angle += 0.02;

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

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", () => {});
      containerRef?.current?.removeChild(renderer.domElement);
    };
  }, [theme]);

  // Function to create an electron
  function createElectron(material, distance) {
    const electronGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const electron = new THREE.Mesh(electronGeometry, material);

    return electron;
  }

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

export default HeliumAtom;
