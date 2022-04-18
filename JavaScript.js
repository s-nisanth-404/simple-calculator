const screen = document.querySelector('.Text');
const buttons = document.querySelectorAll(".Btn");
const value = document.querySelector(".Value");
const clear = document.querySelector(".Clear");

buttons.forEach(button => 
    {
        button.addEventListener("click", () => 
            {
                screen.value += button.innerHTML;
            });
    });

value.addEventListener("click", () => 
    {
        screen.value = eval(screen.value);
    });

clear.addEventListener("click", () => 
    {
        screen.value = "";
    });