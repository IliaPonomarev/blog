<template>
	<el-card
		shadow="hover"
		:body-style="{padding: 0}"
		class="post"
	>
		<header slot="header" class="post__header">
			<h3>{{post.title}}</h3>
			<small>
				<i class="el-icon-time"></i>
				{{ post.date | date() }}
			</small>
		</header>
		<div class="post__body">
			<img :src=" post.imageUrl" alt="post img" class="post__img">
		</div>
		<footer class="post__footer">
			<el-button @click="openPost">Открыть</el-button>

			<span>
				<i class="el-icon-message"></i>
				{{post.comments.length}}
			</span>
		</footer>
	</el-card>
</template>


<script>
export default {
	props: {
		post: {
			type: Object,
			required: true
		}
	},
	methods: {
		openPost() {
			const id = this.post._id
			this.$router.push(`/post/${id}`)
		}
	}
}
</script>

<style lang="scss" scoped>
.post {
	// height: 200px;
	// border: 1px solid black;
	// margin-bottom: 2rem;
	margin-bottom: 1.5rem;

	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__img {
		width: 100%;
		height: auto;
	}

	&__body {
		// margin-bottom: 1rem;
	}

	&__footer {
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
</style>