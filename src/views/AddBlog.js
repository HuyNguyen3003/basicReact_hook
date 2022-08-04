import { useState } from "react";


const AddBlog = () => {

    const [title, settitle] = useState('');
    const [body, setbody] = useState('');
    const handleInputTitle = (event) => {
        settitle(event.target.value)
    }
    const handleInputBody = (event) => {
        setbody(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (!title || !body === '') { alert('errol data'); return }
        settitle("");
        setbody("")
    }
    return (
        <div>

            <h2>INPUT NEW BLOG</h2>

            <form onSubmit={handleSubmit}>
                <label for="fname">Title:   </label>
                <input type="text" value={title} onChange={handleInputTitle} ></input><br /><br />
                <label for="lname">Body:   </label>
                <input type="text" value={body} onChange={handleInputBody} ></input><br /><br />
                <button type="submit" >Submit</button>
            </form>


        </div>
    )
}


export default AddBlog;