<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Image from './lib/Image/Image.svelte';
  import Link from './lib/Link/Link.svelte';

  const pageLinks = [{
      image: {
        src: svelteLogo,
        class: 'logo',
        alt: 'Svelte Logo',
        title: 'Svelte Logo'
      },
      link: {
        href: 'https://vitejs.dev',
        target: '_blank',
        rel: 'noreferrer'
      }
    },
    {
      image: {
        src: viteLogo,
        class: 'logo',
        alt: 'Vite Logo',
        height: 35
      },
      link: {
        href: 'https://svelte.dev',
        target: '_blank',
        rel: 'noreferrer'
      }
    },
  ]

  const pageTitle = 'Vite + Svelte'
</script>

<main>
  <div>
    {#each pageLinks as pageLink}
      <Link {...pageLink.link}>
        <Image {...pageLink.image}/>
      </Link>
    {/each}
  </div>
  <h1>{pageTitle}</h1>
</main>

<style>
</style>