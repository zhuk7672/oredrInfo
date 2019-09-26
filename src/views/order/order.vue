<template>
	<div class="order">
		<div class="Leftsidebar">
			<sidebar></sidebar>
		</div>
		<div class="rightContent">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import sidebar from '../../components/sidebar.vue'
	export default{
		name: 'order',
		data(){
			return{

			}
		},
		components:{
			sidebar,
		}
	}
</script>

<style lang="stylus" scoped>



</style>