import React, { Component } from "react";
import './AC.css';
import PostAC from "../components/AC/PostAC";

class Produk extends Component {
    state = {
        listAC: []
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/AC')
            .then(Response => Response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listAC: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleAddCart = (data) => {
        fetch(`http://localhost:3001/AC/${data}`, { method: "GET" })
            .then(response => response.json())
            .then(res => {
                var dataAC = { ...this.state.insertKeranjang };
                dataAC["id"] = res["id"];
                dataAC["nama"] = res["nama"];
                dataAC["gambar"] = res["gambar"];
                dataAC["harga"] = res["harga"];
                dataAC["stok"] = res["stok"];
                dataAC["qty"] = 1;
                this.setState({
                    insertKeranjang: dataAC
                });
            })
            .then(() => {
                this.handleCekKeranjang(data);
            })
            .then(() => {
                this.handleTombolSimpan();
            })
    };

    handleCekKeranjang = (data) => {
        fetch(`http://localhost:3002/keranjang/${data}`, { method: "GET" }).then(
            response => {
                if (response.ok) {
                    response.json().then(res => {
                        this.handleUpdateKeranjang(data, res);
                        this.ambilDataDariServerAPI();
                    });
                } else {
                    this.handleTombolSimpan();
                }
            }
        );
    };

    handleUpdateKeranjang = (data, res) => {
        fetch(`http://localhost:3002/keranjang/${data}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: res["id"],
                nama: res["nama"],
                gambar: res["gambar"],
                harga: res["harga"],
                stok: res["stok"],
                qty: res["qty"] + 1
            })
        });
    };

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/keranjang', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then((response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            
            <div className="ac-tita">
                <div className="ac_tita">
                    {
                        this.state.listAC.map(ac => {
                            return (
                                <PostAC
                                    key={ac.id}
                                    id={ac.id}
                                    gambar={ac.gambar}
                                    nama={ac.nama}
                                    harga={ac.harga}
                                    stok={ac.stok}
                                    tambahAC={this.handleAddCart} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Produk;