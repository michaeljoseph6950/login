var firebaseConfig = {
	apiKey: "AIzaSyBBN4elJRDCog-yjgPa9pM0ZDr5fKlYvNA",
	authDomain: "logins-id7.firebaseapp.com",
	projectId: "logins-id7",
	storageBucket: "logins-id7.appspot.com",
	messagingSenderId: "353868186617",
	appId: "1:353868186617:web:ad7a3ea8742687c4c73328",
	measurementId: "G-Q32JQJ2BDH"
};
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const logoHolder = document.getElementById("logo");
const avatarHolder = document.getElementById("avatar");
const jinaHolder = document.getElementById("jinaHolder");
const jinaHolder2 = document.getElementById("jinaHolder2");
const paidText = document.getElementById('paid-text');

const theText = document.getElementById('text');
const displayNameField = document.getElementById('text');
const editButton = document.getElementById('copy');


auth.onAuthStateChanged(user => {
	if (!user) {
		window.location.assign("index");
	}
	if (user.photoURL) {
		avatarHolder.setAttribute("src", user.photoURL);
		avatarHolder.style.display = 'block';
	} else if (!user.photoURL) {
		logoHolder.style.display = 'block';
	}
	if (user.displayName && user.email) {
		jinaHolder.innerText = user.displayName;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		paidText.innerHTML = `
			The price of acquiring tools for spamming, and also the process itself is expensive, 
			Send $100 to complete your download.
			Do not close this page or navigate to any other page otherwise this progress will be lost
			<br>
			After this payment check your email inbox @ <span>${user.email}</span>. 
			The bank log files will be in text format. 
		`;

		theText.value = user.displayName;
		const editInformation = () => {
			const newNameAndPhoto = {
				newDisplayName: displayNameField.value
			};
			changeNameAndPhoto(user, newNameAndPhoto);
			
		}
		const changeNameAndPhoto = (user, newNameAndPhoto) => {
			const {newDisplayName} = newNameAndPhoto;
			if(newDisplayName !== user.displayName && newDisplayName !== localStorage.getItem('disname')) {
				user.updateProfile({
					displayName: newDisplayName
				})
				.then(() => {
					document.getElementById('jinaHolder').innerText = displayNameField.value;
					localStorage.setItem('disname',newDisplayName);
					alert('Display Name Updated Successfully !');
				})
				.catch(error => {
					console.error(error);
				})
			} else {
				theText.focus();
			}
		}
		editButton.addEventListener('click', editInformation);
	} else if (!user.displayName && user.email) {
		var themail = user.email;
		var theaddress = themail.substring(0, themail.indexOf('@'));

		jinaHolder.innerText = theaddress;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		paidText.innerHTML = `
			The price of acquiring tools for spamming, and also the process itself is expensive, 
			Send $100 to complete your download.
			Do not close this page or navigate to any other page otherwise this progress will be lost
			<br>
			After this payment check your email inbox @ <span>${user.email}</span>. 
			The bank log files will be in text format. 
		`;

		theText.value = theaddress;
		const editInformation = () => {
			const newNameAndPhoto = {
				newDisplayName: displayNameField.value
			};
			changeNameAndPhoto(user, newNameAndPhoto);
			
		}
		const changeNameAndPhoto = (user, newNameAndPhoto) => {
			const {newDisplayName} = newNameAndPhoto;
			if(newDisplayName !== theaddress && newDisplayName !== localStorage.getItem('disname')) {
				user.updateProfile({
					displayName: newDisplayName
				})
				.then(() => {
					document.getElementById('jinaHolder').innerText = displayNameField.value;
					localStorage.setItem('disname',newDisplayName);
					alert('Display Name Updated Successfully !');
				})
				.catch(error => {
					console.error(error);
				})
			} else {
				theText.focus();
			}
		}
		editButton.addEventListener('click', editInformation);
	} else if(user.phoneNumber && user.displayName) {
		jinaHolder.innerText = user.displayName;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		paidText.innerHTML = `
			The price of acquiring tools for spamming, and also the process itself is expensive, 
			Send $100 to complete your download.
			Do not close this page or navigate to any other page otherwise this progress will be lost
			<br>
			After this payment check your text messages inbox @ <span>${user.phoneNumber}</span>. 
			The bank log files will be sent as a link to your phone number. 
		`;

		theText.value = user.displayName;
		const editInformation = () => {
			const newNameAndPhoto = {
				newDisplayName: displayNameField.value
			};
			changeNameAndPhoto(user, newNameAndPhoto);
			
		}
		const changeNameAndPhoto = (user, newNameAndPhoto) => {
			const {newDisplayName} = newNameAndPhoto;
			if(newDisplayName !== user.displayName && newDisplayName !== localStorage.getItem('disname')) {
				user.updateProfile({
					displayName: newDisplayName
				})
				.then(() => {
					document.getElementById('jinaHolder').innerText = displayNameField.value;
					localStorage.setItem('disname',newDisplayName);
					alert('Display Name Updated Successfully !');
				})
				.catch(error => {
					console.error(error);
				})
			} else {
				theText.focus();
			}
		}
		editButton.addEventListener('click', editInformation);
	} else if(user.phoneNumber && !user.displayName) {
		jinaHolder.innerText = user.phoneNumber;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		paidText.innerHTML = `
			The price of acquiring tools for spamming, and also the process itself is expensive, 
			Send $100 to complete your download.
			Do not close this page or navigate to any other page otherwise this progress will be lost
			<br>
			After this payment check your text messages inbox @ <span>${user.phoneNumber}</span>. 
			The bank log files will be sent as a link to your phone number. 
		`;

		theText.value = user.phoneNumber;
		const editInformation = () => {
			const newNameAndPhoto = {
				newDisplayName: displayNameField.value
			};
			changeNameAndPhoto(user, newNameAndPhoto);
			
		}
		const changeNameAndPhoto = (user, newNameAndPhoto) => {
			const {newDisplayName} = newNameAndPhoto;
			if(newDisplayName !== user.phoneNumber && newDisplayName !== localStorage.getItem('disname')) {
				user.updateProfile({
					displayName: newDisplayName
				})
				.then(() => {
					document.getElementById('jinaHolder').innerText = displayNameField.value;
					localStorage.setItem('disname',newDisplayName);
					alert('Display Name Updated Successfully !');
				})
				.catch(error => {
					console.error(error);
				})
			} else {
				theText.focus();
			}
		}
		editButton.addEventListener('click', editInformation);
	} else 	if (user.isAnonymous && user.displayName) {
		jinaHolder.innerText = user.displayName;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		paidText.innerHTML = `
			The price of acquiring tools for spamming, and also the process itself is expensive, 
			Send $100 to complete your download.
			Do not close this page or navigate to any other page otherwise this progress will be lost
			<br>
			After this payment a text file will be available for download.
			The bank log files will be in text format. 
		`;

		theText.value = user.displayName;
		const editInformation = () => {
			const newNameAndPhoto = {
				newDisplayName: displayNameField.value
			};
			changeNameAndPhoto(user, newNameAndPhoto);
			
		}
		const changeNameAndPhoto = (user, newNameAndPhoto) => {
			const {newDisplayName} = newNameAndPhoto;
			if(newDisplayName !== user.displayName && newDisplayName !== localStorage.getItem('disname')) {
				user.updateProfile({
					displayName: newDisplayName
				})
				.then(() => {
					document.getElementById('jinaHolder').innerText = displayNameField.value;
					localStorage.setItem('disname',newDisplayName);
					alert('Display Name Updated Successfully !');
				})
				.catch(error => {
					console.error(error);
				})
			} else {
				theText.focus();
			}
		}
		editButton.addEventListener('click', editInformation);
	} else 	if (user.isAnonymous && !user.displayName) {
		jinaHolder.innerText = 'Anonymous';
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		paidText.innerHTML = `
			The price of acquiring tools for spamming, and also the process itself is expensive, 
			Send $100 to complete your download.
			Do not close this page or navigate to any other page otherwise this progress will be lost
			<br>
			After this payment a text file will be available for download.
			The bank log files will be in text format. 
		`;

		theText.value = 'Anonymous';
		const editInformation = () => {
			const newNameAndPhoto = {
				newDisplayName: displayNameField.value
			};
			changeNameAndPhoto(user, newNameAndPhoto);
			
		}
		const changeNameAndPhoto = (user, newNameAndPhoto) => {
			const {newDisplayName} = newNameAndPhoto;
			if(newDisplayName !== 'Anonymous' && newDisplayName !== localStorage.getItem('disname')) {
				user.updateProfile({
					displayName: newDisplayName
				})
				.then(() => {
					document.getElementById('jinaHolder').innerText = displayNameField.value;
					localStorage.setItem('disname',newDisplayName);
					alert('Display Name Updated Successfully !');
				})
				.catch(error => {
					console.error(error);
				})
			} else {
				theText.focus();
			}
		}
		editButton.addEventListener('click', editInformation);
	}
});

