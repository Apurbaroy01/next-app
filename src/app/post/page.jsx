const getePosts = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

const PostPage = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data = await res.json();
    // console.log(data);

    const data = await getePosts();

    return (
        <div>
            <h2>this is post page</h2>
            <p>post length: {data.length}</p>
        </div>
    );
};

export default PostPage;