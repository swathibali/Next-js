import Link from "next/link"

function Home() {
    return <div>
        <h1>Home Page</h1>
        <Link href="/blog">
            <a>Go to Blog</a>
        </Link>
        <Link href="/product">
            <a>Go to Products</a>
        </Link>
    </div>
}
export default Home