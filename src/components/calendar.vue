<!-- 日程表格 -->
<template>
	<table class="table">
		<thead>
			<tr>
				<td>{{new Date(current).getFullYear()}}</td>
				<td v-for="(item,index) in 7" :class="timeWeek == item&&isWeek()?'date-active':''">
					<p>{{weekDays[index]}}</p>
					<p>{{weekList[index]}}</p>
				</td>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(item,index) in num">
				<td>第{{index+1}}节</td>
				<td v-for="(item1,index1) in 7">
					<div class="count" v-if="isData(item,item1)" :style="{'background-color':`rgba(76,132,255,${0.1*(isData(item,item1).record + isData(item,item1).syn + isData(item,item1).meeting)})`}">
						{{isData(item,item1).record + isData(item,item1).syn + isData(item,item1).meeting}}
						<ul>
							<li>录播:{{isData(item,item1).record}}</li>
							<li>同步:{{isData(item,item1).syn}}</li>
							<li>会议:{{isData(item,item1).meeting}}</li>
						</ul>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
    props: {
        tableData: Object / Array,
        num: {
            type: Number,
            default: 10
        }
    },
    data() {
        return {
            weekDays: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
            weekList: [],
            oneDayLong: 24 * 60 * 60 * 1000,
            current: Object
        }
    },
    created() {
        this.current = this.nowTime;
    },
    computed: {
        nowTime() {
            let date = new Date();
            return date;
        },
        timeWeek:function(){
            let index;
            switch (this.nowTime.getDay()){
            case 0:index = 7;break;
            case 1:index = 1;break;
            case 2:index = 2;break;
            case 3:index = 3;break;
            case 4:index = 4;break;
            case 5:index = 5;break;
            case 6:index = 6;break;
            }
            return index;
        }
    },
    methods: {
        weekListDay(date) {
            let _date = [];
            let monday = this.monday(date);
            for (let i = 1; i < 8; i++) {
                let month = new Date(monday - (1 - i) * this.oneDayLong).getMonth() + 1;
                let _month = month >= 10 ? month : "0" + month;
                let day = new Date(monday - (1 - i) * this.oneDayLong).getDate();
                let _day = day >= 10 ? day : "0" + day;
                _date.push(_month + "-" + _day);
            }
            this.weekList = _date
        },
        monday(date) {
            let complete = date.getDay(); 
            let _nowTime = date.getTime(); 
            return new Date(_nowTime - (complete - 1) * this.oneDayLong)
        },
        isWeek() {
            let value = false;
            if (new Date(this.current).getTime() - this.oneDayLong / 3 - this.monday(this.nowTime).getTime() > - this.oneDayLong) {
                if (new Date(this.current).getTime() - this.monday(this.nowTime).getTime() < this.oneDayLong * 6) {
                    value = true
                }
            }
            return value;
        },
        isData(para,para1) {
            let value = false;
            this.tableData.map(v => {
                if(v.x == para&&v.y == para1){
                    value = v;
                }
            })
            return value;
        }
    },
    watch: {
        current: function(val) {
            this.weekListDay(new Date(val))
            this.isWeek()
        }
    }
}
</script>

<style lang="scss" scoped="scoped">
	.table {
		width: 100%;
		border-spacing: 0;
		border-collapse: collapse;
		table-layout: fixed;
		
		td{
			height: 52px;
			text-align: center;
		}
		
		thead {
			td {
				color: #939399;
				background-color: #F6F8FA;
				
				&.date-active{
					background-color: #EBEEF5;
				}
			}
		}
		
		tbody{
			tr{
				td{
					border: 1px dashed #E4E7ED!important;
					
					&:first-child{
						background-color: #F6F8FA;
						opacity: 1;
						border:none!important;
					}
					
					.count{
						width: 100%;
						height: 100%;
						color: #FFFFFF;
						font-size: 18px;
						line-height: 51px;
						position: relative;
						
						&:hover ul{
							display: block;
						}
						
						ul{
							position: absolute;
							left: -4px;
							bottom: 40px;
							background: linear-gradient(to top, #7297E8, #4C84FF);
							border-radius: 4px;
							width: calc(100% + 8px);
							height: 86px;
							padding-top: 7px;
							display: none;
							
							li{
								color: #FFFFFF;
								line-height: 24px;
							}
						}
					}
				}
			}
		}
	}
</style>
