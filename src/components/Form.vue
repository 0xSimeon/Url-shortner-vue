<template>
	<div class="form" id="shorten">
		<form class="" @submit.prevent="shortener($event, value)">
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
		</form>
		<SlideYUpTransition group>
			<div v-for="(link, index) in links" :key="index" class="form__links">
				<p class="form__links-main">
					{{ link.mainUrl }}
				</p>
				<div class="center form__links-copy">
					<p>
						<a :href="link.shortenedUrl" class="form__links-copy-link no-decoration">{{ link.shortenedUrl }}</a>
					</p>
					<button
						class="form__links-copyBtn btn"
						v-clipboard:copy="link.shortenedUrl"
						v-clipboard:success="onCopy"
						v-clipboard:error="onError"
					>
						<span v-if="!loading && !link.copied">Copy</span>
					</button>
				</div>
			</div>
		</SlideYUpTransition>
	</div>
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
			shortenedUrl: '',
			copied: false,
		};
	},
	validations: {
		value: {
			required,
			minLength: minLength(1),
		},
	},
	methods: {
		async shortener(event, value) {
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
					}, 1200);
					this.shortenedUrl = `https://rel.ink/${request.data.hashid}`;
					const mainUrl = request.data.url.length <= 20 ? request.data.url : `${request.data.url.slice(0, 30)}...`;
					this.links.push({
						shortenedUrl: `https://rel.ink/${request.data.hashid}`,
						mainUrl,
					});
					localStorage.setItem('links', JSON.stringify(this.links));
				} catch (error) {
					this.showError();
					console.log(error);
				}
			}
		},
		onCopy(event) {
			event.trigger.innerText = 'Copied';
			event.trigger.classList.add('copied');
			setTimeout(() => {
				event.trigger.innerText = 'Copy';
				event.trigger.classList.remove('copied');
			}, 2500);
		},
		showError() {
			this.error = true;
			setTimeout(() => {
				this.error = false;
			}, 2000);
		},
		onError() {
			alert('Sorry, there was an error copying that link. please reload!');
		},
		getLinks() {
			if (localStorage.getItem('links')) this.links = JSON.parse(localStorage.getItem('links'));
		},
	},
	components: {
		SlideYUpTransition,
		SlideXLeftTransition,
	},
	mounted() {
		this.getLinks();
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
		margin: -10rem auto;
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

.copied {
	background: var(--color-secondary);
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
			display: block;
		}

		&__links {

			&-copy {
				& > * {
					margin: 0.5em 0;
				}
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

		&__links {
			padding: 1em;
			width: 90%;
			margin: 1rem auto;

			&-copy {
				border-top: 2px solid var(--color-darkViolet);
			}

			&-copyBtn {
				display: block;
				margin: 0 auto;
				padding: 0.6em 1em;
				width: 87%;
			}

			&-main {
				margin-bottom: 1.2rem;
			}
		}
	}
}
</style>
