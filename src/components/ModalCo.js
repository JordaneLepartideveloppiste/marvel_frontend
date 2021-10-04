import Login from "./Login";
import SignUp from "./SignUp";
import "../assets/scss/ModalCo.scss";

const ModalCo = ({ modalOnLogin, setShowModalCo, setUser, setModalOnLogin }) => {
  return (
    <div className="modal_co">
      <div className="modal_co_content">
        <div className="modal_co_header">
          <button
            id="modalClose_btn"
            onClick={() => {
              setShowModalCo(false);
              setModalOnLogin(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modal_co_body">
          {modalOnLogin ? (
            <Login setUser={setUser} setShowModalCo={setShowModalCo} />
          ) : (
            <SignUp
              setUser={setUser}
              setModalOnLogin={setModalOnLogin}
            />
          )}
        </div>
        <div className="modal_co_footer"></div>
      </div>
    </div>
  );
};

export default ModalCo;
