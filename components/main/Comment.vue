<template>
	<el-card class="comment">
		<div class="comment__header">
			<span class="name">{{ comment.name }}</span>
			<span>
				<i class="el-icon-time"></i>
				{{ comment.date | date }}
			</span>
		</div>
		<div class="comment__text">{{ comment.text }}</div>

	</el-card>
</template>

<script>
export default {
	props: ['comment']
}
</script>


<style lang="scss" scoped>
.comment {
	margin-bottom: 1rem;

	&__header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;
		font-size: 0.8rem;
	}

	&__text {
		white-space: pre-line;
	}
}

</style>