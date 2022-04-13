import React, { Component } from "react";

import PostKeranjang from "../components/AC/PostKeranjang";


class Keranjang extends Component {
    state = {
        listKeranjang: []
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3002/keranjang')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listKeranjang: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/keranjang', {
            method: 'post',
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
        var no = 0;
        var total = 0;
        return (
            
            <div className="ac-tita">
                {
                /* <div className="form pb-2 border-bottom">
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div> */}
                <div className="ac_tita">
                    <table cellpadding="5" width="80%" class="bg">
                        <tr>
                            <th align="center">No</th>
                            <th align="center">ID</th>
                            <th align="left">Name</th>
                            <th align="center">Price</th>
                            <th align="center">Qty</th>
                            <th align="center">Subtotal</th>
                        </tr>
                        {
                            this.state.listKeranjang.map(ac => {
                                no += 1;
                                total+=ac.harga*ac.qty
                                return (
                                    <PostKeranjang
                                        no={no}
                                        key={ac.id}
                                        id={ac.id}
                                        nama={ac.nama}
                                        harga={ac.harga}
                                        gambar={ac.gambar}
                                        stok={ac.stok}
                                        qty={ac.qty} />
                                )
                            })
                        }
                        <tr>
                            <td colspan="5" align="right">Total : </td>
                            <td align="center">{total}</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Keranjang;