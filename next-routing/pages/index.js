import Link from "next/link"
import { useRouter } from "next/router"
import { useCallback } from "react";

function Home() {
    const router = useRouter();
    const handleClick = useCallback(
        () => {
            console.log('placing your order');
            router.push('/product');
            //or
            //router.replace('/product')
        },
        [],
    )
    return <div>
        <h1>Home Page</h1>
        <Link href="/blog">
            <a>Go to Blog</a>
        </Link>
        <Link href="/product">
            <a>Go to Products</a>
        </Link>
        <button onClick={handleClick}>Plcae order</button>
    </div>
}
export default Home