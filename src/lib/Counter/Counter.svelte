<script lang="ts">
  /**
   * * Reactivity 
   */

	let count = 0;

	const handleClick = () => {
		count += 1; //! You must use the assignment operator to set a new value.
	}

  /**
   * * Computed variables
  */

  $: doubled = count * 2;

  /**
   * * Watcher && Statement
  */

	$: if (count >= 10) {
		alert('count is dangerously high!');
		count = 9;
	}
</script>

<button on:click={handleClick}> <!-- Event handling -->
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<br>

<p>{count} doubled is {doubled}</p>