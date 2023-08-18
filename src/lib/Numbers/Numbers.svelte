<script>
	let numbers = [1, 2, 3, 4];

	const addNumber = () => {
		numbers = [ ...numbers , numbers.length + 1]; //* Updating arrays
	}

  const foo = {
    bar: 'bar'
  };

	$: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<strong>
	Updating arrays
</strong>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}> Add a number </button>

<br><br>

<strong>
	Updating objects
</strong>

<br><br>

<button on:click={() => foo.bar = 'baz'}> <pre>{JSON.stringify(foo)}</pre> Update object </button>
