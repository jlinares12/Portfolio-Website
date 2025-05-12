document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('success')) {
      showNotification();
      // Clean the URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  });

  function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('hidden');

    // Auto-hide after 5 seconds
    setTimeout(() => {
      hideNotification();
    }, 5000);
  }

  function hideNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('hidden');
  }

  // Close button event
  document.querySelector('.close-notification').addEventListener('click', hideNotification);