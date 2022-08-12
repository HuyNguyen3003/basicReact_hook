import useFetch from "../customize/fetch";
import './Nav.scss'
import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddBlog from "./AddBlog"







const Blog = () => {
    const [show, setShow] = useState(false);
    const [newdata, setnewdata] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { data: dataBlog, Loadding: isLoadding }
        = useFetch(`https://jsonplaceholder.typicode.com/posts`, false)


    useEffect(() => {
        if (dataBlog && dataBlog.length > 0) {
            let newdatasimple = dataBlog.slice(0, 9)
            setnewdata(newdatasimple)
        }

    }, [dataBlog])

    const handleNewBlog = (blog) => {
        let data = newdata
        data.unshift(blog)
        setShow(false)
        setnewdata(data)
    }
    const deleteBlog = (id) => {
        let data = newdata;
        data = data.filter(item => item.id !== id)
        setnewdata(data)
    }


    return (
        <>
            <div>
                <Button variant="primary" onClick={handleShow}>
                    ADD NEW BLOG
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title >ADD NEW BLOG</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddBlog handleNewBlog={handleNewBlog} />
                    </Modal.Body>
                </Modal>
            </div>


            <div className="continer-blog">
                {isLoadding === false && newdata && newdata.length > 0 &&
                    newdata.map(item => {
                        return (
                            <div className="Single-Blog" key={item.id}>
                                <div className="Title :">{item.title} </div> <span onClick={() => deleteBlog(item.id)}>x</span>
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
