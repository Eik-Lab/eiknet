"use client";

import { useEffect, useRef, useState } from "react";
import type * as THREE from "three";

export type CadFormat = "stl" | "glb" | "gltf";

interface CadViewerProps {
  src: string;
  /** Filnavn eller tittel som vises over 3D-visningen. */
  navn: string;
  format: CadFormat;
  className?: string;
}

const MODELL_FARGE = 0x55bcab; // eik-30 – nøytral for materialløse STL-filer

async function lastMotor() {
  const THREE = await import("three");
  return THREE;
}

async function lastGeometri(
  THREE: typeof import("three"),
  format: CadFormat,
  src: string
): Promise<THREE.Object3D> {
  if (format === "stl") {
    const { STLLoader } = await import(
      "three/examples/jsm/loaders/STLLoader.js"
    );
    const geometry = await new STLLoader().loadAsync(src);
    geometry.computeVertexNormals();
    const material = new THREE.MeshStandardMaterial({
      color: MODELL_FARGE,
      metalness: 0.15,
      roughness: 0.55,
    });
    return new THREE.Mesh(geometry, material);
  }

  const { GLTFLoader } = await import(
    "three/examples/jsm/loaders/GLTFLoader.js"
  );
  const gltf = await new GLTFLoader().loadAsync(src);
  return gltf.scene;
}

export function CadViewer({ src, navn, format, className }: CadViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visModell, setVisModell] = useState(false);
  const [status, setStatus] = useState<"laster" | "klar" | "feil">("laster");

  useEffect(() => {
    if (!visModell) return;
    const container = containerRef.current;
    if (!container) return;

    let avbrutt = false;
    let renderer: THREE.WebGLRenderer | undefined;
    let animasjonsId: number | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let controls: { dispose: () => void; update: () => void } | undefined;

    async function init() {
      try {
        const THREE = await lastMotor();
        const { OrbitControls } = await import(
          "three/examples/jsm/controls/OrbitControls.js"
        );
        if (avbrutt || !container) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          40,
          container.clientWidth / container.clientHeight,
          0.01,
          10000
        );

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        container.appendChild(renderer.domElement);

        scene.add(new THREE.HemisphereLight(0xffffff, 0x3d4a46, 1.5));
        const retningslys = new THREE.DirectionalLight(0xffffff, 2);
        retningslys.position.set(3, 5, 4);
        scene.add(retningslys);

        const objekt = await lastGeometri(THREE, format, src);
        if (avbrutt) return;
        scene.add(objekt);

        const boks = new THREE.Box3().setFromObject(objekt);
        const senter = boks.getCenter(new THREE.Vector3());
        const storrelse = boks.getSize(new THREE.Vector3());
        const maksDimensjon = Math.max(storrelse.x, storrelse.y, storrelse.z, 1e-6);
        objekt.position.sub(senter);

        const avstand = maksDimensjon / (2 * Math.tan((Math.PI * camera.fov) / 360));
        camera.position.set(avstand * 0.9, avstand * 0.6, avstand * 1.3);
        camera.near = avstand / 100;
        camera.far = avstand * 100;
        camera.updateProjectionMatrix();

        const orbit = new OrbitControls(camera, renderer.domElement);
        orbit.enableDamping = true;
        orbit.autoRotate = true;
        orbit.autoRotateSpeed = 1.2;
        orbit.addEventListener("start", () => {
          orbit.autoRotate = false;
        });
        controls = orbit;

        function tegn() {
          animasjonsId = requestAnimationFrame(tegn);
          orbit.update();
          if (renderer) renderer.render(scene, camera);
        }
        tegn();

        resizeObserver = new ResizeObserver(() => {
          if (!container || !renderer) return;
          const { clientWidth, clientHeight } = container;
          if (clientWidth === 0 || clientHeight === 0) return;
          camera.aspect = clientWidth / clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(clientWidth, clientHeight);
        });
        resizeObserver.observe(container);

        setStatus("klar");
      } catch (feil) {
        console.error("Kunne ikke laste CAD-modell:", feil);
        if (!avbrutt) setStatus("feil");
      }
    }

    void init();

    return () => {
      avbrutt = true;
      if (animasjonsId) cancelAnimationFrame(animasjonsId);
      resizeObserver?.disconnect();
      controls?.dispose();
      if (renderer) {
        renderer.dispose();
        renderer.domElement.remove();
      }
    };
  }, [visModell, src, format]);

  return (
    <div className={`relative overflow-hidden bg-storm-10 ${className ?? ""}`}>
      {visModell ? (
        <>
          <div ref={containerRef} className="h-full w-full touch-none" />
          {status === "laster" && (
            <p className="tag-s-bold pointer-events-none absolute inset-0 flex items-center justify-center text-storm-50">
              Laster {navn} …
            </p>
          )}
          {status === "feil" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <p className="tag-s-bold text-storm-50">
                Kunne ikke laste 3D-modellen.
              </p>
              <a
                href={src}
                download
                className="tag-s-bold text-black underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-60"
              >
                Last ned filen i stedet &rarr;
              </a>
            </div>
          )}
        </>
      ) : (
        <button
          type="button"
          onClick={() => setVisModell(true)}
          className="group flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center"
          aria-label={`Vis 3D-modell: ${navn}`}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-eik-60/10 transition-colors group-hover:bg-eik-60/20">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-none stroke-eik-60"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2 3 7v10l9 5 9-5V7l-9-5Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7l9 5 9-5M12 12v10"
              />
            </svg>
          </span>
          <span className="tag-s-bold text-black transition-colors group-hover:text-eik-60">
            Vis 3D-modell
          </span>
          <span className="text-xs text-storm-50">{navn}</span>
        </button>
      )}
    </div>
  );
}
