import Link from "next/link"

const NavBar = () => 
    <>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a>Blog Post</a>
        </Link>
      </li>
      <li>
        <Link href="/abcd">
          <a>404 Page</a>
        </Link>
      </li>
    </ul>
    
    </>

export default NavBar