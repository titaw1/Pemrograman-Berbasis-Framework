import React, { Component } from "react";
import "./Mahasiswa.css";
import Mahasiswa from "../../component/BlogMahasiswa/Mahasiswa";
import API from "../../services-mhs";
import API_mhs from "../../services-mhs";

class BlogMahasiswa extends Component {
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            id: 1,
            nama: "",
            nim: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: "",
        },
    };

    ambilDataDariSeverAPI = () => {
        API_mhs.getNewsMahasiswa().then(result => {
            this.setState({
                listMahasiswa: result
            })
        })
    };

    componentDidMount() {
        this.ambilDataDariSeverAPI();
    }

    handleHapusMahasiswa = (data) => {
        API_mhs.deleteNewMahasiswa(data).then((response) => {
            this.ambilDataDariServerAPI();
        })
    };

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = { ...this.state.insertMahasiswa };
        let timestamp = new Date().getTime();
        formInsertMahasiswa["id"] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa,
        });
    };

    handleTombolSimpan = () => {
        API_mhs.postNewMahasiswa(this.state.insertMahasiswa)
            .then((response) => {
                this.ambilDataDariServerAPI();
            })
    };

    render() {
        return (
            <div className="post-mahasiswa">
                <div className="form pb-2 border-bottom">
                    <div className="form-gorup row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">
                            Nama
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="nama"
                                name="nama"
                                onChange={this.handleTambahMahasiswa}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nim" className="col-sm-2 col-form-label">
                            Nim
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                id="nim"
                                name="nim"
                                onChange={this.handleTambahMahasiswa}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">
                            Alamat
                        </label>
                        <div className="col-sm-10">
                            <textarea
                                name="alamat"
                                id="alamat"
                                rows="3"
                                className="form-control"
                                onChange={this.handleTambahMahasiswa}
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="hp" className="col-sm-2 col-form-label">
                            Hp
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                id="hp"
                                name="hp"
                                onChange={this.handleTambahMahasiswa}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">
                            Angkatan
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                id="angkatan"
                                name="angkatan"
                                onChange={this.handleTambahMahasiswa}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">
                            Status
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="status"
                                name="status"
                                onChange={this.handleTambahMahasiswa}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.handleTombolSimpan}
                    >
                        Simpan
                    </button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {this.state.listMahasiswa.map((mahasiswa) => {
                    return (
                        <Mahasiswa
                            key={mahasiswa.id}
                            nama={mahasiswa.nama}
                            nim={mahasiswa.nim}
                            alamat={mahasiswa.alamat}
                            hp={mahasiswa.hp}
                            angkatan={mahasiswa.angkatan}
                            status={mahasiswa.status}
                            idMahasiswa={mahasiswa.id}
                            hapusMahasiswa={this.handleHapusMahasiswa}
                        />
                    );
                })}
            </div>
        );
    }
}

export default BlogMahasiswa;