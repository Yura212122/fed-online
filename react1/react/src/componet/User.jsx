import React,{useState, useEffect} from 'react';
function PostTable({title, onSelectPosts}) {
    const [posts, setPosts] = useState([]);
    const [visability, setVisability] = useState(2);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setPosts(data.slice(0, visability))); // Обмежуємо кількість видимих постів
    }, [visability]);
    function loadMore(){
        setVisability(visability=>visability+2);
    }
 
    return (
        <div>
            <h3 className='text-center'>
                {/* {props.title} */}
                {title}
            </h3>
            <div className='p-5 text-center' onClick={loadMore}>
                <button className="btn btn-success">Завантажити ще пости</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col"> </th>
                         
                        <th scope="col"> </th>
                        <th scope="col"> </th>
                  
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post )=>{
                        return<tr key={post}>
                            <td>
                                 {post.userid}
                            </td>
                            <td>
                                {  post.id}
                            </td>
                            <td>
                                { post.title}
                            </td>
                            <td>
                                { post.body}
                            </td>
 
                            <td>
                                <button className='btn btn-primary' onClick={()=>{onSelectPosts(post)}}>
                                    Додати до списку 
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <div className='p-5 text-center' onClick={loadMore}>
                <button className="btn btn-success">Завантажити ще пости</button>
            </div>
        </div>
    );
}

export default PostTable;