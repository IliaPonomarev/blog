<template>
	<div class="page-wrap">
		<el-breadcrumb separator="/" class="mb">
			<el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
			<el-breadcrumb-item>{{post.title}}</el-breadcrumb-item>
		</el-breadcrumb>
		
		<h3>Post {{$route.params.id}}</h3>

		<el-form 
			:model="controls" 
			:rules="rules" 
			ref="form"
			@submit.native.prevent="onSubmit"
		>
			<!-- <h3>Log in to admin panel</h3> -->
			<el-form-item label="Текст в формате .md или .html" prop="text">
				<el-input 
					v-model.trim="controls.text" 
					type="textarea"
					resize="none"
					rows="10"
				/>
			</el-form-item>

			<div class="mb">
				<small class="mr">
					<i class="el-icon-time"></i>
					<span style="margin-left: 10px">{{ new Date(post.date).toLocaleString() }}</span>
				</small>
				<small>
					<i class="el-icon-view"></i>
					<span style="margin-left: 10px">{{ post.views }}</span>
				</small>
			</div>
			
			<el-form-item>
				<el-button 
					type="primary" 
					native-type="submit"
					:loading="loading"
				>
					Обновить
				</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>


<script>
export default {
	layout: 'admin',
	middleware: ['admin-auth'],
	head() {
		return {
			title: `Post | ${this.post.title}`
		}
	},
	validate({params}) {
		return Boolean(params.id)
	},
	async asyncData({store, params}) {
		const post = await store.dispatch('post/fetchAdminById', params.id)
		return {post}
	},

	data() {
		return {
			loading: false,
			controls: {
				text: ''
			},
			rules: {
				text: [
					{ required: true, message: 'Input text', trigger: 'blur' }
				]
			}
		}
	},
	mounted() {
		this.controls.text = this.post.text
	},
	methods: {
		onSubmit() {
			this.$refs.form.validate(async (valid) => {
				if (valid) {
					this.loading = true

					const formData = {
						text: this.controls.text,
						id: this.post._id
					}

					try {
						await this.$store.dispatch('post/update', formData)
						this.$message.success('Пост обновлен')
						this.loading = false
					} catch (e) {
						this.loading = false
					}
					
				} 
			});
		}
	},
}

</script>


<style lang="scss" scoped>
.mr {
	margin-right: 2rem;
}
</style>