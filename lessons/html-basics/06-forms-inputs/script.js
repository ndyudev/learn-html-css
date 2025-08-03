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

// Interactive features for forms and inputs
document.addEventListener('DOMContentLoaded', function() {
    // Add interactive features to input examples
    const inputTypes = document.querySelectorAll('.input-type');
    
    inputTypes.forEach(inputType => {
        inputType.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
        
        // Add hover effect
        inputType.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        });
        
        inputType.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        });
    });
    
    // Add interactive features to selection examples
    const selectionExamples = document.querySelectorAll('.selection-example');
    
    selectionExamples.forEach(example => {
        example.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    // Add interactive features to advanced examples
    const advancedExamples = document.querySelectorAll('.advanced-example');
    
    advancedExamples.forEach(example => {
        example.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    // Add interactive features to validation examples
    const validationExamples = document.querySelectorAll('.validation-example');
    
    validationExamples.forEach(example => {
        example.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
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
    
    // Create interactive demo
    createInteractiveDemo();
    
    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
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
    
    // Add form validation demo
    setupFormValidation();
});

// Create interactive demo section
function createInteractiveDemo() {
    const demoContainer = document.createElement('div');
    demoContainer.className = 'interactive-demo';
    demoContainer.innerHTML = `
        <h3>🎮 Demo Tương Tác - Forms & Inputs</h3>
        <p>Thử nghiệm các loại input và validation khác nhau</p>
        <div class="demo-buttons">
            <button onclick="showFormDemo()" class="demo-button">
                📝 Xem Demo Form
            </button>
            <button onclick="showValidationDemo()" class="demo-button">
                ✅ Xem Demo Validation
            </button>
            <button onclick="showInputDemo()" class="demo-button">
                🔤 Xem Demo Input Types
            </button>
        </div>
        <div id="demo-content" style="margin-top: 2rem;"></div>
    `;
    
    // Insert demo after theory section
    const theorySection = document.querySelector('.theory-section');
    theorySection.appendChild(demoContainer);
}

// Show form demo
function showFormDemo() {
    const demoContent = document.getElementById('demo-content');
    demoContent.innerHTML = `
        <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 10px; margin-top: 1rem;">
            <h4 style="margin-bottom: 1rem;">📝 Demo Form Đăng Ký</h4>
            <form style="max-width: 400px; margin: 0 auto;">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; color: white;">Họ và tên:</label>
                    <input type="text" placeholder="Nhập họ tên" style="width: 100%; padding: 0.75rem; border: 1px solid rgba(255,255,255,0.3); border-radius: 5px; background: rgba(255,255,255,0.1); color: white;">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; color: white;">Email:</label>
                    <input type="email" placeholder="example@email.com" style="width: 100%; padding: 0.75rem; border: 1px solid rgba(255,255,255,0.3); border-radius: 5px; background: rgba(255,255,255,0.1); color: white;">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; color: white;">Mật khẩu:</label>
                    <input type="password" placeholder="Nhập mật khẩu" style="width: 100%; padding: 0.75rem; border: 1px solid rgba(255,255,255,0.3); border-radius: 5px; background: rgba(255,255,255,0.1); color: white;">
                </div>
                <button type="submit" style="background: rgba(255,255,255,0.2); color: white; border: 2px solid rgba(255,255,255,0.3); padding: 0.75rem 2rem; border-radius: 25px; width: 100%; cursor: pointer;">Đăng Ký</button>
            </form>
        </div>
    `;
}

// Show validation demo
function showValidationDemo() {
    const demoContent = document.getElementById('demo-content');
    demoContent.innerHTML = `
        <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 10px; margin-top: 1rem;">
            <h4 style="margin-bottom: 1rem;">✅ Demo Validation</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; color: white;">Required Field:</label>
                    <input type="text" placeholder="Bắt buộc nhập" required style="width: 100%; padding: 0.75rem; border: 1px solid rgba(255,255,255,0.3); border-radius: 5px; background: rgba(255,255,255,0.1); color: white;">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; color: white;">Min Length (3):</label>
                    <input type="text" placeholder="Tối thiểu 3 ký tự" minlength="3" style="width: 100%; padding: 0.75rem; border: 1px solid rgba(255,255,255,0.3); border-radius: 5px; background: rgba(255,255,255,0.1); color: white;">
                </div>
            </div>
        </div>
    `;
}

// Show input types demo
function showInputDemo() {
    const demoContent = document.getElementById('demo-content');
    demoContent.innerHTML = `
        <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 10px; margin-top: 1rem;">
            <h4 style="margin-bottom: 1rem;">🔤 Demo Input Types</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; color: white;">Text:</label>
                    <input type="text" placeholder="Text input" style="width: 100%; padding: 0.75rem; border: 1px solid rgba(255,255,255,0.3); border-radius: 5px; background: rgba(255,255,255,0.1); color: white;">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; color: white;">Email:</label>
                    <input type="email" placeholder="Email input" style="width: 100%; padding: 0.75rem; border: 1px solid rgba(255,255,255,0.3); border-radius: 5px; background: rgba(255,255,255,0.1); color: white;">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; color: white;">Number:</label>
                    <input type="number" placeholder="Number input" style="width: 100%; padding: 0.75rem; border: 1px solid rgba(255,255,255,0.3); border-radius: 5px; background: rgba(255,255,255,0.1); color: white;">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; color: white;">Date:</label>
                    <input type="date" style="width: 100%; padding: 0.75rem; border: 1px solid rgba(255,255,255,0.3); border-radius: 5px; background: rgba(255,255,255,0.1); color: white;">
                </div>
            </div>
        </div>
    `;
}

// Setup form validation demo
function setupFormValidation() {
    const inputs = document.querySelectorAll('input[required], input[minlength], input[pattern]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(this);
        });
        
        input.addEventListener('input', function() {
            clearValidation(this);
        });
    });
}

// Validate individual input
function validateInput(input) {
    const value = input.value.trim();
    
    if (input.hasAttribute('required') && !value) {
        showValidationError(input, 'Trường này là bắt buộc');
        return false;
    }
    
    if (input.hasAttribute('minlength')) {
        const minLength = parseInt(input.getAttribute('minlength'));
        if (value.length < minLength) {
            showValidationError(input, `Tối thiểu ${minLength} ký tự`);
            return false;
        }
    }
    
    if (input.hasAttribute('pattern')) {
        const pattern = new RegExp(input.getAttribute('pattern'));
        if (!pattern.test(value)) {
            showValidationError(input, 'Định dạng không đúng');
            return false;
        }
    }
    
    if (input.type === 'email' && value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            showValidationError(input, 'Email không hợp lệ');
            return false;
        }
    }
    
    showValidationSuccess(input);
    return true;
}

// Show validation error
function showValidationError(input, message) {
    input.style.borderColor = '#e53e3e';
    input.style.boxShadow = '0 0 0 3px rgba(229, 62, 62, 0.1)';
    
    // Remove existing error message
    const existingError = input.parentNode.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'validation-error';
    errorDiv.style.color = '#e53e3e';
    errorDiv.style.fontSize = '0.9rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    
    input.parentNode.appendChild(errorDiv);
}

// Show validation success
function showValidationSuccess(input) {
    input.style.borderColor = '#48bb78';
    input.style.boxShadow = '0 0 0 3px rgba(72, 187, 120, 0.1)';
    
    // Remove existing error message
    const existingError = input.parentNode.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
}

// Clear validation
function clearValidation(input) {
    input.style.borderColor = '#e2e8f0';
    input.style.boxShadow = 'none';
    
    const existingError = input.parentNode.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
}

// Progress tracking for forms and inputs lesson
function updateProgress() {
    const currentLesson = 'forms-inputs';
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
            🎉 Chúc mừng! Bạn đã hoàn thành bài học về Forms & Inputs!
        </div>
    `;
    
    const lessonContent = document.querySelector('.lesson-content');
    lessonContent.appendChild(completionMessage);
}

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