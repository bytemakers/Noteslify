const homePageURL = "http://localhost:5500/notes.html";
if (sessionStorage.getItem('auth-token')) {
    window.location.href = homePageURL;
    window.location.replace(homePageURL);
}

const signUp = async (formData) => {
    const response = await fetch('http://localhost:8181/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ email: formData.get('email'), username: formData.get('username'), password: formData.get('password') })
    });
    const json = await response.json();
    // console.log(json);
    if (json.authtoken) {
        sessionStorage.setItem('auth-token', json.authtoken);
        // Redirect to home page
        window.location.href = homePageURL;
        window.location.replace(homePageURL);
    }
    else if (json.errors) {
        let allErrors = json.errors[0].msg;
        for (let i=1; i<json.errors.length; i++) {
            allErrors = allErrors + "\n" + json.errors[i].msg;
        }
        alert(allErrors);
    }
};


const signupForm = document.getElementById('signup-form');


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(document.getElementById('signup-form'));
    // console.log(formData.get('username'));
    signUp(formData);
});