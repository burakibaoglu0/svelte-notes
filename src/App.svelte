<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Image from './lib/Image/Image.svelte';
  import Link from './lib/Link/Link.svelte';
  import Row from './lib/Row/Row.svelte';
  import Counter from './lib/Counter/Counter.svelte';
  import Numbers from './lib/Numbers/Numbers.svelte';

  //* All top-level assignments are equal to the state variable.

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
  <Row>
    <div>
      <!-- Mapping -->
      {#each pageLinks as pageLink}
        <Link {...pageLink.link}> <!-- Destructuring For Props -->
          <Image {...pageLink.image}/> <!-- Slot -->
        </Link>
      {/each}
    </div>
    <h1>{pageTitle}</h1> <!-- Data -->
  </Row>
  <Row>
    <Counter />
  </Row>
  <Row>
  <Numbers />
  </Row>
</main>

<style>
</style>