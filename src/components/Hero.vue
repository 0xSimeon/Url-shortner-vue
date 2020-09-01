<template>
	<section class="hero">
		<div class="hero__content">
			<div class="hero__text-box">
				<h2 class="hero__title">
					More than just <br />
					shorter links
				</h2>
				<p class="hero__text">
					Build your brand’s recognition and get detailed insights on how your links are performing.
				</p>
				<a href="#shorten" class="hero__btn btn no-decoration">Get Started</a>
			</div>
			<div class="hero__img-box">
				<img class="hero__img" src="../assets/images/illustration-working.svg" alt="man working on a computer" />
			</div>
		</div>

		
	</section>
</template>

<script>

export default {

};
</script>

<style lang="scss" scoped>
.hero {
	padding-bottom: 10%;
	&__content {
		display: flex;
		margin-left: 5rem;
		padding: 2rem;
		justify-content: space-between;
	}

	&__title {
		font-size: 5.5rem;
		color: var(--color-darkViolet);
		font-weight: 700;
		margin: 2rem auto;
	}

	&__text {
		font-size: 2rem;
	}

	&__btn {
		display: inline-block;
		border-radius: var(--pill);
		margin: 2rem auto;
		padding: 1.2rem 3.5rem;
	}

	&__text-box {
		flex-basis: 40%;
		margin-top: 6rem;
	}
	&__title,
	&__text,
	&__btn {
		margin-bottom: 2rem;
	}

	&__text {
		margin-bottom: 4rem;
	}

	&__img {
		max-width: 100%;
		width: 100%;
		height: auto;
		margin-left: 2rem;
	}

}

@media only screen and (max-width: 62.5em) {
	.hero {
		&__content {
			flex-direction: column;
			margin-left: unset;
		}

		&__text-box {
			order: 1;
		}

		&__title {
			font-size: 4.5rem;
		}
	}
}

@media only screen and (max-width: 37.5em) {
	.hero {
		padding-bottom: 33%;

		&__title,
		&__text {
			text-align: center;
		}

		&__btn {
			width: 50%;
			text-align: center;
			display: block;
		}

		&__img {
			margin-left: unset;
		}
	}
}
</style>
