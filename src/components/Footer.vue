<template>
	<footer class="footer">
		<h4 class="footer__title"><img src="../assets/images/logo-2.svg" alt="Shortly Logo" /></h4>
		<div class="footer__links">
			<p class="footer__text">Features</p>
			<ul class="footer__list">
				<li><a href="#" class="footer__link">Link Shortening</a></li>
				<li><a href="#" class="footer__link">Branded Links</a></li>
				<li><a href="#" class="footer__link">Analytics</a></li>
			</ul>
		</div>
		<div class="footer__links">
			<p class="footer__text">Resources</p>

			<ul class="footer__list">
				<li><a href="#" class="footer__link">Blog</a></li>
				<li><a href="#" class="footer__link">Developers</a></li>
				<li><a href="#" class="footer__link">Support</a></li>
			</ul>
		</div>
		<div class="footer__links">
			<p class="footer__text">Company</p>

			<ul class="footer__list">
				<li><a href="#" class="footer__link">About</a></li>
				<li><a href="#" class="footer__link">Our Team</a></li>
				<li><a href="#" class="footer__link">Careers</a></li>
				<li><a href="#" class="footer__link">Contact</a></li>
			</ul>
		</div>

		<ul class="footer__social">
			<li>
				<a href="#" class="footer__social-link">
					<svg class="footer__social-icon">
						<use href="../assets/images/icon-facebook.svg#facebook"></use>
					</svg>
					 <span class="sr-only">Facebook</span>
				</a>
			</li>
			<li>
				<a href="#" class="footer__social-link">
					<svg class="footer__social-icon">
						<use href="../assets/images/icon-twitter.svg#twitter"></use>
					</svg>
					<span class="sr-only">Twitter</span>
				</a>
			</li>
			<li>
				<a href="#" class="footer__social-link">
					<svg class="footer__social-icon">
						<use href="../assets/images/icon-pinterest.svg#pinterest"></use>
					</svg>
					 <span class="sr-only">Pinterest</span>
				</a>
			</li>
			<li>
				<a href="#" class="footer__social-link">
					<svg class="footer__social-icon">
						<use href="../assets/images/icon-instagram.svg#instagram"></use></svg
					><span class="sr-only">Instagram</span>
				</a>
			</li>
		</ul>
	</footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
	padding: 3em;
	font-size: 2rem;
	display: flex;
	background: var(--color-darkViolet);
	margin: -2px;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;

	& > * {
		margin-top: 4rem;
	}
	&__title {
		font-size: 3rem;
		margin-right: 3em;
		margin-top: 2rem;
	}

	&__text,
	&__title {
		color: var(--color-white);
		font-weight: 700;
	}

	&__text {
		font-size: 2rem;
	}

	&__link,
	&__text {
		margin-bottom: 1.2rem;
	}

	&__links {
		margin: 1em 3em;
	}
	&__list {
		list-style: none;

		& > * {
			margin-bottom: 1.3rem;
		}
	}

	&__link {
		text-decoration: none;
		color: var(--color-gray);
		font-size: 1.7rem;
		transition: all 0.2s ease-in;

		&:hover {
			color: var(--color-primary);
		}
	}

	&__social {
		display: flex;
		justify-content: center;

		&-icon {
			width: 2em;
			height: 2em;
		}

		&-link {
			color: #fff;

			&:hover {
				color: var(--color-primary);
			}
		}

		& > * {
			margin-left: 1em;
		}
	}
}

ul {
	list-style: none;
}

@media only screen and (max-width: 53.125em) {
	.footer {
		text-align: center;
		align-items: center;
		&__title {
			margin-right: unset;
		}

		&__links {
			margin: 1em 2em;
		}
	}
}

@media only screen and (max-width: 37.5em) {
	.footer {
		flex-direction: column;

		&__links {
			margin: 1em auto;
		}
	}
}
</style>
