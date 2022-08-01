import useFetch from "../customize/fetch";
import './Nav.scss'
import { Link } from "react-router-dom";





const Blog = () => {

    const { data: dataBlog, Loadding: isLoadding }
        = useFetch(`https://jsonplaceholder.typicode.com/posts`, false)

    let newData = [];
    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 9)
    }


    return (
        <>
            <div className="continer-blog">
                {isLoadding === false && newData && newData.length > 0 &&
                    newData.map(item => {
                        return (
                            <div className="Single-Blog" key={item.id}>
                                <div className="Title :">{item.title}</div>
                                <div className="Body">{item.body}</div>
                                <button className="bnt-view">
                                    <Link to={`/blog/${item.id}`}>View detail</Link>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
            {isLoadding === true &&
                <div style={{ textAlign: 'center' }}>Loadding data</div>}
        </>
    )

}

export default Blog