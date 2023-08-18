<script lang="ts">
  export let href:string = '#', target:string = '_blank', rel:string = 'noreferrer', hasTitle: boolean = false
</script>

{#if hasTitle}
  <strong>
  	Slots + Conditional Rendering
  </strong>

  <br><br>
{/if}

<a {href} {target} {rel}>
  <!-- Dynamic Content -->
  <slot />
</a>