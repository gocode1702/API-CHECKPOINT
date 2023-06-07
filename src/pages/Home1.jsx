import React, {useEffect} from 'react';
import {useAsyncError, useNavigate} from "react-router-dom";
import axios from "axios";

const Home1 = ({IsLoggedIn}) => {
    const [posts, setPosts] = useState(null)
    const [deletePost, setDeletePost] = useState(false)
    const POST_API = "http://localhost:3000/posts"
    const navigate = useNavigate()
    useEffect(() => {
        const fetchPosts = async () => await axios
            .get(POST_API)
            .then((res) => setPosts(res.data))
            .catch((err) => console.log(err));
        IsLoggedIn
            ? fetchPosts()
            : navigate("/");
    }, [deletePost]);
    const handleDelete = (id) => {
        axios
            .delete("$(POST_API)/$(id)")
            .then((res) => setDeletePost(prev => !prev))
            .catch((err) => console.log(err));
    }
    return (
        <div>
            {

                posts
                    ? posts.map(e => (
                        <div>
                            <h4>
                                {e.title}</h4>
                            <p>
                                {e.description}</p>
                            <button onClick={() => handleDelete(e.id)}>Delete</button >
                        </div>
                    ))
                    : <p>Loading ...</p>

            }

        </div>
    );
}

export default Home1;
