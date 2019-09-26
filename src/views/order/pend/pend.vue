<template>
	<div class="pend">
		<div class="fourBox">
			<ul>
				<li class="li1"><a href="#"><b>{{sum.fourBox1}}</b>Picklist &amp; Invoice to be printed</a></li>
				<li class="li2"><a href="#"><b>{{sum.fourBox2}}</b>hipping Label to be printed</a></li>
				<li class="li3"><a href="#"><b>{{sum.fourBox3}}</b>Picklist &amp; To be packed</a></li>
				<li class="li4"><a href="#"><b>{{sum.fourBox4}}</b>Picklist &amp; To be ready to collect</a></li>
			</ul>
		</div>
		<div class="sechBox">
			<div class="box">
				<el-input v-model="orderNumber" placeholder="Order Number"></el-input>
				<el-input v-model="platform" placeholder="Platform"></el-input>
				<el-input v-model="shopName" placeholder="Shop Name"></el-input>
				<el-input v-model="product" placeholder="Product"></el-input>
				<el-input v-model="sku" placeholder="SKU"></el-input>
				<el-input v-model="trackingNumber" placeholder="Tracking Number"></el-input>
			</div>
			<el-button type="danger">Search</el-button>
		</div>
		<div class="features">
			<el-select v-model="value" placeholder="请选择">
			    <el-option v-for="item in options":key="item.value":label="item.label":value="item.value">
			    </el-option>
			</el-select>
			<el-select v-model="value2" placeholder="请选择">
			    <el-option v-for="item2 in options2":key="item2.value":label="item2.label":value="item2.value">
			    </el-option>
			</el-select>
		</div>
		<div class="shopList">
			<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark"style="width: 100%" @selection-change="handleSelectionChange">
				<el-table-column type="selection"width="55"> </el-table-column>
				<el-table-column label="DATE" width="100px"> <template slot-scope="scope">{{scope.row.createdData}}</template></el-table-column>
				<el-table-column prop="channel"label="SALES CHANNEL" width="140px">
					<template slot-scope="scope">
						<img class="channelImgs" :src="'img/'+imgs.picName" alt="" v-for="imgs in scope.row.channel" :key="imgs.index">
					</template>
				</el-table-column>
				<el-table-column prop="orderNumber"label="ORDER NUMBER"show-overflow-tooltip></el-table-column>
				<el-table-column prop="productDetails" label="PRODUCT DETAILS"show-overflow-tooltip width="300px">
					<template slot-scope="scope">
						<div class="ProductInfo" v-for="item in scope.row.productDetails" :key="item.productType">
							<div class="pic"><a href="#"><img :src="'img/' + item.productPicUrl" height="106" width="106" alt=""></a></div>
							<div class="text">
								<span>SKU:<var>{{ item.sku }}</var></span>
								<span>QTY:<i>{{ item.qty }}</i></span>
								<span>PAID:<input v-model="item.paid" class="paidValue" type="text" readonly></span>
							</div>
						</div>
					</template>
				</el-table-column>
				<el-table-column
				prop="amout"
				label="AMOUNT"
				show-overflow-tooltip
				width="100px">
				<template slot-scope="scope">{{ scope.row.amout }}</template>
				</el-table-column>
				<el-table-column prop="process"label="PROCESS"show-overflow-tooltip>
					<span class="process">Picklist</span>
					<span class="process">Invoice</span>
					<span class="process">Shipping Label</span>
					<span class="process">Packed</span>
					<span class="process">Ready to Ship</span>
				</el-table-column>
				<el-table-column prop="shipment"label="SHIPMENT"show-overflow-tooltip>
					<template slot-scope="scope">
						<span class="shipment">{{scope.row.companyName}}</span>
						<span class="shipment">{{scope.row.waybillNumber}}</span>
					</template>
				</el-table-column>
				<el-table-column prop="view"label=""show-overflow-tooltip width="80px">
					<template slot-scope="scope">
						<router-link :to="'/pend/' + scope.row.id" class="viewBtn">view</router-link>
					</template>
				</el-table-column>
			</el-table>
			<div class="page">
				<el-pagination background @size-change="handleSizeChange"@current-change="handleCurrentChange":current-page.sync="currentPage2":page-sizes="[10, 20, 30, 40]":page-size="50"layout="sizes, prev, pager, next":total="50"> 
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'pend',
		data(){
			return{
				options: [{
		          value: '选项1',
		          label: 'Print'
		        }, {
		          value: '选项2',
		          label: 'Print'
		        }, {
		          value: '选项3',
		          label: 'Print'
		        }],
		        options2: [{
		          value: '选项1',
		          label: 'Actions'
		        }, {
		          value: '选项2',
		          label: 'Actions'
		        }, {
		          value: '选项3',
		          label: 'Actions'
		        }],
		        value: '',
		        value2: '',
		        orderNumber: '',
		        platform: '',
		        shopName: '',
		        product: '',
		        sku: '',
		        trackingNumber: '',
		        count: "",
		        tableData: [],
                multipleSelection: [],
                currentPage1: 5,
                currentPage2: 1,
                currentPage3: 5,
                currentPage4: 4,
                sum: '' //.fourBox存放的数据
			}
		},
		methods:{
			toggleSelection(rows) {
		        if (rows) {
		          rows.forEach(row => {
		            this.$refs.multipleTable.toggleRowSelection(row);
		          });
		        } else {
		          this.$refs.multipleTable.clearSelection();
		        }
		    },
		    handleSelectionChange(val) {
		        this.multipleSelection = val;
		    },
		    handleSizeChange(val) {
	            console.log(`每页 ${val} 条`);
	        },
	        handleCurrentChange(val) {
	            console.log(`当前页: ${val}`);
	        },
			getData(url){
				this.axios.get(url)
				.then( (response) => {
					this.sum = response.data;
				})
				.catch( (error) => {
					console.log('数据获取失败')
				})
			},
			getOrderData(url){
				this.axios.get(url)
				.then( (response) => {
					this.tableData = response.data;
					this.paidSum()
				})
				.catch( (error) => {
					console.log('数据获取失败')
				})
			},
			getShopData(url){
				this.axios.post(url)
				.then( (response) => {
					this.tableData = response.data.data;
					console.log(response.data)
				})
				.catch( (error) => {
					console.log('数据获取失败')
				})
			},
			paidSum(){
				this.tableData.forEach(v => {
				  	let count = 0;
				  	v.productDetails.forEach( v1 => {
				  		count += v1.paid
				  	});
				  	console.log(count)
				  })
			},
			sechOrder(){
				let sechInfo = {
					a: this.orderNumber,
					b: this.platform,
					c: this.shopName,
					d: this.product,
					e: this.sku,
					e: this.trackingNumber,
				}
				this.axios.post("http://localhost:3000/orderInfo",this.qs.stringify(sechInfo))
				.then(res => {
					console.log(res.data)
				})
			},		
		},
		mounted(){

			// let url2 = 'http://192.168.0.107/dataList/'
			this.getData('http://localhost:3000/topMenuJson');
			this.getOrderData('http://localhost:3000/orderInfo');
			// this.getShopData(url2);
		},
		computed:{
		}
	}
</script>

<style lang="stylus" scoped>

</style>