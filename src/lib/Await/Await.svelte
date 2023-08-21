<script lang="ts">
  import { getPosts, addPost } from "../../services/posts";

  const successRequest: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 2e3);
  });

  const errorRequest: Promise<any> = new Promise((resolve, reject) => {
    !1 ? resolve("Success!") : reject("Ups! This is an error message 🤯");
  });

  const handleClick = () => {
    addPost({
      userId: 1,
      title: "Test title",
      body: "Test body",
    });
  };
</script>

<div>
  <strong> Await Block </strong>

  <br /><br />

  <!-- Success Request Example -->
  <!-- If you want to create a loading animation or there is no reject block, use the following codes. -->

  {#await successRequest}
    <p>Wait for response...</p>
  {:then data}
    <p>Fetched data is: <strong>{data}</strong></p>
  {:catch error}
    <p>Error on request: <strong>{error}</strong></p>
  {/await}

  <br />

  <!-- Else, use the following codes-->

  {#await successRequest then data}
    <p>Fetched data is: <strong>{data}</strong></p>
  {/await}

  <br />
  <!-- Error Request Example -->

  <div class="dynamicContent">
    {#await errorRequest}
      <p>Wait for response...</p>
    {:then data}
      <p>Fetched data is: <strong>{data}</strong></p>
    {:catch error}
      <p>Error on request: <strong>{error}</strong></p>
    {/await}

    <br />

    <!-- Fetch example with fake API -->
    {#await getPosts()}
      <p>Wait for response...</p>
    {:then data}
      <ul>
        {#each data.splice(0, 3) as post (post.id)}
          <li>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        {/each}
      </ul>
    {:catch error}
      <p>Error on request: <strong>{error}</strong></p>
    {/await}
  </div>

  <button on:click={handleClick}> Add post </button>
</div>

<style>
  .dynamicContent {
    min-height: 320px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  }

  ul li {
    list-style-type: none;
    border: 1px solid;
    border-radius: 4px;
    padding: 8px;
    display: flex;
    flex-direction: column;
  }

  ul li h3 {
    flex: 1;
  }

  ul li p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  button {
    margin: 0 0 15px;
  }
</style>
