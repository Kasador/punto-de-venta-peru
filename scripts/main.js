// Main Class
export class Main {
    constructor() {
        // Initialize variables here
        // console.log('Main class initialized!');
    }

    // Example method
    greet() {
        console.log('Bienvenido a Tienda Punto de Venta');
    }
}

// Automatically instantiate the Main class when this file is loaded
(() => {
    console.log('JS connected!');
    const main = new Main();
})();