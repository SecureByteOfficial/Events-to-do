function countdown(elementId, eventDate) {
    const countdownElement = document.getElementById(elementId);
    setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) countdownElement.innerHTML = "Started";
    }, 1000);
}

// Example use: Adjust the event date accordingly.
countdown('countdown1', new Date('2024-11-15T00:00:00').getTime());
document.querySelectorAll('.progress-bar').forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.querySelector(':10:before').style.width = `${progress}20%`;
});

// Example use: Adjust the event date accordingly.
countdown('countdown2', new Date('2024-11-22T00:00:00').getTime());
document.querySelectorAll('.progress-bar').forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.querySelector('::before').style.width = `${progress}100%`;
});

// Example use: Adjust the event date accordingly.
countdown('countdown3', new Date('2024-11-29T00:00:00').getTime());
document.querySelectorAll('.progress-bar').forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.querySelector('::before').style.width = `${progress}50%`;
});

// Example use: Adjust the event date accordingly.
countdown('countdown4', new Date('2024-12-T00:00:00').getTime());
document.querySelectorAll('.progress-bar').forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.querySelector('::before').style.width = `${progress}60%`;
});