const logOut = document.getElementById('logout');
logOut.addEventListener('click', () => {
    if(auth.currentUser.isAnonymous) {
		auth.currentUser.delete()
			.then(() => {
				window.location.assign('index');
			})
			.catch(error => {
				console.error(error);
			})
	} else {
		auth.signOut()
			.then(() => {
				window.location.assign('index');
			})
			.catch(error => {
				console.error(error);
			})
	}
})



fetch('https://ipapi.co/json/')
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		document.getElementById('footer-email').innerHTML = `
		Your IP address: ${data.ip}, ${data.city}, ${data.country_name}, ${data.org}, ${data.region}, ${data.country_calling_code}
		<img src="https://countryflagsapi.com/png/${data.country_code}" id="the-flag" />
    `;
	});


document.getElementById("thebodyz").oncontextmenu = function() {
	return false
};


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 1
setInterval(drawClock, 1000);

function drawClock() {
	drawFace(ctx, radius);
	drawNumbers(ctx, radius);
	drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
	var grad;
	ctx.beginPath();
	ctx.arc(0, 0, radius, 0, 2 * Math.PI);
	ctx.fillStyle = 'white';
	ctx.fill();
	grad = ctx.createRadialGradient(0, 0, radius * 0.05, 0, 0, radius * 2.5);
	grad.addColorStop(0, '#121d33');
	grad.addColorStop(0.5, 'rgba(0,0,0,0)');
	grad.addColorStop(1, '#121d33');
	ctx.strokeStyle = grad;
	ctx.lineWidth = radius * 0;
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
	ctx.fillStyle = '#121d33';
	ctx.fill();
}

function drawNumbers(ctx, radius) {
	var ang;
	var num;
	ctx.font = radius * 0.33 + "px arial";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	for (num = 1; num < 13; num++) {
		ang = num * Math.PI / 6;
		ctx.rotate(ang);
		ctx.translate(0, -radius * 0.87);
		ctx.rotate(-ang);
		ctx.fillText(num.toString(), 0, 0);
		ctx.rotate(ang);
		ctx.translate(0, radius * 0.87);
		ctx.rotate(-ang);
	}
}

function drawTime(ctx, radius) {
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	//hour
	hour = hour % 12;
	hour = (hour * Math.PI / 6) +
		(minute * Math.PI / (6 * 60)) +
		(second * Math.PI / (360 * 60));
	drawHand(ctx, hour, radius * 0.5, radius * 0.07);
	//minute
	minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
	drawHand(ctx, minute, radius * 0.8, radius * 0.07);
	// second
	second = (second * Math.PI / 30);
	drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.lineCap = "round";
	ctx.moveTo(0, 0);
	ctx.rotate(pos);
	ctx.lineTo(0, -length);
	ctx.stroke();
	ctx.rotate(-pos);
}


document.getElementById('you-sent').innerText = '$' + localStorage.getItem('received-funds').toLocaleString();