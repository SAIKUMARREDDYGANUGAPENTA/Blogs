import { useParams,useHistory } from "react-router-dom";
import useFetch from "../Hooks/useFetch";


const BlogDetails = () => {
    const { id } = useParams()
    const { data, isPending, error } = useFetch('http://localhost:2020/blogs/' + id)
    const history = useHistory()

    const deleteHandler = ()=>{
        fetch('http://localhost:2020/blogs/'+data.id,{
            method : 'DELETE'
        })
        .then((res) => {
            if(res.ok){
                history.push('/')
            }
            else{
                throw Error("Unable to delete")
            }
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    const editHandler = ()=>{
        history.push(`/update/${id}`)
    }

    return (
        <div className="blog-details">
            {isPending && <h1>Loading.....</h1>}
            {error && <div>error</div>}
            {data && <article>
                <h2>{data.title}</h2>
                <p>Written by : {data.author}</p>
                <div>{data.body}</div>
                <button onClick={deleteHandler}>Delete</button>
                <button onClick={editHandler}>Edit</button>
            </article>}
        </div>
    );
}

export default BlogDetails;