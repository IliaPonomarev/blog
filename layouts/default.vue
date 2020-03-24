<template>
  	<el-container>
		<el-header><app-navigation /></el-header>
		<el-main>
			<nuxt />
		</el-main>
		<el-footer>Footer</el-footer>
	</el-container>
</template>


<script>
import AppNavigation from '@/components/main/Navigation.vue'

export default {
	name: 'app',
	components: {
		AppNavigation
	}
}
</script>

<style>

</style>
