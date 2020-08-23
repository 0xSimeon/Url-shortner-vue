<template>
	<div id="app">
		<app-header></app-header>
		<app-hero></app-hero>
		<app-form></app-form>
		<app-statistics></app-statistics>
		<!-- Boost your links today Get Started Features Link Shortening Branded Links
		Analytics Resources Blog Developers Support Company About Our Team Careers Contact -->
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Hero from '@/components/Hero.vue';
import Form from '@/components/Form.vue';
import Statistics from '@/components/Statistics.vue';
export default {
	name: 'App',
	components: {
		appHeader: Header,
		appHero: Hero,
		appForm: Form,
		appStatistics: Statistics,
	},
	title() {
		return `Shortly | URL shortening API Challenge`;
	},
};
</script>

<style lang="scss">
@import url('https://fonts.google.com/specimen/Poppins');

// COLORS
:root {
	--color-primary: hsl(180, 66%, 49%);
	--color-secondary: hsl(257, 27%, 26%);
	--color-red: hsl(0, 87%, 67%);
	--color-gray: hsl(0, 0%, 75%);
	--color-gray-1: hsl(257, 7%, 63%);
	--color-darkBlue: hsl(255, 11%, 22%);
	--color-darkViolet: hsl(260, 8%, 14%);
	--color-white: rgba(255, 255, 255, 9.6);
	--border: 6px;
	--pill: 38px;
}

*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}

html {
	font-size: 62.5%;
}

body {
	font-size: 1.8rem;
	background: var(--color-white);
	font-family: Poppins, sans-serif;
	font-weight: 500;
	position: relative;
	overflow-x: hidden;
	color: var(--color-gray-1);
}

h1, h2, h3, h4 {
	color: var(--color-darkViolet);
}

// UTILITY CLASSES
.no-decoration {
	text-decoration: none;
}
.btn {
	background: var(--color-primary);
	padding: 1rem 3.5rem;
	color: var(--color-white);
	margin: 1rem auto;
	font-weight: 700;
	font-size: 2rem;

	&:hover {
		background: var(--color-gray);
	}
}

@media only screen and (max-width: 37.5em) {
	html {
		font-size: 56.25%;
	}
}
</style>
