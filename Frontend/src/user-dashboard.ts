document.addEventListener('DOMContentLoaded', function () {

    if (!isLoggedIn()) {
        window.location.href = './landing.html';
    }

    const logoutButton = document.getElementById('logout');

    if (logoutButton) {
        logoutButton.addEventListener('click', function (e) {
            e.preventDefault();
            logoutUser();
        });
    }

    function isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    function logoutUser() {
        localStorage.removeItem('token');

        window.location.href = './landing.html';
    }
});