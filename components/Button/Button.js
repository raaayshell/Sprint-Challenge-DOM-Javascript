/* const buttons = document.getElementsByClassName('Buttons')[0];
console.log(buttons.children);

class Button {
    constructor(button) {
        this.button = button;
        this.button.addEventListener('mousedown', event => {
            this.button.style.visibility = "hidden";
        });
    }
}

const allButtons = Array.from(buttons.children).map(button => {
    return new Button(button);
}); */

class Button {
    constructor(element){
        this.element = element;
        this.element.addEventListener('click', (element) => {
            this.element.classList.add("Button--selected");
        })
    }
}

let buttons = document.getElementsByClassName("Button");
buttons = Array.from(buttons).map(buttons => new Button(buttons));