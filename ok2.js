document.getElementById('bg-file').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const imageUrl = URL.createObjectURL(file);
        document.body.style.backgroundImage = `url('${imageUrl}')`;
    }
});
