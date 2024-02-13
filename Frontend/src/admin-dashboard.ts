
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

    const newProjectButton = document.getElementById('newProject');

    if (newProjectButton) {
        newProjectButton.addEventListener('click', function (e) {
            e.preventDefault();
            redirectToProjectsForm();
        });
    }

    function isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    function logoutUser() {
        localStorage.removeItem('token');

        window.location.href = './landing.html';
    }

    function redirectToProjectsForm() {
        window.location.href = './projectForm.html';
    }
});
