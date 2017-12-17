namespace Model {
    export class Menu {
        public id: number;
        public name: string;
        public items: Product[];
    }
    export class Product {
        public id: number;
        public name: string;
        public note: string;

    }
}
