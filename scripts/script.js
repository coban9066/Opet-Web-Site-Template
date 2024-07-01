"use strict";
feather.replace();
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('sendButton');
    const messageContainer = document.getElementById('messageContainer');

    button.addEventListener('click', () => {
        messageContainer.textContent = 'Mesaj gönderildi';
    });
});
