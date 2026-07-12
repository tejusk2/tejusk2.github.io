document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');
    const desktop = document.querySelector('.desktop');

    // Deselect all icons
    const deselectAll = () => {
        icons.forEach(icon => icon.classList.remove('selected'));
    };

    // Handle single click to select an icon
    icons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent document click from firing
            deselectAll();
            icon.classList.add('selected');
        });

        // Handle double click to "open" the application
        icon.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            const href = icon.getAttribute('data-href');
            const title = icon.querySelector('.icon-label').textContent;
            if (href) {
                openWindow(href, title);
            }
        });

        // Optional: Support "Enter" key for opening when focused
        icon.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const href = icon.getAttribute('data-href');
                const title = icon.querySelector('.icon-label').textContent;
                if (href) {
                    openWindow(href, title);
                }
            }
        });
    });

    const appWindow = document.getElementById('app-window');
    const appIframe = document.getElementById('app-iframe');
    const windowTitle = document.querySelector('.window-title');
    const windowClose = document.querySelector('.window-close');

    const openWindow = (href, title) => {
        appIframe.src = href;
        windowTitle.textContent = title;
        appWindow.classList.remove('hidden');
    };

    windowClose.addEventListener('click', () => {
        appWindow.classList.add('hidden');
        appIframe.src = ''; // Clear iframe contents when closed
    });


    // Deselect icons when clicking on the desktop background
    desktop.addEventListener('click', () => {
        deselectAll();
    });

    // Taskbar Clock
    const clockElement = document.getElementById('clock');
    const updateClock = () => {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        clockElement.textContent = `${hours}:${minutes} ${ampm}`;
    };
    setInterval(updateClock, 1000);
    updateClock();

    // Typewriter effect
    const typewriterText = document.getElementById('typewriter-text');
    const messages = ["Welcome to my portfolio.", "Feel free to explore.", "Double click an icon to begin."];
    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
        const currentMessage = messages[messageIndex];
        
        if (isDeleting) {
            typewriterText.textContent = currentMessage.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterText.textContent = currentMessage.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = 100;
        if (isDeleting) {
            typeSpeed /= 2; // Delete faster
        }

        if (!isDeleting && charIndex === currentMessage.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            messageIndex = (messageIndex + 1) % messages.length;
            typeSpeed = 500; // Pause before start next
        }

        setTimeout(type, typeSpeed);
    };
    
    // Start typewriter
    setTimeout(type, 1000);
});
