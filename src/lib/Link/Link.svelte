<script lang="ts">
  export let href:string = '#', target:string = '_blank', rel:string = 'noreferrer'
</script>

<a {href} {target} {rel}>
  <!-- Dynamic Content -->
  <slot />
</a>