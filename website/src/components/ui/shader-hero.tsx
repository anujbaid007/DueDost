"use client";

import { useEffect, useRef, useCallback } from "react";

const vertexShader = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_time;
  uniform float u_dark;

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 mouse = u_mouse / u_resolution.xy;

    float dist = distance(st, mouse);

    // Blue and green energy field
    float wave1 = sin(st.x * 8.0 + u_time * 0.8) * cos(st.y * 6.0 + u_time * 0.6) * 0.5 + 0.5;
    float wave2 = sin(st.x * 4.0 - u_time * 0.5 + st.y * 3.0) * 0.5 + 0.5;
    float wave3 = cos(st.y * 10.0 + u_time * 1.2 + st.x * 2.0) * 0.5 + 0.5;

    // Mouse interaction - radial glow
    float mouseGlow = smoothstep(0.5, 0.0, dist) * 0.8;
    float mouseRipple = sin(dist * 30.0 - u_time * 3.0) * smoothstep(0.6, 0.0, dist) * 0.15;

    // DueDost brand colors
    vec3 blue = vec3(0.106, 0.365, 0.667);   // #1B5DAA
    vec3 green = vec3(0.231, 0.667, 0.208);   // #3BAA35
    vec3 deepBlue = vec3(0.05, 0.15, 0.35);
    vec3 darkBg = vec3(0.05, 0.06, 0.1);
    vec3 lightBg = vec3(0.95, 0.96, 0.98);

    // Mix colors based on position and time
    vec3 color1 = mix(blue, green, wave1);
    vec3 color2 = mix(deepBlue, blue, wave2);
    vec3 finalColor = mix(color2, color1, wave3 * 0.6);

    // Add mouse glow
    vec3 glowColor = mix(blue, green, sin(u_time * 0.5) * 0.5 + 0.5);
    finalColor += glowColor * mouseGlow + vec3(mouseRipple);

    // Blend with background based on theme
    vec3 bg = mix(lightBg, darkBg, u_dark);
    float alpha = 0.12 + mouseGlow * 0.15 + wave1 * 0.06;

    finalColor = mix(bg, finalColor, alpha);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export function ShaderBackground({ isDark }: { isDark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: false, antialias: false });
    if (!gl) return;

    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vs = compileShader(vertexShader, gl.VERTEX_SHADER);
    const fs = compileShader(fragmentShader, gl.FRAGMENT_SHADER);

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const resLoc = gl.getUniformLocation(program, "u_resolution");
    const mouseLoc = gl.getUniformLocation(program, "u_mouse");
    const timeLoc = gl.getUniformLocation(program, "u_time");
    const darkLoc = gl.getUniformLocation(program, "u_dark");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    const startTime = Date.now();
    const render = () => {
      const time = (Date.now() - startTime) / 1000;
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform2f(
        mouseLoc,
        mouseRef.current.x,
        canvas.height - mouseRef.current.y
      );
      gl.uniform1f(timeLoc, time);
      gl.uniform1f(darkLoc, isDark ? 1.0 : 0.0);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDark, handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
}
