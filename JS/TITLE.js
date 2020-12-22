var a =function(){
	document.title="继续";
}
window.onfocus = function () {
	document.title = '~~~~~~~~';
	i = setTimeout(a, 2000);
};
window.onblur = function () {
	document.title = '等等，你别走啊！！!';
};
