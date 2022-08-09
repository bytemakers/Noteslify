const signUp = async (formData) => {
    const response = await fetch('http://localhost:8181/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ email: formData.get('email'), username: formData.get('username'), password: formData.get('password') })
    });
    const json = await response.json();
    console.log(json);
};


const signupForm = document.getElementById('signup-form');


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(document.getElementById('signup-form'));
    // console.log(formData.get('username'));
    signUp(formData);
});