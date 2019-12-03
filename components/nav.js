import Head from "next/head"
import Link from "next/link"

const Nav=()=>{

    return(
        <div>
            <Head>
                <title>Semih's Page</title>
               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
            </Head>
            <nav>
    <div class="nav-wrapper">
      <Link href="/"><a class="brand-logo" >News</a></Link>
    
      <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>  <Link href="/"><a >Home</a></Link></li>
          <li> <Link href="/technology"><a >Technology</a></Link></li>
          <li>  <Link href="/health"><a >Health</a></Link></li>
          <li>  <Link href="/sports"><a >Sports</a></Link></li>
          <li>  <Link href="/business"><a >Business</a></Link></li>
          <li>  <Link href="/entertainment"><a >Entertainment</a></Link></li>
          <li>  <Link href="/science"><a >Science</a></Link></li>
        
     
      </ul>
    </div>
  </nav>
        </div>
    )
}
export default Nav;