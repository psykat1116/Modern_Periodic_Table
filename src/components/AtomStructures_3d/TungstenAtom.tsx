import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const TungstenAtom = ({ theme, containerSize }) => {
  const containerRef = useRef();

  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerSize.width / containerSize.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(containerSize.width, containerSize.height);
    containerRef?.current?.appendChild(renderer.domElement);

    // Tungsten atom model
    const nucleusGeometry = new THREE.SphereGeometry(1, 32, 32);
    const nucleusMaterial = new THREE.MeshBasicMaterial({ color: theme === "dark" ? 0x333333 : 0xffffff });
    const tungstenNucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    scene.add(tungstenNucleus);

    // Create electrons for tungsten
    const electrons = [];
    const electronMaterial = new THREE.MeshBasicMaterial({ color: theme === "dark" ? 0x0000ff : 0xff0000 });

    // Electron distribution for Tungsten
    const electronCounts = [2, 8, 18, 32, 12, 2];
    const orbitRadii = [3, 6, 9, 12, 15, 18];
    const orbitSegments = 64;

    for (let orbit = 0; orbit < electronCounts.length; orbit++) {
      for (let i = 0; i < electronCounts[orbit]; i++) {
        electrons.push(createElectron(electronMaterial, orbitRadii[orbit], i + 1, orbit));
      }
    }

    // Add electrons to the scene
    scene.add(...electrons);

    // Create electron orbits
    const orbitMaterials = new THREE.LineBasicMaterial({ color: 0xffffff });
    const orbitGeometries = orbitRadii.map(radius => new THREE.CircleGeometry(radius, orbitSegments));
    const electronOrbits = orbitGeometries.map(geometry => new THREE.LineSegments(new THREE.EdgesGeometry(geometry), orbitMaterials));

    scene.add(...electronOrbits);

    // Position camera
    camera.position.z = 24; // Adjusted for the additional orbit

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    // Animation
    const angles = orbitRadii.map(radius => 0);

    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the tungsten nucleus
      tungstenNucleus.rotation.x += 0.01;
      tungstenNucleus.rotation.y += 0.01;

      // Move the electrons in orbits
      for (let orbit = 0; orbit < electronCounts.length; orbit++) {
        for (let i = 0; i < electronCounts[orbit]; i++) {
          electrons[i + sumArray(electronCounts.slice(0, orbit))].position.x =
            orbitRadii[orbit] * Math.cos(angles[orbit] + (i * (2 * Math.PI) / electronCounts[orbit]));
          electrons[i + sumArray(electronCounts.slice(0, orbit))].position.y =
            orbitRadii[orbit] * Math.sin(angles[orbit] + (i * (2 * Math.PI) / electronCounts[orbit]));
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
    function createElectron(material, radius, distance, orbit) {
      const electronGeometry = new THREE.SphereGeometry(0.2, 16, 16);
      const electron = new THREE.Mesh(electronGeometry, material);
      return electron;
    }

    // Function to sum array elements
    function sumArray(arr) {
      return arr.reduce((acc, val) => acc + val, 0);
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

export default TungstenAtom;