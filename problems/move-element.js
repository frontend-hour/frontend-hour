function moveElement(duration, distance, element) {
    let startTime = performance.now();

    function move(currentTime) {
        let timeElapsed = currentTime - startTime;
        let progress = timeElapsed / duration;
        let distanceToMove = distance * progress;
        element.style.transform = `translateX(${distanceToMove}px)`;

        if(progress < 1) {
            requestAnimationFrame(move);
        }
    }

    move(performance.now());
}

moveElement(3000, 600, document.getElementsByClassName('move-emoji')[0]);