<template>
	<el-table
		:data="posts"
		style="width: 100%">

		<el-table-column prop="title" label="Название" />

		<el-table-column label="Date" width="180">
			<template slot-scope="{row: {date}}">
				<i class="el-icon-time"></i>
				<span style="margin-left: 10px">{{ new Date(date).toLocaleString() }}</span>
			</template>
		</el-table-column>

		<el-table-column prop="views" label="Просмотры">
			<template slot-scope="{row: {views}}">
				<i class="el-icon-view"></i>
				<span style="margin-left: 10px">{{ views }}</span>
			</template>
		</el-table-column>
		
		<el-table-column prop="comments" label="Комментарии">
			<template slot-scope="{row: {comments}}">
				<i class="el-icon-message"></i>
				<span style="margin-left: 10px">{{ comments.length }}</span>
			</template>
		</el-table-column>


		
		<el-table-column label="Operations">
			<template slot-scope="{row}">
				<el-tooltip effect="dark" content="Edit post" placement="top">
					<el-button
						icon="el-icon-edit"
						type="primary"
						@click="open(row._id)"
					/>
				</el-tooltip>

				<el-tooltip effect="dark" content="Delete post" placement="top">
					<el-button
						icon="el-icon-delete"
						type="danger"
						@click="remove(row._id)"
					/>
				</el-tooltip>
			</template>
		</el-table-column>
  	</el-table>
</template>

<script>
export default {
	layout: 'admin',
	middleware: ['admin-auth'],
	async asyncData({store}) {
		const posts = await store.dispatch('post/fetchAdmin')
		return {
			posts
		}
	},
	methods: {
		open(id) {
			this.$router.push(`/admin/post/${id}`)
		},
		async remove(id) {
			try {
				await this.$confirm('Вы уверены?', 'Внимание!', {
					confirmButtonText: 'OK',
					cancelButtonText: 'Cancel',
					type: 'warning'
				})

				await this.$store.dispatch('post/remove', id)

				this.posts = this.posts.filter(item => item._id !== id)

				console.log(this.posts)

				this.$message.success('Пост удален')
			} catch(e) {

			}
			
		}
	}
}
</script>