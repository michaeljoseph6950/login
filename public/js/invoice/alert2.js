auth.onAuthStateChanged(user => {
	"use strict";
	var toast = localStorage.getItem('banktotal')
	let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1h');
	var toastbitcoin = '';
	ws.onmessage = (event) => {
		let stockObject = JSON.parse(event.data);
		toastbitcoin = (toast / (parseFloat(stockObject.k.c))).toFixed(5);
	}
	var i = -1;
	var $toastlast;

	var getMessage = function() {
		let items = [];
		items = JSON.parse(localStorage.getItem('banklogs'));
		if (((JSON.parse(localStorage.getItem('banklogs')).length) == 1)) {
            for (var i = 0; i < items.length; i++) {
                var msgs = [`
                HUNTINGTON bank
                <br>
                Name:  Steven Thomas 
                <br>
                Bank Account number:42137083
                <br>
                Routine number 041215032
                <br>
                DATE OF BIRTH :  19/12/1961
                <br>
                Mothers maiden:Villalobos
                <br>
                Username - stefibeth
                <br>
                Password -dexnmex5
                <br>
                SSN; 239-31-5727
                <br>
                Address; 176 Sandy Cross Rd
                <br>
                Hobbsville NC 27946
                <br>
                P.O. box 9130
                <br>
                Marlborough, MA 01752
                <br>
                Bank Phone number 508 263-6700
                <br>
                steventhomas593th@aol.com
                <br>
                Password Godlives12
                `];
                i++;
                if (i === msgs.length) {
                    i = 0;
                }
                return msgs[i];
            }
		}
	};

	var toastbut = document.getElementById('showtoasts');

	$(toastbut).click(function() {
		var shortCutFunction = 'success';
		var msg = '';
		var title = '';
		toastr.options = {
			closeButton: true,
			debug: false,
			newestOnTop: true,
			progressBar: true,
			positionClass: 'toast-top-full-width',
			preventDuplicates: true,
			onclick: null
		};
		if (!msg) {
			msg = getMessage();
		}
		var $toast = toastr[shortCutFunction](msg, title);
		$toastlast = $toast;
	});

});