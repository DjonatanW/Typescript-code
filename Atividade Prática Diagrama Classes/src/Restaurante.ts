class MenuItem {
  constructor(
      public id: number,
      public name: string,
      public price: number
  ) {}
}

// Classe representando um pedido
class Order {
  private items: { item: MenuItem; quantity: number }[] = [];

  addItem(item: MenuItem, quantity: number): void {
      this.items.push({ item, quantity });
  }

  getTotal(): number {
      return this.items.reduce((total, { item, quantity }) => {
          return total + item.price * quantity;
      }, 0);
  }

  listItems(): string {
      return this.items
          .map(({ item, quantity }) => `${item.name} x${quantity}`)
          .join(", ");
  }
}

// Classe representando uma mesa
class Table {
  private orders: Order[] = [];
  constructor(public id: number) {}

  addOrder(order: Order): void {
      this.orders.push(order);
  }

  getTotal(): number {
      return this.orders.reduce((total, order) => total + order.getTotal(), 0);
  }
}

// Classe principal do restaurante
class Restaurant {
  private menu: MenuItem[] = [];
  private tables: Table[] = [];

  addMenuItem(name: string, price: number): MenuItem {
      const menuItem = new MenuItem(this.menu.length + 1, name, price);
      this.menu.push(menuItem);
      return menuItem;
  }

  addTable(): Table {
      const table = new Table(this.tables.length + 1);
      this.tables.push(table);
      return table;
  }

  getMenu(): MenuItem[] {
      return this.menu;
  }

  getTables(): Table[] {
      return this.tables;
  }
}

// Exemplo de uso
const restaurant = new Restaurant();

// Adicionando itens ao menu
const burger = restaurant.addMenuItem("Burger", 15.5);
const pizza = restaurant.addMenuItem("Pizza", 20);
const soda = restaurant.addMenuItem("Soda", 5);

// Criando uma nova mesa
const table1 = restaurant.addTable();

// Criando um pedido
const order1 = new Order();
order1.addItem(burger, 2); // 2 Burgers
order1.addItem(soda, 1);   // 1 Soda

// Adicionando pedido à mesa
table1.addOrder(order1);

// Consultando informações
console.log("Menu:");
restaurant.getMenu().forEach(item => console.log(`${item.name}: $${item.price}`));

console.log(`\nTable ${table1.id} Total: $${table1.getTotal()}`);
console.log("Order details:", order1.listItems());