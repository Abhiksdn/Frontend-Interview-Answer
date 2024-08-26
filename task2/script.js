function showToast(message, type) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerText = message;
    toastContainer.appendChild(toast);
}


function showSuccessToast(message) {
    showToast(message, 'success');
}
function showWarningToast(message) {
    showToast(message, 'warning');
}
function showErrorToast(message) {
    showToast(message, 'error');
}
