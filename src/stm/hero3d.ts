// Hero 3D: villa complex fly-through, driven by page scroll.
// Lazy-imports three.js (client-only). Falls back silently to the hero video.
import villaGlb from "@/assets/villa-complex.glb.asset.json";

let started = false;

export function initHero3d() {
  if (started) return;
  started = true;

  const canvas = document.getElementById("hero3dCanvas") as HTMLCanvasElement | null;
  const hero = document.querySelector(".hero") as HTMLElement | null;
  const video = document.querySelector(".hero-video") as HTMLVideoElement | null;
  if (!canvas || !hero) return;

  Promise.all([
    import("three"),
    import("three/examples/jsm/loaders/GLTFLoader.js"),
  ])
    .then(async ([THREE, { GLTFLoader }]) => {
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x0e1a1e, 0.0012);

      const camera = new THREE.PerspectiveCamera(55, 1, 0.5, 6000);

      const hemi = new THREE.HemisphereLight(0xcfe3ea, 0x2c2a22, 1.15);
      scene.add(hemi);
      const sun = new THREE.DirectionalLight(0xfff1da, 2.4);
      sun.position.set(-900, 1100, 700);
      scene.add(sun);
      const fill = new THREE.DirectionalLight(0x8fb6c6, 0.55);
      fill.position.set(700, 350, -600);
      scene.add(fill);

      const gltf = await new GLTFLoader().loadAsync(villaGlb.url);
      const model = gltf.scene;
      scene.add(model);

      // Normalize: put the complex on the ground plane, centered at origin.
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const scale = 900 / Math.max(size.x, size.y, size.z);
      model.scale.setScalar(scale);
      model.position.set(-center.x * scale, -box.min.y * scale, -center.z * scale);
      scene.updateMatrixWorld(true);

      const b2 = new THREE.Box3().setFromObject(model);
      const c = b2.getCenter(new THREE.Vector3());
      const r = Math.max(b2.getSize(new THREE.Vector3()).length() * 0.5, 120);

      // Camera path: aerial establishing shot -> descending approach to terraces.
      const p0 = new THREE.Vector3(c.x + r * 2.5, r * 2.0, c.z + r * 3.0);
      const p1 = new THREE.Vector3(c.x + r * 0.55, r * 0.5, c.z + r * 1.05);
      const t0 = c.clone();
      const t1 = c.clone().add(new THREE.Vector3(0, -r * 0.28, 0));

      let progress = 0; // raw scroll progress
      let eased = 0; // smoothed value the camera actually uses
      let heroVisible = true;
      let ready = false;

      function updateProgress() {
        const hr = hero.getBoundingClientRect();
        const total = Math.max(hr.height, 1);
        progress = Math.min(1, Math.max(0, -hr.top / (total * 0.9)));
        heroVisible = hr.bottom > -80;
      }

      function resize() {
        const w = hero.clientWidth;
        const h = hero.clientHeight;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }
      resize();
      window.addEventListener("resize", resize);
      window.addEventListener("scroll", updateProgress, { passive: true });
      updateProgress();

      const pos = p0.clone();
      const look = t0.clone();

      function frame() {
        requestAnimationFrame(frame);
        if (!heroVisible && ready) return;
        eased += (progress - eased) * 0.06;
        const e = eased * eased * (3 - 2 * eased); // smoothstep
        pos.lerpVectors(p0, p1, e);
        look.lerpVectors(t0, t1, e);
        camera.position.copy(pos);
        camera.lookAt(look);
        renderer.render(scene, camera);
        if (!ready) {
          ready = true;
          canvas.classList.add("ready");
          if (video) video.classList.add("hero-video-hidden");
        }
      }
      frame();
    })
    .catch((err) => {
      console.warn("hero3d: fallback to video", err);
    });
}
