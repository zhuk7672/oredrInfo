<template>
	<div class="sidebar">
		<ul>
			<li><router-link to="/dashboard">Dashboard</router-link></li>
			<li><router-link to="/pend" router-link-active="active">Orders</router-link></li>
			<li><router-link to="/products">Products</router-link></li>
			<li><router-link to="/customers">Customers</router-link></li>
			<li><router-link to="/account">Accounting</router-link></li>
			<li><router-link to="/settings">Settings</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'sidebar',
		data(){
			return{
			}
		},

	}
</script>

<style lang="stylus" scoped>


</style>