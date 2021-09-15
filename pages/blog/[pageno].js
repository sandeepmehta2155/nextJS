import { useRouter } from "next/dist/client/router" 

export default function Home() {
    const router =  useRouter();
    const pageNumber = router.query.pageno;
    return (
      <div>   
          <h1> This is blog {pageNumber}</h1>
      </div>
    )
  }