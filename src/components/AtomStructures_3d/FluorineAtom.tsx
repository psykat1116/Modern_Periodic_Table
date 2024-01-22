import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const FluorineAtom = ({ theme, containerSize }) => {
  const containerRef = useRef();

  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerSize.width / containerSize.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(containerSize.width, containerSize.height);
    containerRef?.current?.appendChild(renderer.domElement);

    // Fluorine atom model
    const nucleusGeometry = new THREE.SphereGeometry(1, 32, 32);
    const nucleusMaterial = new THREE.MeshBasicMaterial({ color: theme === "dark" ? 0x333333 : 0xffffff });
    const fluorineNucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    scene.add(fluorineNucleus);

    // Create electrons for fluorine (2 electrons in the first orbit, 7 electrons in the second orbit)
    const electrons = [];
    const electronMaterial = new THREE.MeshBasicMaterial({ color: theme === "dark" ? 0x0000ff : 0xff0000 });

    for (let i = 0; i < 2; i++) {
      electrons.push(createElectron(electronMaterial, 2, i + 1));
    }

    for (let i = 0; i < 7; i++) {
      electrons.push(createElectron(electronMaterial, 4, i + 1));
    }

    // Add electrons to the scene
    scene.add(...electrons);

    // Create electron orbits
    const orbitRadius1 = 3;
    const orbitRadius2 = 6;
    const orbitSegments = 64;

    const orbitGeometry1 = new THREE.CircleGeometry(orbitRadius1, orbitSegments);
    const orbitGeometry2 = new THREE.CircleGeometry(orbitRadius2, orbitSegments);

    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

    const electronOrbit1 = new THREE.LineSegments(new THREE.EdgesGeometry(orbitGeometry1), orbitMaterial);
    const electronOrbit2 = new THREE.LineSegments(new THREE.EdgesGeometry(orbitGeometry2), orbitMaterial);

    scene.add(electronOrbit1, electronOrbit2);

    // Position camera
    camera.position.z = 10;

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    // Animation
    let angle1 = 0;
    let angle2 = 0.5; // Initial angle for the second orbit

    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the fluorine nucleus
      fluorineNucleus.rotation.x += 0.01;
      fluorineNucleus.rotation.y += 0.01;

      // Move the electrons in orbits
      electrons[0].position.x = orbitRadius1 * Math.cos(angle1);
      electrons[0].position.y = orbitRadius1 * Math.sin(angle1);

      electrons[1].position.x = orbitRadius1 * Math.cos(angle1 + Math.PI);
      electrons[1].position.y = orbitRadius1 * Math.sin(angle1 + Math.PI);

      for (let i = 0; i < 7; i++) {
        electrons[i + 2].position.x = orbitRadius2 * Math.cos(angle2 + (i * (2 * Math.PI) / 7));
        electrons[i + 2].position.y = orbitRadius2 * Math.sin(angle2 + (i * (2 * Math.PI) / 7));
      }

      angle1 += 0.02;
      angle2 += 0.02;

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

export default FluorineAtom;