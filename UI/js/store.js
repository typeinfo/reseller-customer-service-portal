//----------------------------------------------------------------
// store
function store() {
    this.products = [
        new product("p-domain", "Domain Name", "Register domain names", 21),
        new product("p-email", "Email", "Registering email hosting", 22),
        new product("p-cloud", "Cloud", "Cloud hosting services", 23),
        new product("p-cpanel", "cPanel", "cPanel Hosting", 24),
        new product("p-cPanel-whm", "cPanel-WHM", "cPanel Hosting with WHM", 25),
        new product("p-ssl", "SSL", "SSL certifiaction", 26),		
    ];
}
store.prototype.getProduct = function (code) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].code == code)
            return this.products[i];
    }
    return null;
}
