const homePageURL = "http://localhost:5500/notes.html";
if (sessionStorage.getItem('auth-token')) {
    window.location.href = homePageURL;
    window.location.replace(homePageURL);
}

const login = async (formData) => {
    const response = await fetch('http://localhost:8181/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ username: formData.get('username'), password: formData.get('password') })
    });
    const json = await response.json();
    // console.log(json);
    if (json.authtoken) {
        sessionStorage.setItem('auth-token', json.authtoken);
        // Redirect to home page
        window.location.href = homePageURL;
        window.location.replace(homePageURL);
    }
    else {
        alert('Invalid Credentials!');
    }
};



const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(document.getElementById('login-form'));
    // console.log(formData.get('username'));
    login(formData);
});