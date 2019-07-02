const Calculator = (function(){
	function calcTip() {
		var subtotalElem = document.getElementById('subtotal');
		var tipElem = document.getElementById('tip');
		var totalElem = document.getElementById('total');
		var subtotal = parseFloat(subtotalElem.value !== "" ? subtotalElem.value : 0);
		var tip = parseFloat(tipElem.value !== "" ? tipElem.value : 0);
		var total = subtotal + subtotal*tip/100;
		totalElem.innerHTML = '$' + total;
	}
	return {do: function() {calcTip()}}
})();