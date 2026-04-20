import ProductCard from "@/Components/productCard/product";

// const getproducts = async () => {
//     const res = await fetch('http://localhost:5000/products',{cache:"no-store"});
//     const data = await res.json();
//     return data;
// }

const getproducts = async () => {
    const res = await fetch('http://localhost:5000/products', { next: { revalidate: 20 } });
    const data = await res.json();
    return data;
}

const ProductPage = async () => {
    const products = await getproducts();
    console.log(products);
    return (
        <div>
            <h2>product length: {products.length}</h2>
            <div className="grid grid-cols-3 gap-3 p-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductPage;