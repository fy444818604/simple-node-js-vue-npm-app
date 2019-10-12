<!-- 日程表格 -->
<template>
	<table class="table">
		<thead>
			<tr>
				<td v-if="type!=2">{{new Date(current).getFullYear()}}</td>
				<td v-for="(item,index) in 7" :class="timeWeek == item&&isWeek()?'date-active':''">
					<p>{{weekDays[index]}}</p>
					<p>{{weekList[index]}}</p>
				</td>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(item,index) in num">
				<td v-if="type!=2" :style="{'background':'#F6F8FA','border':'none!important'}">第{{index+1}}节</td>
				<td v-for="(item1,index1) in 7" :style="{'height':type==1?'52px':'120px'}">
					<div class="count" v-if="isData(item,item1)&&type==1" :style="{'background-color':`rgba(76,132,255,${0.1*(isData(item,item1).record + isData(item,item1).syn + isData(item,item1).meeting)})`}">
						{{isData(item,item1).record + isData(item,item1).syn + isData(item,item1).meeting}}
						<ul>
							<li>录播:{{isData(item,item1).record}}</li>
							<li>同步:{{isData(item,item1).syn}}</li>
							<li>会议:{{isData(item,item1).meeting}}</li>
						</ul>
					</div>
					<div class="course-add" v-if="!isData(item,item1)&&add">
						<i class="iconfont icon-add"></i>
					</div>
					<div class="course-detail" v-if="isData(item,item1)&&type==2" :style="{'background-color':isData(item,item1).type==1?'rgba(76,132,255,.15)':'rgba(253,164,35,.15)'}">
						<div>{{isData(item,item1).name}}</div>
						<div>{{isData(item,item1).subject}}</div>
						<div>{{isData(item,item1).school}}-{{isData(item,item1).author}}</div>
						<div>{{isData(item,item1).time}}</div>
						<div class="third-cor" :class="isData(item,item1).state==1?'no-start':isData(item,item1).state==2?'starting':'end'"></div>
						<div class="course-jump">
							<i class="iconfont icon-list-1"></i>
							<i class="iconfont icon-list-1" v-if="isData(item,item1).state==2"></i>
						</div>
					</div>
					<div class="my-calendar" v-if="isData(item,item1)&&type==3" :class="isData(item,item1).type==1?'bg1':isData(item,item1).type==2?'bg2':'bg3'">
						<div class="my-calendar-name">{{isData(item,item1).name}}</div>
						<div class="flex-between">
							<div class="my-calendar-time">{{isData(item,item1).time}}</div>
							<div class="my-calendar-syc">{{isData(item,item1).syc}}</div>
						</div>
						<div class="course-jump">
							<i class="iconfont icon-list-1"></i>
							<i class="iconfont icon-list-1" v-if="isData(item,item1).state==2"></i>
						</div>
					</div>
					<div class="school-detail" v-if="isData(item,item1)&&type==4">
						<ul>
							<li></li>
						</ul>
						<div>
							<ul>
								<li></li>
							</ul>
						</div>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
    props: {
        tableData: {
            type: Array,
            default: function() {
                return []
            }
        },
        num: {
            type: Number,
            default: 10
        },
        type: {
            type: Number,
            default: 1
        },
        add: {
            type: Boolean,
            default: false
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
        timeWeek: function() {
            let index;
            switch (this.nowTime.getDay()) {
            case 0:
                index = 7;
                break;
            case 1:
                index = 1;
                break;
            case 2:
                index = 2;
                break;
            case 3:
                index = 3;
                break;
            case 4:
                index = 4;
                break;
            case 5:
                index = 5;
                break;
            case 6:
                index = 6;
                break;
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
            if (new Date(this.current).getTime() - this.oneDayLong / 3 - this.monday(this.nowTime).getTime() > -this.oneDayLong) {
                if (new Date(this.current).getTime() - this.monday(this.nowTime).getTime() < this.oneDayLong * 6) {
                    value = true
                }
            }
            return value;
        },
        isData(para, para1) {
            let value = false;
            this.tableData.map(v => {
                if (v.x == para && v.y == para1) {
                    value = v;
                }
            })
            return value;
        },
        tdHeight(type) {
            let height = '52px'
            switch (type) {
            case 2:
                height = '120px'
                break;
            case 3:
                height = '100px'
                break;
            default:
                break;
            }
            return height;
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
	.third-cor {
		width: 0;
		height: 0;
		border-width: 8px;
		border-style: solid;
		transform: rotate(45deg);
		position: absolute;
		left: -8px;
		top: -8px;
	}

	.no-start {
		border-color: transparent rgb(76, 132, 255) transparent transparent;
	}

	.starting {
		border-color: transparent rgb(94, 203, 61) transparent transparent;
	}

	.end {
		border-color: transparent rgb(183, 187, 195) transparent transparent;
	}

	.table {
		width: 100%;
		border-spacing: 0;
		border-collapse: collapse;
		table-layout: fixed;

		td {
			height: 52px;
			text-align: center;
		}

		thead {
			td {
				color: #939399;
				background-color: #F6F8FA;

				&.date-active {
					background-color: #EBEEF5;
				}
			}
		}

		tbody {
			tr {
				td {
					border: 1px dashed #E4E7ED !important;

					&:hover .course-add {
						display: flex;
					}

					.course-add {
						width: 100%;
						height: 100%;
						display: none;
						justify-content: center;
						align-items: center;
						background-color: #EBEEF5;

						i {
							color: #909399;
							font-size: 40px;
						}
					}

					.count {
						width: 100%;
						height: 100%;
						color: #FFFFFF;
						font-size: 18px;
						line-height: 51px;
						position: relative;

						&:hover ul {
							display: block;
						}

						ul {
							position: absolute;
							left: -4px;
							bottom: 40px;
							background: linear-gradient(to top, #7297E8, #4C84FF);
							border-radius: 4px;
							width: calc(100% + 8px);
							height: 86px;
							padding-top: 7px;
							display: none;

							li {
								color: #FFFFFF;
								line-height: 24px;
							}
						}
					}

					.course-detail {
						padding: 14px;
						position: relative;

						&:hover .course-jump {
							display: flex;
						}

						div {
							text-overflow: ellipsis;
							overflow: hidden;
							white-space: nowrap;
							line-height: 24px;
						}

						.course-jump {
							position: absolute;
							left: 0;
							right: 0;
							top: 0;
							bottom: 0;
							background-color: rgba(0, 0, 0, .56);
							display: none;
							justify-content: space-around;
							align-items: center;

							i {
								color: #FFFFFF;
								font-size: 28px;
							}
						}
					}

					.my-calendar {
						margin: 10px;
						position: relative;
						border-radius: 4px;
						width: calc(100% - 20px);
						height: calc(100% - 20px);
						padding: 12px 8px;

						.my-calendar-name {
							text-align: left;
							height: 40px;
							text-overflow: -o-ellipsis-lastline;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							line-clamp: 2;
							-webkit-box-orient: vertical;
						}

						* {
							color: #FFFFFF;
						}

						&.bg1 {
							background: linear-gradient(to right, rgb(76, 132, 255), rgb(142, 201, 248));
						}

						&.bg2 {
							background: linear-gradient(to right, rgb(253, 164, 35), rgb(254, 219, 115));
						}

						&.bg3 {
							background: linear-gradient(to right, rgb(183, 187, 195), rgb(212, 215, 222));
						}

						&:hover .course-jump {
							display: flex;
						}

						.course-jump {
							position: absolute;
							left: 0;
							right: 0;
							top: 0;
							bottom: 0;
							background-color: rgba(0, 0, 0, .56);
							display: none;
							justify-content: space-around;
							align-items: center;

							i {
								color: #FFFFFF;
								font-size: 28px;
							}
						}
					}
				}
			}
		}
	}
</style>
