import React from "react";

const RegisterModal = () => {
  return (
    <div className="registerModal">
      <div className="registerDiv">
        과일 이름 : <input type="text" />
      </div>
      <div className="registerDiv">
        과일 수량 : <input type="text" />
      </div>
      <div className="registerDiv">
        과일 가격 : <input type="text" />
      </div>
      <div className="registerDiv">
        매입 가격 : <input type="text" />
      </div>
      <div className="registerBtns">
        <button>취소</button>
        <button>등록</button>
      </div>
    </div>
  );
};

export default RegisterModal;
