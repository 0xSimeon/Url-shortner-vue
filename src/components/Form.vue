<template>
	<form class="form">
		<input
			class="form-input"
			type="url"
			name="link"
			id="link"
			placeholder="shorten a url here"
			aria-label="input a url"
		/>
		<button class="form-btn btn">Shorten it!</button>
	</form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form {
	background-image: url('../assets/images/bg-shorten-desktop.svg');
	background-color: var(--color-secondary);
	background-size: cover;
	border-radius: var(--border);
	padding: 2.5rem;
	max-width: 60em;
	margin: 3rem auto;
	display: flex;
	align-items: center;
	justify-content: space-around;

	&-input {
		padding: 0.8em 1.5em;
		flex: 1;
		font-size: 1.5rem;
		color: var(--color-gray-1);
	}

	&-input,
	&-btn {
		margin: 1rem;
		border-radius: var(--border);
		outline: none;
		border: none;
		font-family: Poppins, sans-serif;
	}
}
</style>
