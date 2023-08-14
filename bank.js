document.getElementById('submit-btn').addEventListener('click', function () {
    // console.log('submit btn found');
    const emailElement = document.getElementById('user-email')
    const email = emailElement.value;
    // console.log(email);

    const passwordElement = document.getElementById('user-password');
    const password = passwordElement.value;
    // console.log(email, ',', password);

    if (email === 'sontan@baap.gmail.com' && password === 'sontan') {
        location.href = 'bank.html'
    }
    else {
        alert('Please type valid username or password.')

    }
})