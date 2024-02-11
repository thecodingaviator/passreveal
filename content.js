document.addEventListener('click', function (e) {
    let el = e.target;
    if (el.tagName.toLowerCase() === 'input' && el.type === 'password') {
        chrome.storage.local.get('revealDuration', (data) => {
            const duration = parseInt(data.revealDuration, 10);
            el.type = 'text';
            if (duration > 0) {
                setTimeout(() => { el.type = 'password'; }, duration * 1000);
            }
            // If duration is 0, the field stays as text indefinitely
        });
    }
}, false);
