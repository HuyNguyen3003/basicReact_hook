import { useState } from "react";
import axios from "axios";


const AddBlog = (props) => {

    const [title, settitle] = useState('');
    const [body, setbody] = useState('');
    const handleInputTitle = (event) => {
        settitle(event.target.value)
    }
    const handleInputBody = (event) => {
        setbody(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!title || !body === '') { alert('errol data'); return }
        let data = {
            title: title,
            body: body,
            userID: 1
        }
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
        //console.log("check data", data)
        if (res && res.data) {
            let newBlog = res.data;
            props.handleNewBlog(newBlog)
        }
    }
    return (
        <div>

            <h2>INPUT NEW BLOG</h2>

            <form onSubmit={handleSubmit}>
                <label for="fname">Title:   </label>
                <input type="text" value={title} onChange={handleInputTitle} ></input><br /><br />
                <label for="lname">Body:   </label>
                <input type="text" value={body} onChange={handleInputBody} ></input><br /><br />
                <button type="submit" onChange={handleSubmit} >Submit</button>
            </form>


        </div>
    )
}


export default AddBlog;