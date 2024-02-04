import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

const Update = () => {
    const { data } = useFetch('http://localhost:2020/blogs')
    const { id } = useParams()
    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()
    const [body, setBody] = useState()

    const history = useHistory()
    let blog = null

    if(data){
        blog = data.filter(x => x.id === Number(id))
        blog = blog[0]
        // setTitle(blog.title)
        // setAuthor(blog.author)
        // setBody(blog.body)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const blog = { title, author, body }
        fetch('http://localhost:2020/blogs/'+id, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
            .then(() => {
                history.push('/')
            })
    }

    return (
        <div className="update">
            {!blog && <h1>Loading.......</h1>}
            {blog &&
                <form onSubmit={submitHandler}>
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} defaultValue={blog.title} required />

                    <label htmlFor="author">Author: </label>
                    <input type="text" id="author" onChange={(e) => setAuthor(e.target.value)} defaultValue={blog.author} required />

                    <label htmlFor="body">Body: </label>
                    <textarea name="body" id="body" cols="30" rows="15" onChange={(e) => setBody(e.target.value)} defaultValue={blog.body} required></textarea>

                    <button type="submit">Update</button>
                </form>
            }
        </div>
    );
}

export default Update;