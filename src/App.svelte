<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'

  const svelteLogoObj = {
    src: svelteLogo,
    class: 'logo',
    alt: 'Svelte Logo'
  }

  const viteLogoObj = {
    src: viteLogo,
    class: 'logo',
    alt: 'Vite Logo'
  }

  const pageTitle = 'Vite + Svelte'
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img {...viteLogoObj} />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img {...svelteLogoObj} />
    </a>
  </div>
  <h1>{pageTitle}</h1>
</main>

<style>
</style>
