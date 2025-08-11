<template>
  <div ref="canvasContainer" class="particles-container"></div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import gsap from 'gsap'
import { onMounted, onBeforeUnmount, ref, markRaw } from 'vue'

// Типы для наших переменных
interface Uniforms {
  u_time: { value: number }
  u_gridSize: { value: number }
  u_color: { value: THREE.Color }
}

// Реактивные ссылки
const canvasContainer = ref<HTMLElement | null>(null)
const scene = ref<THREE.Scene | null>(null)
const camera = ref<THREE.PerspectiveCamera | null>(null)
const renderer = ref<THREE.WebGLRenderer | null>(null)
const particlesMesh = ref<THREE.Points | null>(null)
const animationId = ref<number | null>(null)
const uniforms = ref<Uniforms>({
  u_time: { value: 0 },
  u_gridSize: { value: 25 },
  u_color: { value: new THREE.Color() },
})

const getVibrantColor = (): THREE.Color => {
  const hue = Math.random()
  const saturation = 0.7 + Math.random() * 0.3
  const lightness = 0.5 + Math.random() * 0.4
  return new THREE.Color().setHSL(hue, saturation, lightness)
}

const initScene = () => {
  // Создаем сцену и камеру с markRaw
  scene.value = markRaw(new THREE.Scene())
  camera.value = markRaw(new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  ))
  camera.value.position.z = 15

  renderer.value = markRaw(new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
    premultipliedAlpha: false,
  }))

  renderer.value.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  renderer.value.setSize(window.innerWidth, window.innerHeight)
  renderer.value.setClearColor(0x000000, 0)

  if (canvasContainer.value) {
    canvasContainer.value.appendChild(renderer.value.domElement)
  }
}

const initParticles = () => {
  if (!scene.value) return

  const PARTICLE_COUNT = 1000
  const SPHERE_RADIUS = 15

  const particlesGeometry = new THREE.BufferGeometry()
  const posArray = new Float32Array(PARTICLE_COUNT * 3)
  const randomArray = new Float32Array(PARTICLE_COUNT * 4)

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const radius = SPHERE_RADIUS * (0.9 + Math.random() * 0.1)

    posArray[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    posArray[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    posArray[i * 3 + 2] = radius * Math.cos(phi)

    randomArray[i * 4] = Math.random() * 10.0
    randomArray[i * 4 + 1] = 0.5 + Math.random() * 2.0
    randomArray[i * 4 + 2] = Math.random() * 0.5 + 0.5
    randomArray[i * 4 + 3] = 5.0 + Math.random() * 15.0
  }

  particlesGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(posArray, 3)
  )
  particlesGeometry.setAttribute(
    'aRandom',
    new THREE.BufferAttribute(randomArray, 4)
  )

  uniforms.value.u_color.value = getVibrantColor()

  const vertexShader = `
    attribute vec4 aRandom;
    varying vec4 vRandom;
    varying vec2 vUv;

    void main() {
      vRandom = aRandom;
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = vRandom.w;
    }
  `

  const fragmentShader = `
    uniform float u_time;
    uniform vec3 u_color;
    varying vec4 vRandom;
    varying vec2 vUv;

    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    void main() {
      float delay = vRandom.x;
      float speed = vRandom.y;
      float intensity = vRandom.z;

      float flicker = sin(u_time * speed + delay) * 0.3 + 0.7;
      flicker = pow(flicker, 2.0) * intensity;

      float fadeIn = smoothstep(0.0, 3.0, u_time - delay * 0.5);

      float pulse = smoothstep(0.8, 1.0, random(vec2(delay, floor(u_time * 0.5))));
      flicker = mix(flicker, 1.0, pulse * 0.7);

      vec2 coord = gl_PointCoord - vec2(0.5);
      float distance = length(coord);
      float alpha = exp(-distance * distance * 4.0) * fadeIn;

      if (distance > 0.5) discard;

      vec3 color = u_color * flicker;
      color = clamp(color, vec3(0.3), vec3(1.0));

      gl_FragColor = vec4(color, alpha * 0.95);
    }
  `

  const particlesMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: uniforms.value,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: false,
  })

  particlesMesh.value = markRaw(new THREE.Points(particlesGeometry, particlesMaterial))
  scene.value.add(particlesMesh.value)

  gsap.to(uniforms.value.u_time, {
    value: 10,
    duration: 10,
    ease: 'none',
  })
}

const animate = () => {
  animationId.value = requestAnimationFrame(animate)

  // Обновляем uniform времени
  if (uniforms.value) {
    uniforms.value.u_time.value += 0.01
  }

  // Вращаем частицы
  if (particlesMesh.value) {
    const mesh = particlesMesh.value
    mesh.rotation.y += 0.0005
    mesh.rotation.x += 0.0003
  }

  // Меняем цвет каждые 5 секунд
  if (uniforms.value &&
    Math.floor(uniforms.value.u_time.value) % 5 === 0 &&
    uniforms.value.u_time.value % 1 < 0.02) {
    uniforms.value.u_color.value = getVibrantColor()
  }

  // Рендерим сцену
  if (scene.value && camera.value && renderer.value) {
    renderer.value.render(scene.value, camera.value)
  }
}

const handleResize = () => {
  if (camera.value && renderer.value) {
    camera.value.aspect = window.innerWidth / window.innerHeight
    camera.value.updateProjectionMatrix()
    renderer.value.setSize(window.innerWidth, window.innerHeight)
  }
}

const cleanup = () => {
  // Останавливаем анимацию
  if (animationId.value) {
    cancelAnimationFrame(animationId.value)
    animationId.value = null
  }

  // Удаляем обработчик ресайза
  window.removeEventListener('resize', handleResize)

  // Очищаем Three.js объекты
  if (particlesMesh.value && scene.value) {
    scene.value.remove(particlesMesh.value)
    particlesMesh.value.geometry.dispose()
    if (particlesMesh.value.material instanceof THREE.Material) {
      particlesMesh.value.material.dispose()
    }
  }

  if (renderer.value && canvasContainer.value) {
    canvasContainer.value.removeChild(renderer.value.domElement)
    renderer.value.dispose()
  }
}

// Хуки жизненного цикла
onMounted(() => {
  initScene()
  initParticles()
  animate()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  cleanup()
})
</script>

<style lang="scss">
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}
</style>
