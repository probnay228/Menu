document.addEventListener('DOMContentLoaded', () => {
    // 1. Динамическое добавление и удаление ингредиентов (минимум 1 должен оставаться)
    const ingredientsContainer = document.getElementById('ingredients-container');
    const addIngredientBtn = document.getElementById('add-ingredient');

    if (ingredientsContainer && addIngredientBtn) {
        addIngredientBtn.addEventListener('click', () => {
            const firstRow = ingredientsContainer.querySelector('.sub-block');
            const newRow = firstRow.cloneNode(true);

            // Очищаем значения в новой строке
            newRow.querySelectorAll('input').forEach(input => input.value = '');
            newRow.querySelectorAll('select').forEach(select => select.selectedIndex = 0);

            ingredientsContainer.appendChild(newRow);
        });

        ingredientsContainer.addEventListener('click', (e) => {
            if (e.target.matches('button')) {
                const rows = ingredientsContainer.querySelectorAll('.sub-block');
                if (rows.length > 1) {
                    e.target.closest('.sub-block').remove();
                } else {
                    alert('В рецепте должен быть минимум 1 ингредиент.');
                }
            }
        });
    }

    // 2. Динамическое добавление и удаление шагов рецепта (минимум 1 должен оставаться)
    const stepsContainer = document.getElementById('steps-container');
    const addStepBtn = document.getElementById('add-step');

    if (stepsContainer && addStepBtn) {
        addStepBtn.addEventListener('click', () => {
            const firstStep = stepsContainer.querySelector('.sub-block');
            const newStep = firstStep.cloneNode(true);

            // Очищаем текстовые поля и выбранный файл в новом шаге
            newStep.querySelectorAll('input, textarea').forEach(field => field.value = '');

            stepsContainer.appendChild(newStep);
        });

        stepsContainer.addEventListener('click', (e) => {
            if (e.target.matches('button')) {
                const steps = stepsContainer.querySelectorAll('.sub-block');
                if (steps.length > 1) {
                    e.target.closest('.sub-block').remove();
                } else {
                    alert('В рецепте должен быть минимум 1 шаг приготовления.');
                }
            }
        });
    }

    // 3. Поштучное удаление превью фотографий в форме редактирования
    const photoList = document.querySelector('.photo-list');
    if (photoList) {
        photoList.addEventListener('click', (e) => {
            if (e.target.matches('button')) {
                const boxes = photoList.querySelectorAll('.photo-box');
                if (boxes.length > 1) {
                    const box = e.target.closest('.photo-box');
                    const wasChecked = box.querySelector('input[type="radio"]').checked;
                    box.remove();

                    // Если удалили главное фото, назначаем главным первое оставшееся
                    if (wasChecked) {
                        const nextRadio = photoList.querySelector('input[type="radio"]');
                        if (nextRadio) nextRadio.checked = true;
                    }
                } else {
                    alert('У рецепта должно остаться минимум 1 изображение.');
                }
            }
        });
    }
});
