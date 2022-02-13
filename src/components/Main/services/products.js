const parseDate = (date) => {
    date = new Date(date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}:${month}:${year}`;
};

export const getProducts = async () => {
    try {
        const res = await fetch('https://assessment-edvora.herokuapp.com/');
        const data = await res.json();
        const products = {};
        const productsNames = [];
        data.forEach(product => {
            product.date = parseDate(product.date);
            const productName = product.product_name;
            products[productName] = productName in products ? products[productName] : [];
            products[productName].push(product);
            !productsNames.includes(productName) && productsNames.push(productName);
        });
        return [productsNames, products];
    } catch (err) {
        console.log(err);
    }
}