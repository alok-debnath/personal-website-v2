<script>
	import Hello from '../components/Hello.svelte';

	let name = 'Alok';
	let numbers = [0];

	function number_increment() {
		numbers = [...numbers, numbers[numbers.length - 1] + 1];
	}
</script>

<div>
	<h1>Welcome {name + ' ' + numbers.toString()}</h1>
	<Hello />
	<button on:click={number_increment}>Increment here</button>
</div>

<style>
	h1 {
		color: aquamarine;
	}
</style>
