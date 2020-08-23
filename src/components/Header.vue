<template>
	<header class="header">
		<div class="header__box">
			<h1 class="header__title">
				Shortly
			</h1>
			<ul class=" header__nav-1">
				<li><a href="#" class="header__nav-link no-decoration">Features</a></li>
				<li><a href="#" class="header__nav-link no-decoration">Pricing</a></li>
				<li><a href="#" class="header__nav-link no-decoration">Resources</a></li>
			</ul>
			<button @click="toggleMenu" class="header__menu" v-if="activateMobile">Menu</button>
		</div>

		<nav v-show="mobile" class="header__nav">
			<ul class="header__nav-2">
				<li><a href="#" class="header__nav-link  no-decoration">Login</a></li>
				<li><a href="#" class="header__nav-link header__nav-link--styled btn no-decoration">Sign up</a></li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	data() {
		return {
			mobile: true,
			activateMobile: false,
		};
	},
	methods: {
		toggleMenu() {
			this.mobile = !this.mobile;
		},
	},
};
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-between;
	margin: 1rem 3rem;
	align-items: center;
	padding: 2rem;

	&__box,
	&__nav-1,
	&__nav-2 {
		display: flex;
		align-items: center;
		padding: 1rem;
	}

	&__title, &__nav-link {
		margin: 1rem;
	}

	&__nav {
		&-1,
		&-2 {
			list-style: none;
		}

		&-link {
			color: var(--color-gray-1);
			padding: 1rem;

			&:hover {
				color: var(--color-primary);
			}

			&--styled {
				border-radius: var(--pill);
				color: var(--color-white);
				padding: 1rem 3.5rem;

				&:hover {
					color: var(--color-white);
				}
			}
		}
	}
}

// .header {
// 	margin: 1.2rem auto;
// 	padding: 1.5rem;
// 	display: flex;
// 	justify-content: space-between;
// 	&__box {
// 		display: flex;
// 		justify-content: space-around;
// 		flex-basis: 30%;
// 	}

// 	&__title {
// 		font-weight: 700;
// 		color: var(--color-darkBlue);
// 	}

// 	// &__menu {
// 	// 	display: block;
// 	// 	padding: 1rem 1.3rem;
// 	// 	border-radius: var(--border);
// 	// 	background: var(--color-secondary);
// 	// 	color: var(--color-white);
// 	// 	outline: none;
// 	// 	cursor: pointer;

// 	// 	&:hover {
// 	// 		background: var(--color-gray-1);
// 	// 	}

// 	// 	&:focus {
// 	// 		border: 2px solid var(--color-gray);
// 	// 	}
// 	// }

// 	&__nav {
// 		// background: var(--color-secondary);
// 		display: flex;
// 		// text-align: center;

// 		&-1,
// 		&-2 {
// 			list-style: none;
// 			// margin: 2rem auto;
// 			display: flex;
// 		}
// 	}
// 		&-1 {
// 			// border-bottom: 1px solid hsl(257deg, 1%, 48%);
// 		}

// 	// &-link {

// 	// 	display: inline-block;
// 	// 	color: var(--color-white);
// 	// 	margin-bottom: 3rem;
// 	// 	font-weight: 700;

// 	// 	&--styled {
// 	//     border-radius: var(--pill);
// 	//     display: block;
// 	// 	}
// 	// }
// }
</style>
