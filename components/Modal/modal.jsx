import Image from "next/image";
import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "450px",
    height: "250px",
    marginRight: "-50%",
    border: "2px solid silver",
    transform: "translate(-50%, -50%)",
  },
};

const UserModal = ({ modalIsOpen, contentTitle,closeModal,success }) => {
  return (
    <div>
      {" "}
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="text-center">
          <Image
            className="m-auto"
            src="/success_img.png"
            width={50}
            height={50}
            alt="Picture of the author"
          />
          <h2 className="text-[#34BA59] font-medium text-xl m-auto">Success</h2>
          <p className="mt-4 text-[#535454] font-medium">{contentTitle}</p>
        </div>
        <div className="text-center">
          <button className="bg-[#0A214A] rounded-md text-white px-32 mt-4 m-auto py-1" onClick={closeModal}>
            Continue
          </button>
        </div>
      </Modal>
    </div>
  );
};
export default UserModal;
