'use client';
import React, { useEffect, useRef } from 'react';

class Particle {
  lifeSpan: number;
  initialLifeSpan: number;
  velocity: { x: number; y: number };
  position: { x: number; y: number };
  baseDimension: number;

  constructor(x: number, y: number) {
    this.initialLifeSpan = Math.floor(Math.random() * 60 + 60);
    this.lifeSpan = this.initialLifeSpan;
    this.velocity = {
      x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 10),
      y: -0.4 + Math.random() * -1,
    };
    this.position = { x, y };
    this.baseDimension = 4;
  }

  update(context: CanvasRenderingContext2D) {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75;
    this.velocity.y -= Math.random() / 600;
    this.lifeSpan--;

    const scale =
      0.2 + (this.initialLifeSpan - this.lifeSpan) / this.initialLifeSpan;

    context.fillStyle = '#e6f1f7';
    context.strokeStyle = '#3a92c5';
    context.beginPath();
    context.arc(
      this.position.x - (this.baseDimension / 2) * scale,
      this.position.y - this.baseDimension / 2,
      this.baseDimension * scale,
      0,
      2 * Math.PI
    );
    context.stroke();
    context.fill();
    context.closePath();
  }
}

type BubbleCursorProps = {
  wrapperElement?: HTMLElement | null;
};

const BubbleCursor: React.FC<BubbleCursorProps> = ({ wrapperElement = null }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const cursorRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );
    let canvas: HTMLCanvasElement | null = null;
    let ctx: CanvasRenderingContext2D | null = null;
    let dpr = window.devicePixelRatio || 1;

    if (prefersReducedMotion.matches) return;

    canvas = canvasRef.current!;
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.style.position = wrapperElement ? 'absolute' : 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';

    const setSize = () => {
      dpr = window.devicePixelRatio || 1;
      const c = canvasRef.current;
      if (!c) return;

      if (wrapperElement) {
        const w = wrapperElement.clientWidth;
        const h = wrapperElement.clientHeight;
        c.width = Math.round(w * dpr);
        c.height = Math.round(h * dpr);
        c.style.width = `${w}px`;
        c.style.height = `${h}px`;
      } else {
        const w = window.innerWidth;
        const h = window.innerHeight;
        c.width = Math.round(w * dpr);
        c.height = Math.round(h * dpr);
        c.style.width = `${w}px`;
        c.style.height = `${h}px`;
      }

      ctx = c.getContext('2d');
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setSize();

    if (wrapperElement) {
      if (!wrapperElement.contains(canvas)) wrapperElement.appendChild(canvas);
    } else {
      if (!document.body.contains(canvas)) document.body.appendChild(canvas);
    }

    const addParticle = (x: number, y: number) => {
      particlesRef.current.push(new Particle(x, y));
    };

    const onMouseMove = (e: MouseEvent) => {
      if (wrapperElement) {
        const rect = wrapperElement.getBoundingClientRect();
        cursorRef.current.x = e.clientX - rect.left;
        cursorRef.current.y = e.clientY - rect.top;
      } else {
        cursorRef.current.x = e.clientX;
        cursorRef.current.y = e.clientY;
      }
      addParticle(cursorRef.current.x, cursorRef.current.y);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        for (let i = 0; i < e.touches.length; i++) {
          addParticle(e.touches[i].clientX, e.touches[i].clientY);
        }
      }
    };

    const onResize = () => {
      setSize();
    };

    const updateParticles = () => {
      if (!canvas || !ctx) return;

      if (particlesRef.current.length === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesRef.current.length; i++) {
        particlesRef.current[i].update(ctx);
      }

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        if (particlesRef.current[i].lifeSpan < 0) {
          particlesRef.current.splice(i, 1);
        }
      }
    };

    const loop = () => {
      updateParticles();
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    const element = wrapperElement || document.body;
    element.addEventListener('mousemove', onMouseMove);
    element.addEventListener('touchmove', onTouchMove, { passive: true });
    element.addEventListener('touchstart', onTouchMove, { passive: true });
    window.addEventListener('resize', onResize);

    loop();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (canvas && canvas.parentElement) canvas.parentElement.removeChild(canvas);
      const el = wrapperElement || document.body;
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchstart', onTouchMove);
      window.removeEventListener('resize', onResize);
    };
  }, [wrapperElement]);

  return <canvas ref={canvasRef} />;
};

export default BubbleCursor;