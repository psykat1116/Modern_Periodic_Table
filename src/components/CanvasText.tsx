"use client";
import { ElementRef, useEffect, useRef } from "react";

import { mouse } from "@/lib/TextParticle";
import { TextParticle } from "@/lib/TextParticle";

interface CanvasTextProps {
  text?: string;
  size?: string;
  height?: number;
  width?: number;
}

const CanvasText = ({
  text = "404",
  size = "30px",
  height = 230,
  width = 580,
}: CanvasTextProps) => {
  const canvasRef = useRef<ElementRef<"canvas">>(null);
  let particlesArray: any[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.font = `${size} Poppins`;
      ctx.fillText(text, 1, 23);
      const letter = ctx.getImageData(0, 0, 100, 100);
      canvas.width = width;
      canvas.height = height;

      const init = () => {
        particlesArray = [];
        for (let y = 0, y1 = letter.height; y < y1; y++) {
          for (let x = 0, x1 = letter.width; x < x1; x++) {
            if (letter.data[y * 4 * letter.width + x * 4 + 3] > 1) {
              let positionX = x;
              let positionY = y;
              particlesArray.push(
                new TextParticle(positionX * 10, positionY * 10)
              );
            }
          }
        }
      };

      init();

      const animate = () => {
        if (canvas && ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].draw(ctx);
            particlesArray[i].update(mouse, canvas);
          }
          requestAnimationFrame(animate);
        }
      };

      animate();
    }
  }, [canvasRef]);

  return <canvas ref={canvasRef} />;
};

export default CanvasText;
