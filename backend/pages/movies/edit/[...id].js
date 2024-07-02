import Blog from "@/components/Movie";
import Head from "next/head"
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BsPostcard } from "react-icons/bs";
import Movie from "@/components/Movie";

export default function EditProduct() {
   
    
    const router = useRouter();

    // const router = useRouter();
    const { id } = router.query;

    const [productInfo, setProductInfo] = useState(null);

    useEffect(() => {
        if (!id) {
            return;
        } else {
            axios.get('/api/getmovies?id=' + id).then(response => {
                setProductInfo(response.data)
            })
        }
    }, [id])


 
        return <>

            <Head>
                <title>Update Movie</title>
            </Head>
            <div className="blogpage">
                <div className="titledashboard container flex flex-sb">
                    <div className="mb-2">
                        <h2>Edit movie: <span>{productInfo?.title}</span></h2>
                        <h3>ADMIN PANEL</h3>
                    </div>
                </div>
                <div className="mt-3 container">
                    {
                        productInfo && (
                            <Movie {...productInfo} />
                        )
                    }
                </div>
            </div>
        </>
    }
