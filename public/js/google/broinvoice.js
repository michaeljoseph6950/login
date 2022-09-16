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

const text2 = document.getElementById('text2');
const theMail = document.getElementById('email3');
const theId = document.getElementById('the-id');
const thePic = document.getElementById('the-pic');
const thenoPic = document.getElementById('the-nopic');
const theDate = document.getElementById('the-date');


const labelMail = document.getElementById('label-mail');
const labelName = document.getElementById('label-name');

const displayNameField2 = document.getElementById('text2');
const editButton2 = document.getElementById('copy2');

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
		thePic.setAttribute("src", user.photoURL);
		thePic.style.display = 'inline-block';
	} else if (!user.photoURL) {
		logoHolder.style.display = 'block';
		thenoPic.style.display = 'inline-block';
	}
	if (user.displayName && user.email) {
		jinaHolder.innerText = user.displayName;
		jinaHolder2.innerText = 'User ID: ' + user.uid;

		text2.value = user.displayName;
		theMail.value = user.email;
		labelName.innerText = "Your Name:";
		labelMail.innerText = "Your Email:";

		const editInformation2 = () => {
			const newNameAndPhoto2 = {
				newDisplayName2: displayNameField2.value
			};
			const user2 = auth.currentUser;
			changeNameAndPhoto2(user2, newNameAndPhoto2);
			
		}
		const changeNameAndPhoto2 = (user2, newNameAndPhoto2) => {
			const {newDisplayName2} = newNameAndPhoto2;
			if(newDisplayName2 !== user.displayName  && newDisplayName2 !== localStorage.getItem('disname')) {
				user2.updateProfile({
					displayName: newDisplayName2
				})
				.then(() => {
					document.getElementById('jinaHolder').innerText = displayNameField2.value;
					localStorage.setItem('disname',newDisplayName2);
					alert('Display Name Updated Successfully !');
				})
				.catch(error => {
					console.error(error);
				})
			} else {
				document.getElementById("text2").focus();
			}
		}
		editButton2.addEventListener('click', editInformation2);


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

		text2.value = theaddress;
		theMail.value = user.email;
		labelName.innerText = "Your Name:";
		labelMail.innerText = "Your Email:";

		const editInformation2 = () => {
			const newNameAndPhoto2 = {
				newDisplayName2: displayNameField2.value
			};
			const user2 = auth.currentUser;
			changeNameAndPhoto2(user2, newNameAndPhoto2);
			
		}
		const changeNameAndPhoto2 = (user2, newNameAndPhoto2) => {
			const {newDisplayName2} = newNameAndPhoto2;
			if(newDisplayName2 !== theaddress  && newDisplayName2 !== localStorage.getItem('disname')) {
				user2.updateProfile({
					displayName: newDisplayName2
				})
				.then(() => {
					document.getElementById('jinaHolder').innerText = displayNameField2.value;
					localStorage.setItem('disname',newDisplayName2);
					alert('Display Name Updated Successfully !');
				})
				.catch(error => {
					console.error(error);
				})
			} else {
				document.getElementById("text2").focus();
			}
		}
		editButton2.addEventListener('click', editInformation2);

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

		text2.value = user.displayName;
		theMail.value = user.phoneNumber;
		labelName.innerText = "Your Display Name:";
		labelMail.innerText = "Your Phone Number:";

		const editInformation2 = () => {
			const newNameAndPhoto2 = {
				newDisplayName2: displayNameField2.value
			};
			const user2 = auth.currentUser;
			changeNameAndPhoto2(user2, newNameAndPhoto2);
			
		}
		const changeNameAndPhoto2 = (user2, newNameAndPhoto2) => {
			const {newDisplayName2} = newNameAndPhoto2;
			if(newDisplayName2 !== user.displayName  && newDisplayName2 !== localStorage.getItem('disname')) {
				user2.updateProfile({
					displayName: newDisplayName2
				})
				.then(() => {
					document.getElementById('jinaHolder').innerText = displayNameField2.value;
					localStorage.setItem('disname',newDisplayName2);
					alert('Display Name Updated Successfully !');
				})
				.catch(error => {
					console.error(error);
				})
			} else {
				document.getElementById("text2").focus();
			}
		}
		editButton2.addEventListener('click', editInformation2);


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
	}  else if(user.phoneNumber && !user.displayName) {
		jinaHolder.innerText = user.phoneNumber;
		jinaHolder2.innerText = 'User ID: ' + user.uid;

		text2.value = user.phoneNumber;
		theMail.value = user.phoneNumber;
		labelName.innerText = "Your Display Name:";
		labelMail.innerText = "Your Phone Number:";

		const editInformation2 = () => {
			const newNameAndPhoto2 = {
				newDisplayName2: displayNameField2.value
			};
			const user2 = auth.currentUser;
			changeNameAndPhoto2(user2, newNameAndPhoto2);
			
		}
		const changeNameAndPhoto2 = (user2, newNameAndPhoto2) => {
			const {newDisplayName2} = newNameAndPhoto2;
			if(newDisplayName2 !== user.phoneNumber  && newDisplayName2 !== localStorage.getItem('disname')) {
				user2.updateProfile({
					displayName: newDisplayName2
				})
				.then(() => {
					document.getElementById('jinaHolder').innerText = displayNameField2.value;
					localStorage.setItem('disname',newDisplayName2);
					alert('Display Name Updated Successfully !');
				})
				.catch(error => {
					console.error(error);
				})
			} else {
				document.getElementById("text2").focus();
			}
		}
		editButton2.addEventListener('click', editInformation2);


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
	} else if(user.isAnonymous && user.displayName) {
		jinaHolder.innerText = user.displayName;
		jinaHolder2.innerText = 'User ID: ' + user.uid;

		text2.value = user.displayName;
		theMail.value = '**Logged in anonymously**';
		labelName.innerText = "Your Display Name:";
		labelMail.innerText = "Your Email:";

		document.getElementById('mail').style.display = 'none';

		const editInformation2 = () => {
			const newNameAndPhoto2 = {
				newDisplayName2: displayNameField2.value
			};
			const user2 = auth.currentUser;
			changeNameAndPhoto2(user2, newNameAndPhoto2);
			
		}
		const changeNameAndPhoto2 = (user2, newNameAndPhoto2) => {
			const {newDisplayName2} = newNameAndPhoto2;
			if(newDisplayName2 !== user.displayName  && newDisplayName2 !== localStorage.getItem('disname')) {
				user2.updateProfile({
					displayName: newDisplayName2
				})
				.then(() => {
					document.getElementById('jinaHolder').innerText = displayNameField2.value;
					localStorage.setItem('disname',newDisplayName2);
					alert('Display Name Updated Successfully !');
				})
				.catch(error => {
					console.error(error);
				})
			} else {
				document.getElementById("text2").focus();
			}
		}
		editButton2.addEventListener('click', editInformation2);


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
	} else if(user.isAnonymous && !user.displayName) {
		jinaHolder.innerText = 'Anonymous';
		jinaHolder2.innerText = 'User ID: ' + user.uid;

		text2.value = 'Anonymous';
		theMail.value = '**Logged in anonymously**';
		labelName.innerText = "Your Display Name:";
		labelMail.innerText = "Your Email:";

		document.getElementById('mail').style.display = 'none';

		const editInformation2 = () => {
			const newNameAndPhoto2 = {
				newDisplayName2: displayNameField2.value
			};
			const user2 = auth.currentUser;
			changeNameAndPhoto2(user2, newNameAndPhoto2);
			
		}
		const changeNameAndPhoto2 = (user2, newNameAndPhoto2) => {
			const {newDisplayName2} = newNameAndPhoto2;
			if(newDisplayName2 !== 'Anonymous' && newDisplayName2 !== localStorage.getItem('disname')) {
				user2.updateProfile({
					displayName: newDisplayName2
				})
				.then(() => {
					document.getElementById('jinaHolder').innerText = displayNameField2.value;
					localStorage.setItem('disname',newDisplayName2);
					alert('Display Name Updated Successfully !');
				})
				.catch(error => {
					console.error(error);
				})
			} else {
				document.getElementById("text2").focus();
			}
		}
		editButton2.addEventListener('click', editInformation2);


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

	if(user.uid){
		theId.value = user.uid;
		theDate.value = new Date(user.metadata.b * 1);
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


document.getElementById('photo').addEventListener('change', (event) => {
	const file = event.target.files[0];
	const storageRef = firebase.storage().ref('profiles/images' + file.name);
	storageRef.put(file).on('state_changed', (snapshot) => {
		const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
		const progressBar_2 = document.getElementsByClassName('bg-bro')[0];
		progressBar_2.style.width = progress +'%';
		document.getElementById('escoz-2').innerHTML = 'Upload Progress: ' + progress + '%';
	}, (err) => {
		console.log('an error has occurred')
	}, async () => {
		const url = await storageRef.getDownloadURL();

        const user = auth.currentUser;
        user.updateProfile({
            photoURL: url
        })
        .then(() => {
            avatarHolder.setAttribute("src", user.photoURL);
			avatarHolder.style.display = 'block';
			logoHolder.style.display = 'none';
            alert('Profile Picture Updated Successfully !');
        })
        .catch(error => {
            console.error(error);
        })
	});
});



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





















var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");
var radius2 = canvas2.height / 2;
ctx2.translate(radius2, radius2);
radius2 = radius2 * 1
setInterval(drawClock2, 1000);

function drawClock2() {
	drawFace2(ctx2, radius2);
	drawNumbers2(ctx2, radius2);
	drawTime2(ctx2, radius2);
}

function drawFace2(ctx2, radius2) {
	var grad2;
	ctx2.beginPath();
	ctx2.arc(0, 0, radius2, 0, 2 * Math.PI);
	ctx2.fillStyle = 'white';
	ctx2.fill();
	grad2 = ctx2.createRadialGradient(0, 0, radius2 * 0.05, 0, 0, radius2 * 2.5);
	grad2.addColorStop(0, '#121d33');
	grad2.addColorStop(0.5, 'rgba(0,0,0,0)');
	grad2.addColorStop(1, '#121d33');
	ctx2.strokeStyle = grad2;
	ctx2.lineWidth = radius2 * 0;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.arc(0, 0, radius2 * 0.1, 0, 2 * Math.PI);
	ctx2.fillStyle = '#121d33';
	ctx2.fill();
}

function drawNumbers2(ctx2, radius2) {
	var ang2;
	var num2;
	ctx2.font = radius2 * 0.33 + "px arial";
	ctx2.textBaseline = "middle";
	ctx2.textAlign = "center";
	for (num2 = 1; num2 < 13; num2++) {
		ang2 = num2 * Math.PI / 6;
		ctx2.rotate(ang2);
		ctx2.translate(0, -radius2 * 0.87);
		ctx2.rotate(-ang2);
		ctx2.fillText(num2.toString(), 0, 0);
		ctx2.rotate(ang2);
		ctx2.translate(0, radius2 * 0.87);
		ctx2.rotate(-ang2);
	}
}

function drawTime2(ctx2, radius2) {
	var now2 = new Date();
	var hour2 = now2.getHours();
	var minute2 = now2.getMinutes();
	var second2 = now2.getSeconds();
	//hour
	hour2 = hour2 % 12;
	hour2 = (hour2 * Math.PI / 6) +
		(minute2 * Math.PI / (6 * 60)) +
		(second2 * Math.PI / (360 * 60));
	drawHand2(ctx2, hour2, radius2 * 0.5, radius2 * 0.07);
	//minute
	minute2 = (minute2 * Math.PI / 30) + (second2 * Math.PI / (30 * 60));
	drawHand2(ctx2, minute2, radius2 * 0.8, radius2 * 0.07);
	// second
	second2 = (second2 * Math.PI / 30);
	drawHand2(ctx2, second2, radius2 * 0.9, radius2 * 0.02);
}

function drawHand2(ctx, pos, length, width) {
	ctx2.beginPath();
	ctx2.lineWidth = width;
	ctx2.lineCap = "round";
	ctx2.moveTo(0, 0);
	ctx2.rotate(pos);
	ctx2.lineTo(0, -length);
	ctx2.stroke();
	ctx2.rotate(-pos);
}
