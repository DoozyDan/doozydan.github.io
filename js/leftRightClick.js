import { getCurrentUrl, updateHistoryRecord } from 'swup';

const a = document.getElementById('left-Click');

if (getCurrentUrl() === 'dharma-gym-for-all-v1/index.html') {
    a.href = "dharma-gym-for-all-v1/contact.html"
}