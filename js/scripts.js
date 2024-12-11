let formButton = document.querySelector('.button__form');
let closeButton = document.querySelector('.close__modal');
console.log(formButton);

formButton.addEventListener('click', openModal);
closeButton.addEventListener('click', openModal);

function openModal() {
    let bodyModal = document.querySelector('.body__modal');

    console.log(bodyModal);
    document.body.classList.toggle('modal-open');
    bodyModal.classList.toggle('active');
}


document.getElementById('telegramForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const botToken = "7745390029:AAETLHLeQ9hhV8KhxqJdXhWijJi7Jdf5h-I"; // Укажите токен вашего бота
    const chatId = "557028962"; // Укажите ваш Chat ID

    const formData = new FormData();
    formData.append('chat_id', chatId);

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const file = document.getElementById('file').files[0];

    const text = `Имя: ${name}\nТелефон: ${phone}\nСообщение: ${message}`;
    formData.append('caption', text);

    if (file) {
        formData.append('document', file);
    } else {
        formData.append('text', text);
    }

    const url = file
        ? `https://api.telegram.org/bot${botToken}/sendDocument`
        : `https://api.telegram.org/bot${botToken}/sendMessage`;

    const notification = document.getElementById('notification');

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            showNotification('Сообщение успешно отправлено!', 'success');
            document.getElementById('telegramForm').reset();
        } else {
            showNotification('Ошибка отправки сообщения.', 'error');
        }
    } catch (error) {
        console.error('Ошибка:', error);
        showNotification('Ошибка при отправке.', 'error');
    }
});

function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = type;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000);

}
