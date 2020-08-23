<template>
	<section class="statistics">
		<div class="statistics__content">
			<h3 class="statistics__title">Advanced Statistics</h3>
			<p class="statistics__text">
				Track how your links are performing across the web with <br />
				our advanced statistics dashboard.
			</p>
		</div>
		<div class="statistics__grid">
			<div v-for="(card, index) in cards" :key="index" :class="`statistics__grid-${index}`">
				<div class="statistics__grid-img">
					<img :src="require(`../assets/images/icon-${card.img}`)" alt="Shortly Features card icon" />
				</div>
				<h3 class="statistics__grid-title">{{ card.title }}</h3>
				<p class="statistics__grid-text">{{ card.text }}</p>
			</div>
		</div>
		<div class="statistics__line"></div>
		<div class="statistics__cta"></div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			cards: [
				{
					title: 'Brand Recognition Boost',
					text: `your brand recognition with each click. Generic links don’t mean a thing. Branded links
					help instil confidence in your content.`,
					img: `brand-recognition.svg`,
				},

				{
					title: 'Detailed Records',
					text: `Gain insights into who is clicking your links. Knowing when and where people engage with your content helps
				inform better decisions.`,
					img: `detailed-records.svg`,
				},

				{
					title: 'Fully Customizable',
					text: `Improve brand awareness and content discoverability through customizable links, supercharging audience
				engagement.`,
					img: `fully-customizable.svg`,
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.statistics {
	background: #eff0f5;
	padding: 1.3em;
	position: relative;
	margin-top: -6em;
	z-index: -2;
	max-width: 100%;
	width: 100%;
	font-size: 2rem;

	&__content {
		margin-top: 9em;

		& > * {
			margin-bottom: 0.5em;
		}
	}

	&__title {
		color: var(--color-darkViolet);
		font-weight: 700;
		font-size: 3.5rem;
		text-align: center;
	}

	&__text {
		color: var(--color-secondary);
		text-align: center;
	}

	&__grid {
		margin: 0.2em auto;
		display: flex;
		padding: 1em;
		justify-content: center;
		align-items: center;

		& > * {
			background: var(--color-white);
			padding: 1.35em;
			border-radius: var(--border);
			flex-basis: 23%;
		}

		& > :not(:first-child) {
			margin-left: 2em;
		}

		&-1 {
			margin-top: 5em;
		}

		&-2 {
			margin-top: 10em;
		}
		&-img {
			width: 4em;
			height: 4em;
			background: var(--color-secondary);
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: -3em;
		}

		&-title,
		&-text,
		&-img {
			margin-bottom: 1.1em;
		}
	}

	&__line {
		width: 80%;
		height: 0.8em;
		background: var(--color-primary);
		z-index: -2;

		top: 73%;
		left: 50%;
		transform: translate(-50%, -50%);
		position: absolute;
	}

	&__cta {
		background: var(--color-secondary) url('../assets/images/bg-shorten-desktop.svg') no-repeat;
		padding: 1.2em;
		background-size: cover;
	}

}
</style>
