const logoutHandler = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'content-type': 'application/json' }
    });

    if(response.ok){
        document.location.replace('/login');
    } else {
        alert('Failed to logout');
    }
}

const button = document.querySelector('#logout');

button.addEventListener('click', logoutHandler);