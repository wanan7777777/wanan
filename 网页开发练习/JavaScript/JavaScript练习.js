// 年月日功能实现
window.onload = function () {
	window.requestAnimationFrame(getDate);
};

function getDate() {
	window.setTimeout(function () {
		window.requestAnimationFrame(getDate);
	}, 1000 / 2);
	var d = new Date();
	var year = d.getFullYear(); //获取年
	var month = d.getMonth() + 1; //获取月，从 Date 对象返回月份 (0 ~ 11)，故在此处+1
	var day = d.getDay(); //获取日
	var days = d.getDate(); //获取日期
	var hour = d.getHours(); //获取小时
	var minute = d.getMinutes(); //获取分钟
	var second = d.getSeconds(); //获取秒

	if (month < 10) month = "0" + month;
	if (days < 10) days = "0" + days;
	if (hour < 10) hour = "0" + hour;
	if (minute < 10) minute = "0" + minute;
	if (second < 10) second = "0" + second;

	var week = new Array(
		"星期日",
		"星期一",
		"星期二",
		"星期三",
		"星期四",
		"星期五",
		"星期六"
	);
	var Tools = document.getElementById("日期时间");
	var da =
		year +
		" 年 " +
		month +
		" 月 " +
		days +
		" 日 " +
		week[day] +
		" " +
		hour +
		" : " +
		minute +
		" :" +
		second;
	Tools.innerHTML = da;
}
// 年月日功能实现完毕

// 搜索框实现
function onclick1() {
	var import1 = document.getElementById("搜索框输入").value;
	// 获取input中的输入
	var url =
		"https://cn.bing.com/search?q=" +
		import1 +
		"&qs=n&form=QBRE&sp=-1&pq=" +
		import1 +
		"&sc=10-3&sk=&cvid=908C83947EEE48DEBD11DA2E5DFFAF3B&ghsh=0&ghacc=0&ghpl=";
	//bing网页搜索
	window.open(url);
	return 0;
	// 打开网页后结束此函数，否则会卡在网页中无法退出
}
// document.getElementById("form验证").action =  onclick1.url;
// 想利用form表单实现回车直接搜索。。。还未完善，以后再看
// document.getElementById("搜索框输入").placeholder.innerHTML = "123";
// 想改变input搜索框中显示的内容，未实现，以后再说

//回车触发事件
function onclick2(e) {
	var open1 = window.event || e;
	if (open1.keyCode == 13) {
		onclick1();
	}
}

//根据设备加载不同的样式

function iswap() {
	var uA = navigator.userAgent.toLowerCase();
	var ipad = uA.match(/ipad/i) == "ipad";
	var iphone = uA.match(/iphone os/i) == "iphone os";
	var midp = uA.match(/midp/i) == "midp";
	var uc7 = uA.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var uc = uA.match(/ucweb/i) == "ucweb";
	var android = uA.match(/android/i) == "android";
	var windowsce = uA.match(/windows ce/i) == "windows ce";
	var windowsmd = uA.match(/windows mobile/i) == "windows mobile";
	if (
		!(ipad || iphone || midp || uc7 || uc || android || windowsce || windowsmd)
	) {
		// PC 端
		var head = document.getElementsByTagName("head")[0];
		var link = document.createElement("link");
		link.href = "../css/css样式表2.0.css";
		link.rel = "stylesheet";
		link.type = "text/css";
		head.appendChild(link);
	} else {
		// 移动端
		var head = document.getElementsByTagName("head")[0];
		var link = document.createElement("link");
		link.href = "../css/css2.css";
		link.rel = "stylesheet";
		link.type = "text/css";
		head.appendChild(link);
	}
}
iswap();
