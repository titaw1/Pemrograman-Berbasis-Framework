import GetAPI from './Get';
import PostAPI from './Post';
import DeleteAPI from './Delete';

// Daftar API - GET
const getNewsMahasiswa = () => GetAPI(`mahasiswa?_sort=id&_order=desc`);

// Daftar API - POST
const postNewMahasiswa = (dataYgDiKirim) => PostAPI('mahasiswa', dataYgDiKirim);

// Daftar API - DELETE
const deleteNewMahasiswa = (dataYgDihapus) => DeleteAPI('mahasiswa', dataYgDihapus);

const API_mhs = {
    getNewsMahasiswa,
    postNewMahasiswa,
    deleteNewMahasiswa
}

export default API_mhs;