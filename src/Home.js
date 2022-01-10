import { useState, useEffect } from "react";
import BlogList from "./BlogList"

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8800/blogs')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);
    }, []);

    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading :)</div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Home;


// use this in the cmd prompt to start mock db with db.json file
// npx json-server --watch data/db.json --port 8800