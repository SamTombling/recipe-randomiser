const recipes = ['Chicken Fried Rice', 'Carbonara', 'Tacos', 'Pasta Prima Vera', 'Spaghetti Bolognese',
                 'Salmon and Couscous', 'Salmon and Rice', 'Beef Burger', 'Chicken Burger',
                 'Crispy Chicken and Smashed Potatoes', 'Pad Thai', 'Burrito Bowl', 'Steak Fajitas',
                 'Chicken Caesar Salad', 'Bacon and Leek Tart', 'Elevated Ramen', 'Risotto'];

const output = document.querySelector('.output');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    let dinner = Math.floor(Math.random() * recipes.length);
    output.textContent = (recipes[dinner])
})