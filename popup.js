function saveOptions(e) {
  e.preventDefault();
  chrome.storage.local.set({
    revealDuration: document.getElementById('duration').value
  }, () => {
    window.close(); // Close the popup after saving
  });
}

function restoreOptions() {
  chrome.storage.local.get('revealDuration', (data) => {
    document.getElementById('duration').value = data.revealDuration || '5';
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('optionsForm').addEventListener('submit', saveOptions);
