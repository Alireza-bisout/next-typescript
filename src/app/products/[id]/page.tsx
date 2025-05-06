import { Product } from "./types"

type Params = {
    id: string
}

export default async function ProductPage({ params }: { params: Params }) {

    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
        cache: "no-store",
    })

    const product: Product = await res.json()

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price : ${product.price}</p>
        </div>
    )
}

