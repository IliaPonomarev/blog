<template>
	<el-form 
		:model="controls" 
		:rules="rules" 
		ref="form"
		@submit.native.prevent="onSubmit"
	>
		<h3>Add comment</h3>
		<el-form-item label="Your name" prop="name">
			<el-input v-model="controls.name" />
		</el-form-item>

		<el-form-item label="Your message" prop="text">
			<el-input 
				v-model="controls.text" 
				type="textarea"
				resize="none"
				:rows="3"
			/>
		</el-form-item>
		
		<el-form-item>
			<el-button 
				type="primary" 
				native-type="submit"
				:loading="loading"
			>
				Add comment
			</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
import { log } from 'util';
export default {
	props: {
		postId: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			loading: false,
			controls: {
				name: '',
				text: ''
			},
			rules: {
				name: [
					{ required: true, message: 'Please input name', trigger: 'blur' }
				],
				text: [
					{ required: true, message: 'Please input comment', trigger: 'blur' }
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
						name: this.controls.name,
						text: this.controls.text,
						postId: this.postId
					}

					try {
						const newComment = await this.$store.dispatch('comment/create', formData)
						
						this.$message({
							message: 'Your comment added.',
							type: 'success'
						});
						this.$emit('created', newComment)
					} catch (e) {
						console.error(e)
						this.loading = false
					}
					
				} 
			});
		}
	} 
}
</script>


<style lang="scss" scoped>

</style>