export function ProductDetail({selectedId}) {

    console.log(selectedId)
    return (
        <div className="product-detai" key={selectedId.id}>
        <h1>{selectedId.title}</h1>
        <img src={selectedId.images}/>
        </div>
    )
}

export default ProductDetail