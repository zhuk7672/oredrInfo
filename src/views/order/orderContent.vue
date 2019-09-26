<template>
	<div class="orderContent">
		<div class="topMenu">
			<router-link to="/pend" class="router-link-active">Pending({{amount.pending}})</router-link>
			<router-link to="/a2">Ready to Ship({{amount.readyship}})</router-link>
			<router-link to="/a3">Shipped({{amount.shipped}})</router-link>
			<router-link to="/a4">Delivered({{amount.delivered}})</router-link>
			<router-link to="/a5">Canceled({{amount.canceled}})</router-link>
			<router-link to="/a6">All({{amount.all}})</router-link>
		</div>
		<div class="topMenuShow">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'orderContent',
		data(){
			return{
				amount: ''
			}
		},
		methods:{
			getData(url){
				this.axios.get(url)
				.then( (response) => {
					this.amount = response.data;
					// console.log(response.data)

				})
				.catch( (error) => {
					console.log('数据获取失败')
				})
			}
		},
		mounted(){
			this.getData('http://localhost:3000/topMenuJson')
		}
	}
</script>

<style lang="stylus" scoped>



</style>