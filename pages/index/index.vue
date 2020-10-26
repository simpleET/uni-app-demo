<template>
	<view class="index-page">
		<scroll-view scroll-x="true" class="nav-bar-cont">
			<view class="nav-item" @click="getFocus"><text>关注</text></view>
			<view class="nav-item" @click="login"><text>推荐</text></view>
			<view class="nav-item"><text>活动</text></view>
			<view class="nav-item"><text>政策</text></view>
			<view class="nav-item"><text>招商</text></view>
		</scroll-view>
		<view class="container">{{bannerList}}</view>
	</view>
</template>

<script>
	import {
		login,
	} from '../../api/index.js';
	export default {
		data() {
			return {
				bannerList: []
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
			 getFocus() {
				uni.navigateTo({
					url:'../recommend/recommend'
				})
			},
			async login() {
				let sendData ={
					'username':'admin',
					'password': '123456'
				};
				console.log(sendData)

				let res = await login(sendData);
			}
		}
	}
</script>

<style lang="scss">
	@import '../../style/index.scss';
</style>
