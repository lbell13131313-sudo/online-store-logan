function ProductCard({name, description, price, image}) {
    return (
        <div className="product-card">
            <div className="product-header">
                <img 
                    src={image}
                    alt="Product image" 
                    className="image"
                />
                <div className="product-info">
                    <h3 className="name">{name}</h3>
                    <p className="description">{description}</p>
                    <p className="price">{price}</p>
                </div>
            </div>
        </div>
    );
}

// Every component file must export the component
export default ProductCard;