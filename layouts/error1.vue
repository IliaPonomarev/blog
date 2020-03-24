<template>
	<div class="error-layout error">
		<div class="error__content">
			<h1 class="error__title">404</h1>
			<nuxt-link to="/">Вернуться на главную</nuxt-link>
		</div>
	</div>
</template>


<style lang="scss" scoped>
.error {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	&__content {
		margin: 0 auto;
	}

	&__title {
		color: rgb(145, 6, 6);
		margin-bottom: 1rem;
	}
}


</style>