// script.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('questions.4.json')
        .then(response => response.json())
        .then(data => {
            const mcqPaper = document.getElementById('mcq-paper');
            const answersList = document.getElementById('answers-list');

            data.forEach((item, index) => {
                // Create question and options
                const questionDiv = document.createElement('div');
                questionDiv.className = 'question';

                const questionText = document.createElement('p');
                questionText.textContent = `${index + 1}. ${item.question}`;
                questionDiv.appendChild(questionText);

                const optionsList = document.createElement('div');
                optionsList.className = 'options';

                item.options.forEach((option, i) => {
                    const listItem = document.createElement('li');
                    listItem.style.listStyleType = 'none';
                    listItem.textContent = `${String.fromCharCode(65 + i)}. ${option}`;
                    optionsList.appendChild(listItem);
                });

                questionDiv.appendChild(optionsList);
                mcqPaper.appendChild(questionDiv);

                // Create answers
                const answerText = document.createElement('p');
                answerText.textContent = `${index + 1}. ${item.correctAnswer}`;
                answersList.appendChild(answerText);
            });

            // Print functionality
            document.getElementById('print-btn').addEventListener('click', () => {
                window.print();
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});
