import React from 'react';

const Compressor = () => {
    return (
        <div className="row my-auto">
            <div className="col-lg-5">
                <label>De-compressed</label>
                <textarea className="form-control" rows="5"></textarea>
            </div>
            <div className="col-lg-2 d-flex flex-column my-auto align-items-center">
                <label>&nbsp;</label>
                <button className="btn btn-brand">Compress</button>
            </div>
            <div className="col-lg-5">
                <label>Compressed</label>
                <textarea className="form-control" rows="5" disabled></textarea>
            </div>
        </div>
    );
};

export default Compressor;
