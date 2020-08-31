<template>
	<form class="form" @submit.prevent="shortener(value)">
		<div>
			<div class="form__shortener">
				<input
					class="form-input"
					type="url"
					name="link"
					id="link"
					placeholder="shorten a url here"
					aria-label="input a url"
					v-model="value"
				/>
				<button class="form-btn btn">
					{{ buttonText }}
					<p v-if="loading" class="loading"></p>
				</button>
			</div>
			<SlideXLeftTransition :delay="100">
				<p v-if="error" class="error">Please enter a valid link</p>
			</SlideXLeftTransition>
		</div>
		<SlideYUpTransition group>
			<div v-for="(link, index) in links" :key="index" class="form__links">
				<p class="form__links-main">
					{{ link.mainUrl }}
				</p>
				<div class="center form__links-copy">
					<p>
						<a :href="link.shortenedUrl" class="form__links-copy-link no-decoration">{{ link.shortenedUrl }}</a>
					</p>
					<button class="form__links-copyBtn btn" @click.prevent="">Copy</button>
				</div>
			</div>
		</SlideYUpTransition>
	</form>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
import { SlideYUpTransition, SlideXLeftTransition } from 'vue2-transitions';

import axios from 'axios';

export default {
	data() {
		return {
			value: '',
			links: [],
			message: '',
			error: false,
			loading: false,
			buttonText: 'Shorten it!',
		};
	},
	validations: {
		value: {
			required,
			minLength: minLength(1),
		},
	},
	methods: {
		async shortener(value) {
			this.$v.$touch();
			if (this.$v.$invalid) {
				this.showError();
			} else {
				try {
					this.loading = true;
					this.buttonText = 'Loading';
					const request = await axios.post('https://rel.ink/api/links/', { url: value });
					this.loading = false;
					this.buttonText = 'Shortened!';
					setTimeout(() => {
						this.buttonText = 'Shorten it!';
					}, 1000);
					this.links.push({
						shortenedUrl: `https://rel.ink/${request.data.hashid}`,
						mainUrl: `${request.data.url}`,
					});
				} catch (error) {
					this.showError();
					console.log(error);
				}
			}
		},
		showError() {
			this.error = true;
			setTimeout(() => {
				this.error = false;
			}, 2000);
		},
	},
	components: {
		SlideYUpTransition,
		SlideXLeftTransition,
	},
};
</script>

<style lang="scss" scoped>
.form {
	max-width: 60em;
	width: 90%;
	margin: 0 auto;

	&__shortener {
		background-image: url('../assets/images/bg-shorten-desktop.svg');
		background-color: var(--color-secondary);
		background-size: cover;
		border-radius: var(--border);
		padding: 6.5rem;
		margin: -6rem auto;
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-bottom: 1em;
	}

	&-input {
		padding: 0.8em 1.5em;
		flex: 1;
		font-size: 1.7rem;
		color: var(--color-gray-1);
		font-weight: 700;
	}

	&-input,
	&-btn {
		margin: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: var(--border);
		outline: none;
		border: none;
		font-family: Poppins, sans-serif;

		& > * {
			margin: 0.4em;
		}
	}

	&__links {
		display: flex;
		background: var(--color-white);
		padding: 1em 3em;
		border-radius: var(--border);
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1em;

		&-main {
			color: var(--color-darkViolet);
		}

		&-copy {
			& > * {
				margin: 0.5em;
			}
			&Btn {
				margin: unset;
				padding: 0.6em 3em;
				font-size: 2rem;

				border-radius: var(--border);
				outline: none;
				border: none;
				cursor: pointer;
			}

			&-link {
				color: var(--color-primary);
				font-weight: 700;
			}
		}
	}
}
.loading {
	border: 3px solid var(--color-darkBlue);
	border-top-color: var(--color-white);
	border-radius: 50%;
	width: 1em;
	height: 1em;
	animation: spin 0.5s linear infinite;
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}

.error {
	color: rgb(236, 65, 65);
	background: var(--color-white);
	padding: 1rem 2.5rem;
	width: 80%;
	text-align: center;
	max-width: 80%;
	margin: 0.2em auto;
	border-radius: var(--border);
}

@media only screen and (max-width: 53.125em) {
	.form {
		&__links,
		&__links-copy {
			flex-direction: column;
		}

		&__links {
			&-copy-link {
				padding: 0.5em;
				border-top: 1px solid var(--color-secondary);
			}
		}
	}
}

@media only screen and (max-width: 37.5em) {
	.form {
		max-width: 100%;
		width: 95%;
		&__shortener {
			flex-direction: column;
			width: 80%;
			padding: 1.5em;
		}

		&-input,
		&-btn {
			width: 80%;
			padding: 1rem 2.5rem;
		}

		&__links,
		&__links-copy {
			padding: 0.6em;
		}
	}
}
</style>
