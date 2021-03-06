import {domainPath} from './Config';

const DeleteAPI = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}/${data}`, { method: "DELETE" })    // alamat url API yang ingin kita HAPUS datanya
            .then((result) => {
                resolve(result);                // jika success menerima response dari server maka resolve response e user
            }, (err) => {
                reject(err);                    // jika terjadi error dari server (server down, dll),
            })
    })
    return promise;
}
export default DeleteAPI;