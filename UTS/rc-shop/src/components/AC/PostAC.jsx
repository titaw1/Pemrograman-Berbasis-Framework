import React from "react";

const PostAC = (props) => {
    return (
        <div className="ac">
            <div className="gambar-ac"><img src={props.gambar} width="100%" height="200" alt="" /></div>
            <div className="konten-ac">
                
                <div className="isi-ac text-center">
                    {props.id}<br />
                    {props.nama}<br />
                    Rp {props.harga}<br />
                    Stock : {props.stok}
                </div>
            </div>
            <button className="btn btn-sm btn-warning" onClick={props.tambahAC.bind(this, props.id)}>Buy</button>
        </div>
      );
};

export default PostAC;