import BlogList from "./BlogList";
import useFetch from "../Hooks/useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:2020/blogs')
    return (
        <div className="content">
            {isPending && <h1>Loading.....</h1>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs}></BlogList>}
        </div>
    );
}

export default Home;