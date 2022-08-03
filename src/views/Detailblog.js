import { useParams, useHistory, Link } from "react-router-dom";
import useFetch from "../customize/fetch";
import './Nav.scss'
import { useState, useEffect } from 'react'





const DetailBlog = () => {
    let { id } = useParams();
    let history = useHistory();
    let [idnext, setidnext] = useState(Number(id))
    let [idback, setidback] = useState(Number(id))





    const handleBack = () => {
        history.push("/blog")
    }
    let { data: DataBlogDetail, Loadding: isLoadding }
        = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false)
    useEffect(() => {
        setidnext(Number(id) + 1)
        setidback(Number(id) - 1)
        DataBlogDetail.title = 'Loadding'
        DataBlogDetail.body = '...'

    }, [id])

    // const handle = () => {
    //     setidnext(idnext + 1)
    //     setidback(idback - 1)

    //     console.log(idnext)
    //     console.log(idback)


    // }
    // const handlenext = () => {
    //     setidnext(idnext + 1)
    //     setidback(idback + 1)
    // }
    // const handleBack1 = () => {
    //     setidnext(idnext - 1)
    //     setidback(idback - 1)
    // }


    return (
        <>

            <button onClick={handleBack}>&lt;--Back</button>
            <div>
                <br />hello id: {id}
            </div>
            {isLoadding === true &&
                <div style={{ textAlign: 'center' }}>Loadding data</div>}
            <div className="Blog-detail">
                {DataBlogDetail && isLoadding === false &&
                    <>
                        <div className="Title">
                            {DataBlogDetail.title}
                        </div>
                        <div className="Body">
                            {DataBlogDetail.body}
                        </div>

                    </>
                }

            </div>

            {/* <button className="bnt-view" onClick={handle}  >
                chi can nhan 1 lan de luu thong so chuyen trang;
                {console.log('>> id next ', idnext)}{console.log(">> id back", idback)}
            </button> */}
            <br></br> <Link to={`/blog/${idnext}`}>Next </Link>
            <br></br> <Link to={`/blog/${idback}`}>Back </Link>
            {isLoadding === true &&
                <div style={{ 'textAlign': 'center' }}>Loadding</div>
            }




        </>
    )

}


export default DetailBlog;