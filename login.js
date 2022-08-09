const login = async (formData) => {
    const response = await fetch('http://localhost:8181/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ username: formData.get('username'), password: formData.get('password') })
    });
    const json = await response.json();
    console.log(json);
};



const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(document.getElementById('login-form'));
    // console.log(formData.get('username'));
    login(formData);
});