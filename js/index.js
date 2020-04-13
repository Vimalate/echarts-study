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
})();

// 技能列表柱状图
(function () {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.querySelector(".bar1 .chart"));
	
	var data = [70, 34, 60, 78, 69];
	var titlename = ["HTML5", "CSS3", "javascript", "VUE", "NODE"];
	var valdata = [702, 350, 610, 793, 664];
	var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
	let option = {
		//图标位置
		grid: {
			top: "10%",
			left: "22%",
			bottom: "10%"
		},
		xAxis: {
			show: false
		},
		yAxis: [{
				show: true,
				data: titlename,
				inverse: true,
				axisLine: {
					show: false
				},
				splitLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					color: "#fff",

					rich: {
						lg: {
							backgroundColor: "#339911",
							color: "#fff",
							borderRadius: 15,
							// padding: 5,
							align: "center",
							width: 15,
							height: 15
						}
					}
				}
			},
			{
				show: true,
				inverse: true,
				data: valdata,
				axisLabel: {
					textStyle: {
						fontSize: 12,
						color: "#fff"
					}
				}
			}
		],
		series: [{
				name: "条",
				type: "bar",
				yAxisIndex: 0,
				data: data,
				barCategoryGap: 50,
				barWidth: 10,
				itemStyle: {
					normal: {
						barBorderRadius: 20,
						color: function (params) {
							var num = myColor.length;
							return myColor[params.dataIndex % num];
						}
					}
				},
				label: {
					normal: {
						show: true,
						position: "inside",
						formatter: "{c}%"
					}
				}
			},
			{
				name: "框",
				type: "bar",
				yAxisIndex: 1,
				barCategoryGap: 50,
				data: [100, 100, 100, 100, 100],
				barWidth: 15,
				itemStyle: {
					normal: {
						color: "none",
						borderColor: "#00c1de",
						borderWidth: 3,
						barBorderRadius: 15
					}
				}
			}
		]
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	window.addEventListener("resize", function () {
		myChart.resize();
	});
})();

// 折线图
(function () {
	var myChart = echarts.init(document.querySelector(".line .chart"));
	var yearData = [
		{
			year: '2019',  // 年份
			data: [  // 两个数组是因为有两条线
					 [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
					 [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
				]
		},
		{
			year: '2020',  // 年份
			data: [  // 两个数组是因为有两条线
					 [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
			 [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
				]
		}
	 ];
	let option = {
		color: ['#00f2f1', '#ed3f35'],
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			// 如果series 有name ，则可以不用写 data
			// data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
			textStyle: {
				color: '#4c9bfd' // 图例文字颜色
			},
			right: '10%' // 距离右边10%
		},
		grid: {
			top: '20%',
			left: '3%',
			right: '4%',
			bottom: '3%',
			show: true, // 显示边框
			borderColor: '#012f4a', // 边框颜色
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
			axisTick: {
				show: false // 去除刻度线
			},
			axisLabel: {
				color: '#4c9bfd' // 文本颜色
			},
			axisLine: {
				show: false // 去除轴线
			},
			boundaryGap: false // 去除轴内间距
		},
		yAxis: {
			type: 'value',
			axisTick: {
				show: false // 去除刻度
			},
			axisLabel: {
				color: '#4c9bfd' // 文字颜色
			},
			splitLine: {
				lineStyle: {
					color: '#012f4a' // 分割线颜色
				}
			}
		},
		series: [{
				name: '新增粉丝',
				data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
				type: 'line',
				smooth: true

			},
			{
				name: '新增游客',
				data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
				type: 'line',
				smooth: true,
			},

		]
	};

	myChart.setOption(option);
	window.addEventListener("resize", function () {
		myChart.resize();
	});

	// 点击切换
	$('.line h2').on('click','a',function(){
		// 更换数据
		let obj=yearData[$(this).index()]
		option.series[0].data=obj.data[0]
		option.series[1].data=obj.data[1]
		// 重新渲染
		myChart.setOption(option)

	})
})()