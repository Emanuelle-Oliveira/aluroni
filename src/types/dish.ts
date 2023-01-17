import menu from 'data/menu.json';

// Cria e exporta o tipo Menu, que um array de pratos
export type Menu = typeof menu;
// Cria e exporta o tipo Prato, que um objeto com as informações do prato
export type Dish = typeof menu[0];