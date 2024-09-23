document.addEventListener("DOMContentLoaded", () => {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        const randomDegree = Math.random() * 2 - 1; // Random degree between -2 and 2
        item.style.transform = `rotate(${randomDegree}deg)`;

        // Add hover event listener to reset rotation
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'rotate(0deg)'; // Reset rotation on hover
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = `rotate(${randomDegree}deg)`; // Restore random rotation
        });
    });

    const skills = ['creative coder', 'web designer', 'multidisciplinary artist', 'graphic designer'];
    const skillSpans = document.querySelectorAll('.skills');
    const skillTexts = document.querySelectorAll('.skill-text');
    let index = 0;

    function changeSkill() {
        skillTexts.forEach(skillText => {
            // Remove blur
            setTimeout(() => {
                skillText.classList.remove('blur');
            }, 10);
    
            // Set new skill text and add blur
            skillText.textContent = skills[index];
            setTimeout(() => {
                skillText.classList.add('blur');
            }, 1000);
        });
    
        // Update index for next skill
        index = (index + 1) % skills.length; // Loop back to the beginning when reaching the end
    }
    
    // Initial call to set the first skill
    changeSkill();
    
    // Set interval to change skill every 1.5 seconds (adjust as needed)
    setInterval(changeSkill, 1500);
    
    // Select the details element
    const details = document.querySelector('.details');
    
    // Function to hide details on scroll with blur effect
    function handleScroll() {
        // Check if the page is scrolled vertically
        if (window.scrollY > 35) {
            details.classList.add('blur-and-hide'); // Apply blur and hide details on scroll
        } else {
            details.classList.remove('blur-and-hide'); // Remove blur and show details when at the top
        }
    }
    
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
    
    
    document.querySelectorAll('.thumbnail').forEach(thumbnail => {
        const circle = thumbnail.querySelector('.circle');
        const text = circle.querySelector('.text');
    
        thumbnail.addEventListener('mouseenter', () => {
            // Calculate the width of the text
            const textWidth = text.scrollWidth + 0; // Adding padding/border if needed
            circle.style.width = `${textWidth}px`; // Set the circle width based on text
        });
    
        thumbnail.addEventListener('mouseleave', () => {
            circle.style.width = '1.8vw'; // Reset the width
        });
    });
    
    let mouseMoveCounter = 0;
const maxPoints = 5; // Maximum number of projpoints to keep

// Function to create projpoint divs
function createProjPoint(x, y) {
    const mousepoints = document.createElement('div');
    mousepoints.classList.add('projpoints');
    mousepoints.style.position = 'absolute';
    mousepoints.style.left = `${x}px`;
    mousepoints.style.top = `${y}px`;
    mousepoints.style.zIndex = `-100`;
    document.body.appendChild(mousepoints);

    // Set a timeout to apply styles for fade-out
    setTimeout(() => {
        mousepoints.style.transition = 'opacity 0.5s, filter 0.5s'; // Transition for fade-out
        mousepoints.style.opacity = '0'; // Fade-out opacity
        mousepoints.style.filter = 'blur(6px)';

        // Remove the projpoint after the fade-out
        setTimeout(() => {
            if (mousepoints.parentNode) {
                document.body.removeChild(mousepoints);
            }
        }, 300); // Match this timeout to transition duration
    }, 1300); // Adjust to keep the point visible for a brief time before fade-out

    // Remove old projpoints if exceeding maxPoints
    const points = document.body.querySelectorAll('.projpoints');
    if (points.length > maxPoints) {
        const oldestPoint = points[0];
        oldestPoint.style.transition = 'opacity 0.5s, filter 0.5s';
        oldestPoint.style.opacity = '0'; // Fade-out oldest point
        oldestPoint.style.filter = 'blur(6px)';

        setTimeout(() => {
            if (oldestPoint.parentNode) {
                document.body.removeChild(oldestPoint);
            }
        }, 300); // Ensure it matches the fade-out timing
    }
}

// Event listener for mousemove to draw projpoints
document.body.addEventListener('mousemove', (event) => {
    mouseMoveCounter++;

    // Draw projpoint every 15th mousemove
    if (mouseMoveCounter % 15 === 0) {
        const mouseX = event.clientX + window.scrollX; // Adjust for horizontal scroll
        const mouseY = event.clientY + window.scrollY; // Adjust for vertical scroll

        createProjPoint(mouseX, mouseY);
    }
});





});


