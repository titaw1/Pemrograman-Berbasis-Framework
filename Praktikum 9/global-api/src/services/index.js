import GetAPI from './Get';
import PostAPI from './Post';
import DeleteAPI from './Delete';

// Daftar API - GET
const getNewsBlog = () => GetAPI(`posts?_sort=id&_order=desc`);

// Daftar API - POST
const postNewBlog = (dataYgDiKirim) => PostAPI('posts', dataYgDiKirim);

// Daftar API - DELETE
const deleteNewBlog = (dataYgDihapus) => DeleteAPI('posts', dataYgDihapus);

const API = {
    getNewsBlog,
    postNewBlog,
    deleteNewBlog
}

export default API;