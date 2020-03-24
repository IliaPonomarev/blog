<template>
	<el-form 
		:model="controls" 
		:rules="rules" 
		ref="form"
		@submit.native.prevent="onSubmit"
	>
		<h3>Create user</h3>
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
				Create
			</el-button>
		</el-form-item>
	</el-form>
</template>


<script>
export default {
	layout: 'admin',
	middleware: ['admin-auth'],
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
						await this.$store.dispatch('auth/createUser', formData)

						this.$message.success('New user created')
						
						this.controls.login = ''
						this.controls.password = ''
						this.loading = false
					} catch (e) {
						console.error(e)
						this.loading = false
					}
					
				} 
			});
		}
	},
}
</script>