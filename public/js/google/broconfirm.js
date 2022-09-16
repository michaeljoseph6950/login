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

const logoHolder = document.getElementById("logo");
const avatarHolder = document.getElementById("avatar");
const jinaHolder = document.getElementById("jinaHolder");
const jinaHolder2 = document.getElementById("jinaHolder2");

const yourEmail = document.getElementById('yourEmail');
const yourPhone = document.getElementById('yourPhone');

const emailInvoice = document.getElementById('email-invoice');
const phoneInvoice = document.getElementById('phone-invoice');
const anonInvoice = document.getElementById('anon-invoice');

const theText = document.getElementById('text');
const displayNameField = document.getElementById('text');
const editButton = document.getElementById('copy');

const mailField = document.getElementById('exampleInputEmail');
const signUp = document.getElementById('signUp');

const phoneNumberField = document.getElementById('phoneNumber');
const codeField = document.getElementById('code');
const signInWithPhoneButton = document.getElementById('signInWithPhone');
const getCodeButton = document.getElementById('getCode');


const auth = firebase.auth();


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
		emailInvoice.style.display = 'flex';
		yourEmail.innerText = user.email;

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
		emailInvoice.style.display = 'flex';
		yourEmail.innerText = user.email;

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
		phoneInvoice.style.display = 'flex';
		yourPhone.innerText = user.phoneNumber;

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
		phoneInvoice.style.display = 'flex';
		yourPhone.innerText = user.phoneNumber;

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
	} else	if (user.isAnonymous && user.displayName) {
		jinaHolder.innerText = user.displayName;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		anonInvoice.style.display = 'flex';

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
	} else	if (user.isAnonymous && !user.displayName) {
		jinaHolder.innerText = 'Anonymous';
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		anonInvoice.style.display = 'flex';

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




const sendVerificationEmail = () => {
	auth.currentUser.sendEmailVerification()
}

const signUpFunction = () => {
	event.preventDefault();
	const email = mailField.value;
	var actionCodeSettings = {
		url: 'https://www.logins.id/confirm',
		handleCodeInApp: true,
	};
	if(email.includes('@gmail.com')) {
		const googleProvider = new firebase.auth.GoogleAuthProvider;
		auth.signInWithPopup(googleProvider).then(() => {
			sendVerificationEmail();
			window.location.reload();
		}).catch(error => {
			alert(error.message)
		});
	} else if(email.includes('@yahoo.com')) {
		const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
		auth.signInWithPopup(yahooProvider).then(() => {
			sendVerificationEmail();
			window.location.reload();
		}).catch(error => {
			alert(error.message);
		})
	} else {
		auth.sendSignInLinkToEmail(email, actionCodeSettings)
		.then(() => {
			alert('Verification link sent to your email ' + email + " check the spam / junk folder");
			window.localStorage.setItem('emailForSignIn', email);
		})
		.catch(error => {
			alert(error.message);
		});
	}
}
signUp.addEventListener('click', signUpFunction);
document.getElementById('the-form').addEventListener('submit', signUpFunction);


if (auth.isSignInWithEmailLink(window.location.href)) {
	var email = window.localStorage.getItem('emailForSignIn');
	if (!email) {
		localStorage.setItem('the-email', true)
		email = window.prompt('Enter your email for confirmation');
	}
	auth.signInWithEmailLink(email, window.location.href)
		.then((result) => {
			if (localStorage.getItem('the-email')) {
				sendVerificationEmail();
				window.location.reload();
			} else {
				alert('Return to previous tab, email has been confirmed');
				sendVerificationEmail();
				window.close();
			}
		})
		.catch((error) => {
			console.log('Wrong email entered')
		});
}





window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
recaptchaVerifier.render().then(widgetId => {
	window.recaptchaWidgetId = widgetId;
})
const sendVerificationCode = () => {
	const phoneNumber = phoneNumberField.value;
	const appVerifier = window.recaptchaVerifier;

	auth.signInWithPhoneNumber(phoneNumber, appVerifier)
		.then(confirmationResult => {
			const sentCodeId = confirmationResult.verificationId;
			signInWithPhoneButton.addEventListener('click', () => signInWithPhone(sentCodeId));
		})
}
const signInWithPhone = sentCodeId => {
	const code = codeField.value;
	const credential = firebase.auth.PhoneAuthProvider.credential(sentCodeId, code);
	auth.signInWithCredential(credential)
		.then(() => {
			window.location.reload();
		})
		.catch(error => {
			alert(error.message);
		})
}
getCodeButton.addEventListener('click', sendVerificationCode);

fetch('https://ipapi.co/json/')
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		document.getElementById('the-flag').src = `https://countryflagsapi.com/png/${data.country_code}`;
		document.getElementById('phoneNumber').value = data.country_calling_code;
	});

$('#myform').on('submit', function(ev) {
	$('#coModal').modal('show');
	$('#phoneModal').modal('hide');
	ev.preventDefault();
});











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