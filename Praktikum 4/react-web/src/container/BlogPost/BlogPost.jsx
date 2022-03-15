import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

class BlogPost extends Component {
    state = {                   // komponen state dari React untuk statefull component
        listArtikel: [],         // variabel array yang digunakan untuk menyimpan data API
        insertArtikel: {
            userId: 1,
            id: 1,
            title: "",
            body: ""
        }
    }

    ambilDataDariServerAPI = () => {
        // fetch('https://jsonplaceholder.typicode.com/posts')         // alamat URL API yang ingin kita ambil datanya
        fetch('http://localhost:3001/posts?_sort=id&_order=desc')
            .then(Response => Response.json())      // ubah response dari data URL API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => {        // data json hasil ambil dari API kita masukkan ke dalam listArtikel pada state
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {       // komponen untuk mengecek ketika component telah dimount-ing, maka panggil API
        this.ambilDataDariServerAPI()   // ambil data dari server API lokal

    }

    handleHapusArtikel = (data) => {        // fungsi yang meng-handle button action hapus data
        fetch(`http://localhost:3001/posts/${data}`, { method: 'DELETE' })     // alamat URL API yang ingin kita hapus datanya
            .then(res => {          // ketika proses hapus berhasil, maka ambil data dari server API lokal
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = {...this.state.insertArtikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {
        fetch(`http://localhost:3001/posts/`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
        .then((Response) => {
            this.ambilDataDariServerAPI();
        });
    }

    render() {
        return (
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArtikel} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <textarea className="form-control" id="body" name="body" rows="3" onChange={this.handleTambahArtikel} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {/* <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi - Politeknik Negeri Malang"/> */}
                {
                    this.state.listArtikel.map(artikel => {     // looping dan masukkan untuk setiap data yang ada di listArtikel ke variabel artikel
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel} />     // mappingkan data json dari API sesuai dengan kategorinya
                    })
                }
            </div>
        )
    }
}

export default BlogPost;