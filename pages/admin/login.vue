<template>
	<el-card
		shadow="always"
		:style="{width: '500px'}"
	>
		<el-form 
			:model="controls" 
			:rules="rules" 
			ref="form"
			@submit.native.prevent="onSubmit"
		>
			<h3>Log in to admin panel</h3>
			<el-form-item label="Login" prop="login">
				<el-input v-model.trim="controls.login" />
			</el-form-item>

			<el-form-item label="Password" prop="password">
				<el-input v-model.trim="controls.password" type="password" />
			</el-form-item>
			
			<el-form-item>
				<el-button 
					type="primary" 
					native-type="submit"
					:loading="loading"
				>
					Login
				</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script>
export default {
	layout: 'empty',
	data() {
		return {
			loading: false,
			controls: {
				login: '',
				password: ''
			},
			rules: {
				login: [
					{ required: true, message: 'Input login', trigger: 'blur' }
				],
				password: [
					{ required: true, message: 'Input password', trigger: 'blur' },
					{ min: 6, message: '6 characters minimum'}
				]
			}
		}
	},
	methods: {
		onSubmit() {
			this.$refs.form.validate(async (valid) => {
				if (valid) {
					this.loading = true

					const formData = {
						login: this.controls.login,
						password: this.controls.password
					}

					try {
						await this.$store.dispatch('auth/login', formData)
						this.$router.push('/admin')
						this.loading = false
					} catch (e) {
						console.error(e)
						this.loading = false
					}
					
				} 
			});
		}
	},
	mounted() {
		const { message } = this.$route.query

		if (message === 'login') {
			this.$message.info('Для начала войдите в систему')
		}

		if (message === 'logout') {
			this.$message.success('Вы успешно вышли из системы')
		}

		if (message === 'session') {
			this.$message.warning('Время жизни сессии истекло, авторизуйтесь')
		}
	}

}
</script>