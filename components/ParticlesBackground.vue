<template>
  <div ref="canvasContainer" class="particles-container"></div>
</template>

<script>
import * as THREE from 'three'
import gsap from 'gsap'

export default {
  name: 'ParticlesBackground',
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      particlesMesh: null,
      animationId: null,
      uniforms: {
        u_time: { value: 0 },
        u_gridSize: { value: 25 },
        u_color: { value: new THREE.Color() },
      },
    }
  },
  mounted() {
    this.initScene()
    this.initParticles()
    this.animate()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    this.cleanup()
  },
  methods: {
    initScene() {
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      this.camera.position.z = 15 // Увеличим расстояние для лучшего обзора сферы
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        premultipliedAlpha: false,
      })
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.renderer.setClearColor(0x000000, 0)
      this.$refs.canvasContainer.appendChild(this.renderer.domElement)
    },

    getVibrantColor() {
      const hue = Math.random()
      const saturation = 0.7 + Math.random() * 0.3
      const lightness = 0.5 + Math.random() * 0.4
      return new THREE.Color().setHSL(hue, saturation, lightness)
    },

    initParticles() {
      const PARTICLE_COUNT = 1000 // Увеличим количество частиц для лучшего эффекта
      const SPHERE_RADIUS = 15 // Радиус сферы

      const particlesGeometry = new THREE.BufferGeometry()
      const posArray = new Float32Array(PARTICLE_COUNT * 3)
      const randomArray = new Float32Array(PARTICLE_COUNT * 4)

      // Сферическое распределение частиц
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        // Случайные сферические координаты
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const radius = SPHERE_RADIUS * (0.9 + Math.random() * 0.1) // Небольшая вариация радиуса

        // Преобразование в декартовы координаты
        posArray[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
        posArray[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        posArray[i * 3 + 2] = radius * Math.cos(phi)

        // Случайные параметры (оставляем как было)
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

      this.uniforms.u_color.value = this.getVibrantColor()

      // Вершинный шейдер (оставляем без изменений)
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

      // Фрагментный шейдер (оставляем без изменений)
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
        uniforms: this.uniforms,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
      })

      this.particlesMesh = new THREE.Points(
        particlesGeometry,
        particlesMaterial
      )
      this.scene.add(this.particlesMesh)

      gsap.to(this.uniforms.u_time, {
        value: 10,
        duration: 10,
        ease: 'none',
      })
    },

    animate() {
      this.animationId = requestAnimationFrame(this.animate)
      this.uniforms.u_time.value += 0.01

      // Добавим медленное вращение сферы
      if (this.particlesMesh) {
        this.particlesMesh.rotation.y += 0.0005
        this.particlesMesh.rotation.x += 0.0003
      }

      if (
        Math.floor(this.uniforms.u_time.value) % 5 === 0 &&
        this.uniforms.u_time.value % 1 < 0.02
      ) {
        this.uniforms.u_color.value = this.getVibrantColor()
      }

      this.renderer.render(this.scene, this.camera)
    },

    handleResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    },

    cleanup() {
      cancelAnimationFrame(this.animationId)
      window.removeEventListener('resize', this.handleResize)
      if (this.renderer) {
        this.$refs.canvasContainer?.removeChild(this.renderer.domElement)
        this.renderer.dispose()
      }
    },
  },
}
</script>

<style lang="scss">
.particles-container {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
</style>
