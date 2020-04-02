<template>
	<div class="page-wrap">
		<el-form 
			:model="controls" 
			:rules="rules" 
			ref="form"
			@submit.native.prevent="onSubmit"
		>
			<h2 class="mb">Создать новый пост</h2>

			<el-collapse >
				<el-collapse-item title="SEO" name="1">
					<el-form-item label="Description" prop="seo">
						<el-input 
							v-model="controls.seo.description" 
							type="textarea"
							resize="none"
							rows="3"
						/>
					</el-form-item>
					<el-form-item label="Title" prop="seo">
						<el-input 
							v-model="controls.seo.title" 
							type="textarea"
							resize="none"
							rows="3"
						/>
					</el-form-item>
					<el-form-item label="Keywords" prop="seo">
						<el-input 
							v-model="controls.seo.keywords" 
							type="textarea"
							resize="none"
							rows="3"
						/>
					</el-form-item>
				</el-collapse-item>
			</el-collapse>

			<el-form-item label="Введите название поста" prop="title">
				<el-input 
					v-model="controls.title" 
				/>
			</el-form-item>

			<el-form-item label="Описание поста" prop="description">
				<el-input 
					v-model="controls.description" 
					type="textarea"
					resize="none"
					rows="4"
				/>
			</el-form-item>

			<el-form-item label="Текст в формате .md или .html" prop="text">
				<el-input 
					v-model="controls.text" 
					type="textarea"
					resize="none"
					rows="10"
				/>
			</el-form-item>

			<el-button type="success" plain @click="previewDialog = true" class="mb">
				Предпросмотр
			</el-button>

			<el-dialog title="Предпросмотр" :visible.sync="previewDialog">
				<div :key="controls.text">
					<vue-markdown>
						{{controls.text}}	
					</vue-markdown>
				</div>
			</el-dialog>

			<el-upload
				class="mb"
				:on-change="handlerImgChange"
				drag
				ref="upload"
				action="https://jsonplaceholder.typicode.com/posts/"
				:auto-upload="false"
			>
				<i class="el-icon-upload"></i>
				<div class="el-upload__text">Drop file here or <em>click to upload</em></div>
				<div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
			</el-upload>
	
			<el-form-item>
				<el-button 
					type="primary" 
					native-type="submit"
					:loading="loading"
				>
					Создать пост
				</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>


<script>
export default {
	layout: 'admin',
	middleware: ['admin-auth'],

	data() {
		return {
			image: null,
			previewDialog: false,
			loading: false,
			controls: {
				title: '',
				text: '',
				description: '',
				seo: {
					description: '',
					title: '',
					keywords: ''
				}
			},
			rules: {
				title: [
					{ required: true, message: 'Input title', trigger: 'blur' }
				],
				text: [
					{ required: true, message: 'Input text', trigger: 'blur' }
				],
				description: [
					{ required: true, message: 'Input description', trigger: 'blur' }
				]
			}
		}
	},

	methods: {
		onSubmit() {
			this.$refs.form.validate(async (valid) => {
				if (valid && this.image) {
					this.loading = true

					const formData = {
						title: this.controls.title,
						description: this.controls.description,
						text: this.controls.text,
						image: this.image,
						seo: this.controls.seo
					}

					try {
						await this.$store.dispatch('post/create', formData)

						this.$refs.upload.clearFiles()
						this.$message.success('Пост добавлен')
						this.loading = false
					} catch (e) {
						this.loading = false
					}
					
				} else {
					this.$message.warning('Форма не валидна')
				}
			});	
		},

		handlerImgChange(file, fileList) {
			this.image = file.raw

		}
	},
}

</script>


<style lang="scss" scoped>

</style>