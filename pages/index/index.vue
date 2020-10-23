<template>
	<view class="index-page">
		<scroll-view scroll-x="true" class="nav-bar-cont">
			<view class="nav-item" @click="getFocus"><text>关注</text></view>
			<view class="nav-item"><text>推荐</text></view>
			<view class="nav-item"><text>活动</text></view>
			<view class="nav-item"><text>政策</text></view>
			<view class="nav-item"><text>招商</text></view>
		</scroll-view>
		<view class="container">33333</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			// #ifdef MP-WEIXIN||H5
			uni.showToast({
				title: '3333'
			});
			// #endif
		},
		methods: {
			getFocus(){
				console.log('点击了关注')
			}
		}
	}
</script>

<style lang="scss">
	@import '../../style/index.scss';
</style>
