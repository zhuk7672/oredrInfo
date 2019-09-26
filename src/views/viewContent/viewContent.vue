<template>
	<div class="viewContent">
		<div class="orderInfoTop">
			<div class="blockTop"></div>
			<div>{{oderData.date}}</div>
			<ul>
				<li>
					<img class="platformName img1" v-for="imgs in oderData.channel" :src="'../img/' + imgs.picName" alt="" :key="imgs.index">
				</li>
				<li>
					<strong>Created at</strong>
					<p>{{oderData.createdData}}</p>
				</li>
				<li>
					<strong>Update at</strong>
					<p>{{oderData.upData}}</p>
				</li>
				<li>
					<strong>Imported at</strong>
					<p>{{oderData.importData}}</p>
				</li>
				<li style="text-align: center;">
					<strong>Status</strong>
					<p>{{oderData.status}}</p>
				</li>
			</ul>
		</div>
		<div class="path">
			<el-steps :space="200" :active="active" finish-status="success">
			  <el-step title="Pick List">Pick List</el-step>
			  <el-step title="Invoice">1</el-step>
			  <el-step title="Shipping Label">2</el-step>
			  <el-step title="Packed">3</el-step>
			  <el-step title="Ready to Ship"></el-step>
			  <el-step title="Shipped"></el-step>
			  <el-step title="Shipped"></el-step>
			</el-steps>
		</div>
		<div class="orderDetils">
			<h2>ORDER DETILS</h2>
			<div class="address">
				<ul>
					<li>
						<strong>Biling Address</strong>
						<p>姓名：{{billingAddress.name}}</p>
						<p>地址：{{billingAddress.address}}</p>
						<p>国家：{{billingAddress.country}}</p>
						<p>邮编：{{billingAddress.zipCode}}</p>
						<p>手机：{{billingAddress.phone}}</p>
					</li>
					<li>
						<strong>Shiipping Address</strong>
						<p>姓名：{{shippingAddress.name}}</p>
						<p>地址：{{shippingAddress.address}}</p>
						<p>国家：{{shippingAddress.country}}</p>
						<p>邮编：{{shippingAddress.zipCode}}</p>
						<p>手机：{{shippingAddress.phone}}</p>

					</li>
				</ul>
			</div>
			<div class="deliveryInfo">
				<ul>
					<li>
						<strong>Shiment Type</strong>
						<p>{{oderData.shipmentType}}</p>
					</li>
					<li>
						<strong>Logistic Company</strong>
						<p>{{oderData.companyName}}</p>
					</li>
					<li>
						<strong>Tracking No.</strong>
						<p>{{oderData.waybillNumber}}</p>
					</li>
				</ul>
			</div>
			<div class="commodity">
				<h3>Order No:<span> {{oderData.orderNumber}}</span></h3>
				<div class="boxs" v-for="boxs in oderData.productDetails">
					<div class="pic"><a href="#"><img :src="'../img/' + boxs.productPicUrl" alt=""></a></div>
					<div class="text t1">
						<strong>Item</strong>
						<p>{{boxs.productName}}</p>
						<p>{{boxs.sku}}</p>
					</div>
					<div class="text">
						<strong>QTY</strong>
						<p>{{boxs.qty}}</p>
					</div>
					<div class="text">
						<strong>Unit Price</strong>
						<p>{{boxs.paid}}</p>
					</div>
					<div class="text">
						<strong>Total Price</strong>
						<p>{{boxs.subtotal}}</p>
					</div>
				</div>
				<div class="totalBottom">
					<p><b>Subtotal</b> <span>${{count}}</span></p>
					<p><b>Shipping Fee </b><span>$0</span></p>
					<p><b>Voucher / Rebate</b> <span>$0</span></p>
					<p><b>GST</b> <span>${{oderData.gst}}</span></p>
					<p><b>Total</b> <span>${{sum}}</span></p>
				</div>
			</div>
		</div>
		<div class="orderHistory">
			<h5>ORDER PROCESS HISTORY</h5>
			<div class="box">
				<div class="tip">Pick printed by <span>{{orderProcessHistory.printedBy}}</span></div>
				<p>{{orderProcessHistory.printDate}}</p>
			</div>
			<div class="box">
				<div class="tip">Order imported by <span>system</span></div>
				<p>{{orderProcessHistory.importDate}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'viewContent',
		data(){
			return{
				active: 0,
				oderData:[], //订单信息
				billingAddress:[], //买家信息
				shippingAddress:[], //卖家信息
				count: 0, // 小计
				sum: 0, //总计
				orderProcessHistory: [] //订单处理历史
			}
		},
		methods:{
			//获取订单信息
			fetchOrderData(id){
				this.axios.get("http://localhost:3000/orderInfo/" + id)
				.then( (response) => {
					this.oderData = response.data;
					this.costSum();
				})
			},
			//获取买家信息
			fetchBillingData(id){
				this.axios.get("http://localhost:3000/billingAddress/" + id)
				.then( (response) => {
					this.billingAddress = response.data;
				})
			},
			//获取卖家信息
			fetchShipData(id){
				this.axios.get("http://localhost:3000/shippingAddress/" + id)
				.then( (response) => {
					this.shippingAddress = response.data;
				})
			},
			//获取订单处理历史
			fetchOrderHistoryData(id){
				this.axios.get("http://localhost:3000/orderProcessHistory/" + id)
				.then( (response) => {
					this.orderProcessHistory = response.data;
				})
			},
			costSum(){
				let count = 0, sum = 0;
				this.oderData.productDetails.forEach( v => {
					count += v.subtotal;
				});
				this.count = count;
				this.sum = this.oderData.gst + this.count;
				console.log(this.sum)
			}

		},
		created(){
			this.fetchOrderData(this.$route.params.id);
			this.fetchBillingData(this.$route.params.id);
			this.fetchShipData(this.$route.params.id);
			this.fetchOrderHistoryData(this.$route.params.id);
		},
		mounted(){
			// this.getOrderData('http://localhost:3000/orderInfo');
		},

	}
</script>

<style lang="stylus" scoped>


</style>