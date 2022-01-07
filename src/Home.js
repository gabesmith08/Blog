import { useState, useEffect } from "react";
import BlogList from "./BlogList"

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'wadup', author: 'Gabe', id: 1 },
        { title: 'Welcome party!', body: 'hey der', author: 'Gabe', id: 2 },
        { title: 'Web dev top tips', body: 'yooo', author: 'Mario', id: 3 },
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran') 
    })

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Gabe')} title="Gabe's Blogs" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;