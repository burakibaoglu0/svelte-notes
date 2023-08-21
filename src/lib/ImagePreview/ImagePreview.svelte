<script lang="ts">
  import { imagePreview } from "../../helpers/utils";

  let src: any;
  let inputElement: any;
  let isButtonActive: boolean = false;

  const handleChange = async (e) => {
    src = await imagePreview(e.target.files[0]);
  };
</script>

<strong> DOM Events </strong>

<br />

<div class="image-preview">
  <input
    bind:this={inputElement}
    type="file"
    accept="image/*"
    on:change|once={handleChange}
  />

  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="image-preview__image-placeholder {src ? 'hasImage' : ''}"
    on:mouseenter={() => (isButtonActive = true)}
    on:mouseleave={() => (isButtonActive = false)}
  >
    {#if src}
      <img {src} alt="" />
      <button
        style={!isButtonActive ? "display: none;" : ""}
        on:click|stopPropagation={() => inputElement.click()}
      >
        Change image
      </button>
    {:else}
      <span> Load your image to preview... </span>
    {/if}
  </div>
</div>

<style>
  .image-preview {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 400px;
    padding: 5px 15px;
    place-content: center;
  }

  .image-preview__image-placeholder {
    height: 350px;
    padding: 10px;
    border: 2px solid transparent;
    border-radius: 4px;
    transition: border-color ease-in 0.2s;
    position: relative;
  }

  .image-preview__image-placeholder.hasImage {
    border: 2px solid;
  }

  .image-preview__image-placeholder button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .image-preview img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
</style>
