export const MY_SELECT = () => {
    class mySelect {
        constructor(element) {
            this.selectElement = element;
            this.selectedElement = this.selectElement.querySelector('.my-select__selected');
            this.selectContainer = this.selectElement.querySelector('.my-select__options');
            this.options = Array.from(this.selectContainer.children);

            this.init(); 
        }

        init() {
            // Открытие закрытие списка по клику на элемент
            this.selectedElement.addEventListener('click', (e) => this.toggleSelect())

            // Назначение обработчика событий для каждого элемента списка
            this.options.forEach((option) => {
                option.addEventListener('click', (event) => this.selectOption(event.target))
            })

            // Закрытие выпадающего списка при клике вне его области
            document.addEventListener('click', (event) => this.closeSelect(event))
        }

        toggleSelect() {
            this.selectContainer.classList.toggle('my-select-hide');
        }

        selectOption(option) {
            console.log(option)
            this.selectedElement.textContent = option.textContent;
            this.selectContainer.classList.add('my-select-hide');
            this.options.forEach((item) => item.classList.remove('same-as-selected'));
            option.classList.add('same-as-selected');
        }
        closeSelect(event) {
            if (!this.selectElement.contains(event.target)) {
                this.selectContainer.classList.add('my-select-hide');
            }
        }
    }

   const MY_SELECTS_ITEMS =  document.querySelectorAll('.my-select');

   MY_SELECTS_ITEMS.forEach((select) => {
    new mySelect(select)
   })
}

MY_SELECT();