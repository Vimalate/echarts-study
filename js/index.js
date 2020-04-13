// 立即执行函数，防止变量污染

// 柱状图
(function () {
	// 实例化对象
	let myCharts = echarts.init(document.querySelector('.bar .chart'))
	// 指定配置项
	let option = {
		color: ['#2f89cf'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: "0%",
			top: "10px",
			right: "0%",
			bottom: "4%",
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
			axisTick: {
				alignWithLabel: true
			},
			// 修改刻度标签
			axisLabel: {
				color: ' rgba(255,255,255,.6)',
				fontSize: 12
			},
			//  x轴样式不显示 
			axisLine: {
				show: false
			}
		}],
		yAxis: [{
			type: 'value',
			// 修改刻度标签
			axisLabel: {
				color: ' rgba(255,255,255,.6)',
				fontSize: 12
			},
			axisLine: {
				lineStyle: {
					color: "rgba(255,255,255,.1)",
				}
			},
			// y轴分割线
			splitLine: {
				lineStyle: {
					color: "rgba(255,255,255,.1)"
				}
			}
		}],
		series: [{
			name: '直接访问',
			type: 'bar',
			barWidth: '35%',
			data: [200, 300, 300, 900, 1500, 1200, 600],
			itemStyle: {
				// 修改柱子圆角
				barBorderRadius: 5
			}
		}]
	};
	// 把配置项给实例对象
	myCharts.setOption(option)
	// 图表resize 自适应
	window.addEventListener('resize', function () {
		myCharts.resize()
	})
})(),

// 技能列表柱状图
(function () {
	// 实例化对象
	let myCharts = echarts.init(document.querySelector('.bar2 .chart'))
	// 声明颜色数组
	var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
	// 指定配置项
	let option = {
		grid: {
			top: "10%",
			left: "25%",
			bottom: "10%",
			// containLabel: true
		},
		xAxis: {
			show: false
		},
		yAxis: [{
				type: 'category',
				data: ['印尼', '美国', '印度', '中国', '世界人口(万)'],
				axisLine: {
					show: false,
				},
				axisTick: {
					show: false
				},
				// y轴颜色
				axisLabel: {
					color: "#fff"
				},
			},
			{
				show: true,
				data: [702, 350, 610, 793, 664],
				// 不显示y轴的线
				axisLine: {
					show: false
				},
				// 不显示刻度
				axisTick: {
					show: false
				},
				axisLabel: {
					textStyle: {
						fontSize: 12,
						color: "#fff"
					}
				}
			}
		],
		series: [{
				name: '条',
				type: 'bar',
				data: [18203, 23489, 29034, 104970, 131744],
				// 柱子之间的距离
				barCategoryGap: 50,
				//柱子的宽度
				barWidth: 10,
				// 柱子设为圆角
				itemStyle: {
					normal: {
						barBorderRadius: 20,
						// 修改每根柱子颜色
						color: function (params) {
							return myColor[params.dataIndex];
						}
					}
				},
				// 显示柱子内文字
				label: {
					show: true,
					// 图形内显示
					position: "inside",
					// 文字的显示格式
					formatter: "{c}%"
				}
			},
			{
				name: "框",
				type: "bar",
				barCategoryGap: 50,
				barWidth: 15,
				itemStyle: {
					color: "none",
					borderColor: "#00c1de",
					borderWidth: 3,
					barBorderRadius: 15
				},
				data: [19325, 23438, 31000, 121594, 134141, 681807]
			}
		]
	};
	// 把配置项给实例对象
	myCharts.setOption(option)
	// 图表resize 自适应
	window.addEventListener('resize', function () {
		myCharts.resize()
	})
})()