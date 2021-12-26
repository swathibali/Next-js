import { useRouter } from "next/router"
//Dynamic routes
function ProductDetail() {
    const router = useRouter()
    const ProductId = router.query.productId
    return (
        <>
            <h1>Details about Product {ProductId} </h1>
        </>
    )
}
export default ProductDetail