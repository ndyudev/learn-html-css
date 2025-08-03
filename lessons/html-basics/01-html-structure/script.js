// Quiz functionality
function checkAnswer(questionId, correctAnswer) {
    const selectedAnswer = document.querySelector(`input[name="${questionId}"]:checked`);
    const resultDiv = document.getElementById(`result-${questionId}`);
    
    if (!selectedAnswer) {
        resultDiv.innerHTML = "⚠️ Vui lòng chọn một câu trả lời!";
        resultDiv.className = "result incorrect";
        return;
    }
    
    if (selectedAnswer.value === correctAnswer) {
        resultDiv.innerHTML = "✅ Chính xác! Bạn đã trả lời đúng.";
        resultDiv.className = "result correct";
    } else {
        resultDiv.innerHTML = "❌ Sai rồi! Hãy thử lại hoặc xem lại lý thuyết.";
        resultDiv.className = "result incorrect";
    }
}

// Add smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add code syntax highlighting
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        // Add line numbers
        const lines = block.textContent.split('\n');
        const lineNumbers = document.createElement('div');
        lineNumbers.className = 'line-numbers';
        
        lines.forEach((line, index) => {
            if (line.trim() !== '') {
                const lineNumber = document.createElement('span');
                lineNumber.textContent = index + 1;
                lineNumbers.appendChild(lineNumber);
            }
        });
        
        block.parentNode.insertBefore(lineNumbers, block);
    });
});

// Progress tracking
function updateProgress() {
    const currentLesson = 'html-structure';
    const progress = {
        lesson: currentLesson,
        completed: true,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('html-css-progress', JSON.stringify(progress));
}

// Mark lesson as completed
document.addEventListener('DOMContentLoaded', function() {
    const quizButtons = document.querySelectorAll('.btn-check');
    quizButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update progress when user completes quiz
            setTimeout(updateProgress, 1000);
        });
    });
}); 