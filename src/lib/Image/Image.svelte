<script lang="ts">
  export let src: string, alt: string, title: string = 'Image Title', height: number = 25; //* Component Props
</script>

<img {src} {alt} {title} {height}>