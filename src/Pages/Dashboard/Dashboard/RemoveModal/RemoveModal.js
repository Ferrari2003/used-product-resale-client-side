import React from 'react';

const RemoveModal = ({title, message, closeModal,modalData, success,successButton}) => {
    return (
        <div>
           
           

           
            <input type="checkbox" id="remove-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => success(modalData)} htmlFor="remove-modal" className="btn btn-info">{successButton}</label>
                    <button onClick={ closeModal} className='btn btn-outline btn-secondary'>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemoveModal;