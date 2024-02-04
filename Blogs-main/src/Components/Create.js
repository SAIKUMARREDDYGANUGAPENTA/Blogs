import { useState } from "react"
import { useHistory } from "react-router-dom"

const Create = () => {
    const [title,setTitle] = useState(null)
    const [author,setAuthor] = useState(null)
    const [body,setBody] = useState(null)

    const history = useHistory()

    const submitHandler = (e) =>{
        e.preventDefault()
        const blog = {title,author,body}
        fetch('http://localhost:2020/blogs',{
            method: 'POST',
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(blog)
        })
        .then(()=>{
            history.push('/')
        })
    }

    return (
        <div className="create">
            <form onSubmit={submitHandler}>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} required/>

                <label htmlFor="author">Author: </label>
                <input type="text" id="author" onChange={(e)=>setAuthor(e.target.value)} required/>

                <label htmlFor="body">Body: </label>
                <textarea name="body" id="body" cols="30" rows="15" onChange={(e)=>setBody(e.target.value)} required></textarea>

                <button type="submit">Create</button>
            </form>
        </div>
    );
}
 
export default Create;