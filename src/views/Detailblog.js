import { useParams, useHistory, Link } from "react-router-dom";
import useFetch from "../customize/fetch";
import './Nav.scss'




const DetailBlog = () => {
    let { id } = useParams();
    let history = useHistory();
    let idlink = new Number(id)
    idlink = idlink + 1
    console.log(idlink)

    const handleBack = () => {
        history.push("/blog")
    }

    let { data: DataBlogDetail, Loadding: isLoadding }
        = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false)

    const handleNext = () => {
        idlink = new Number(id)
        idlink = idlink + 1
        DataBlogDetail.title = '... Loadding'
        DataBlogDetail.body = ''
    }
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

            <button className="bnt-view" onClick={handleNext}>
                <Link to={`/blog/${idlink}`}>Next --&gt;</Link>
            </button>




        </>
    )

}


export default DetailBlog;