import { ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  // Update the target cursor position
  const updatePosition = (e: MouseEvent) => {
    targetPosition.current = { x: e.clientX, y: e.clientY };
  };

  // Animate the cursor movement
  const animateCursor = useCallback(() => {
    if (cursorRef.current) {
      // Interpolate the current position towards the target position
      currentPosition.current.x +=
        (targetPosition.current.x - currentPosition.current.x) * 0.2; // 0.1 is the smoothness factor
      currentPosition.current.y +=
        (targetPosition.current.y - currentPosition.current.y) * 0.2;

      // Update the cursor position
      cursorRef.current.style.left = `${currentPosition.current.x}px`;
      cursorRef.current.style.top = `${currentPosition.current.y}px`;
    }
    animationFrameRef.current = requestAnimationFrame(animateCursor);
  }, []);

  useEffect(() => {
    // Listen for mouse movement
    document.addEventListener("mousemove", updatePosition);

    // Select all elements with the 'project-link' class
    const links = document.querySelectorAll(".project-link");

    // Add event listeners for hover state
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => setHovered(true));
      link.addEventListener("mouseleave", () => setHovered(false));
    });

    // Start the animation loop
    animationFrameRef.current = requestAnimationFrame(animateCursor);

    // Clean up event listeners
    return () => {
      document.removeEventListener("mousemove", updatePosition);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animateCursor]);

  return (
    <>
      {hovered && (
        <div
          ref={cursorRef}
          className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full">
            <ArrowUpRight className="text-white w-8 h-8" />
          </div>
        </div>
      )}
    </>
  );
};

export default CustomCursor;
