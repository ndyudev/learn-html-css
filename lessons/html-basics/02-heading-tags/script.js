// Import base quiz functionality
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

// Heading hierarchy interactive demo
document.addEventListener('DOMContentLoaded', function() {
    // Add interactive features to heading examples
    const headingExamples = document.querySelectorAll('.h1-example, .h2-example, .h3-example, .h4-example, .h5-example, .h6-example');
    
    headingExamples.forEach(example => {
        example.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
        
        // Add hover effect
        example.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
        });
        
        example.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
    
    // Add code highlighting for HTML examples
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        // Highlight HTML tags
        let html = block.innerHTML;
        html = html.replace(/&lt;/g, '<span style="color: #e53e3e;">&lt;</span>');
        html = html.replace(/&gt;/g, '<span style="color: #e53e3e;">&gt;</span>');
        html = html.replace(/(&lt;[^&]*&gt;)/g, '<span style="color: #3182ce;">$1</span>');
        block.innerHTML = html;
    });
    
    // Add progress tracking
    const quizButtons = document.querySelectorAll('.btn-check');
    quizButtons.forEach(button => {
        button.addEventListener('click', function() {
            setTimeout(updateProgress, 1000);
        });
    });
});

// Progress tracking for heading tags lesson
function updateProgress() {
    const currentLesson = 'heading-tags';
    const progress = {
        lesson: currentLesson,
        completed: true,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('html-css-progress', JSON.stringify(progress));
    
    // Show completion message
    const completionMessage = document.createElement('div');
    completionMessage.className = 'completion-message';
    completionMessage.innerHTML = `
        <div style="background: #c6f6d5; color: #22543d; padding: 1rem; border-radius: 8px; margin: 1rem 0; text-align: center;">
            🎉 Chúc mừng! Bạn đã hoàn thành bài học về Heading Tags!
        </div>
    `;
    
    const lessonContent = document.querySelector('.lesson-content');
    lessonContent.appendChild(completionMessage);
}

// Add smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
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
});

// Add keyboard navigation for quiz
document.addEventListener('keydown', function(e) {
    if (e.key >= '1' && e.key <= '4') {
        const activeQuiz = document.querySelector('.quiz:focus-within');
        if (activeQuiz) {
            const options = activeQuiz.querySelectorAll('input[type="radio"]');
            const selectedIndex = parseInt(e.key) - 1;
            if (options[selectedIndex]) {
                options[selectedIndex].checked = true;
            }
        }
    }
}); 