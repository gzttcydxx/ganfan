var dicefun = {
	init: function (num, glen, mlen) {
		$("table[id='gege']>tbody>tr").attr("class", "");
		$("table[id='maomao']>tbody>tr").attr("class", "");
		var container = document.getElementById('dicebox');
		$('.redpacket').remove();
		var arr = this.randomFun(num);
		var s = 0;
		for (var i = 0; i < num; i++) {
			var img = this.createDice(arr[i] + 1, i);
			s += img[1];
			container.appendChild(img[0]);
		}
		var sg = (s - 1) % (glen - 1);
		var sm = (s - 1) % (mlen - 1);
		setTimeout(function(){
			$("table[id='gege']>tbody>tr[data-index=" + sg + "]").attr("class", "success");
			$("table[id='maomao']>tbody>tr[data-index=" + sm + "]").attr("class", "success");
		}, 2000);
	},
	randomFun: function (num) {
		var arr = [];
		for (var i = 0; i < num; i++) {
			arr.push(Math.floor(Math.random() * 6));
		}
		return arr;
	},
	createDice: function (num, i) {
		var image = document.createElement('img');
		image.setAttribute("class", "redpacket");
		image.id = "redpacket" + i;
		image.src = 'img/' + num + '.jpg';
		return [image, num];
	},
}
