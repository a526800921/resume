

//获取对应设备宽度
function init(){
	var width=window.innerWidth || document.documentElement.clientWidth;
	document. documentElement.style.fontSize=20*(width/320)+'px';
}
init();

//监听屏幕旋转
window.addEventListener('resize',init);
