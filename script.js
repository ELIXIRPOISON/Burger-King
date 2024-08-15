function getRandomTime() {
    return Math.floor(Math.random() * 5000) + 2000; // Random time between 2 to 7 sec
}

function getRandomOrderId() {
    return Math.floor(Math.random() * 1000) + 100; // Random ID between 100 to 1099
}

document.getElementById('orderButton').addEventListener('click', function () {
    const selecteditems = [];
    const checkBoxes = document.getElementsByName('foodItem');

    checkBoxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            selecteditems.push(checkbox.value);
        }
    });

    if (selecteditems.length === 0) {
        alert("Please select at least one item");
        return;
    }

    const orderButton = document.getElementById('orderButton');
    orderButton.disabled = true;

    const foodImage = document.getElementById('foodImage');
    const orderIdElement = document.getElementById('orderId');
    const orderIdValueElement = document.getElementById('orderIdValue');
    const orderSound = document.getElementById('orderSound');

    orderIdElement.style.display = 'none';
    foodImage.style.display = 'none';

    const promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, getRandomTime());
    });

    promise.then(function () {
        const orderId = getRandomOrderId();
        orderIdValueElement.textContent = orderId;
        orderIdElement.style.display = 'block';
        orderSound.play(); // Play sound when order is ready

        const foodToShow = selecteditems[Math.floor(Math.random() * selecteditems.length)];

        switch (foodToShow) {
            case 'Burger':
                foodImage.src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60';
                break;
            case 'Fries':
                foodImage.src = 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60';
                break;
            case 'Drink':
                foodImage.src = 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60';
                break;
            default:
                foodImage.src = 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60';
        }

        foodImage.style.display = 'block';
        orderButton.disabled = false;

        // Show feedback section after order is displayed
        const feedbackContainer = document.getElementById('feedbackContainer');
        feedbackContainer.style.display = 'block';

        // Add event listener for feedback submission
        document.getElementById('submitFeedback').addEventListener('click', function () {
            const feedback = document.getElementById('feedback').value;
            if (feedback.trim() === '') {
                alert('Please enter your feedback');
            } else {
                alert('Thank you for your feedback!');
                document.getElementById('feedbackSound').play(); // Play feedback submission sound
                feedbackContainer.style.display = 'none';
            }
        });
    });
});
