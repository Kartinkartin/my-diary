import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Body from "./components/main/main";
import useModal from "./hooks/use-modal";
import Modal from "./components/modal/modal";
import PopupAdd from "./components/popup-add/popup-add";

function App() {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <div className="App">
      <Header writeHandler={openModal} />
      <Body />
      <Footer />
      {isModalOpen && (
          <Modal onClose={closeModal}>
            <PopupAdd onClose={closeModal} />
          </Modal>
        )}
    </div>
  );
}

export default App;
