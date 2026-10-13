function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

document.getElementById('bg-file').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const imageUrl = URL.createObjectURL(file);
        document.body.style.backgroundImage = `url('${imageUrl}')`;
        closeModal();
    }
});
