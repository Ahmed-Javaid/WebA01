// Seed mock data in localStorage

function initMockData() {
    if (!localStorage.getItem("users")) {
        var users = [
            { id: 1, name: "Michael Holz", email: "michael@example.com", role: "Admin", status: "Active" },
            { id: 2, name: "Paula Wilson", email: "paula@example.com", role: "Editor", status: "Active" },
            { id: 3, name: "Antonio Moreno", email: "antonio@example.com", role: "Publisher", status: "Suspended" },
            { id: 4, name: "Mary Saveley", email: "mary@example.com", role: "Reviewer", status: "Active" },
            { id: 5, name: "Martin Sommer", email: "martin@example.com", role: "Moderator", status: "Inactive" }
        ];
        localStorage.setItem("users", JSON.stringify(users));
    }

    if (!localStorage.getItem("products")) {
        var products = [
            { id: 1, name: "Wireless Mouse", price: 29.99, status: "In Stock", quantity: 150, picture: "" },
            { id: 2, name: "Mechanical Keyboard", price: 79.99, status: "In Stock", quantity: 85, picture: "" },
            { id: 3, name: "USB-C Hub", price: 45.00, status: "Low Stock", quantity: 12, picture: "" },
            { id: 4, name: "Monitor Stand", price: 34.99, status: "Out of Stock", quantity: 0, picture: "" },
            { id: 5, name: "Webcam HD", price: 59.99, status: "In Stock", quantity: 60, picture: "" }
        ];
        localStorage.setItem("products", JSON.stringify(products));
    }

    if (!localStorage.getItem("orders")) {
        var orders = [
            { id: 1, product: "Wireless Mouse", amount: 29.99, date: "2026-04-01" },
            { id: 2, product: "Keyboard", amount: 79.99, date: "2026-04-02" },
            { id: 3, product: "USB-C Hub", amount: 45.00, date: "2026-04-05" },
            { id: 4, product: "Webcam HD", amount: 59.99, date: "2026-04-07" },
            { id: 5, product: "Monitor Stand", amount: 34.99, date: "2026-04-10" },
            { id: 6, product: "Wireless Mouse", amount: 29.99, date: "2026-04-11" },
            { id: 7, product: "Keyboard", amount: 79.99, date: "2026-04-13" },
            { id: 8, product: "USB-C Hub", amount: 45.00, date: "2026-04-15" }
        ];
        localStorage.setItem("orders", JSON.stringify(orders));
    }
}

initMockData();
