import { SizeModal } from "@/components/ui/Modal";
import RenderIf from "@/components/ui/RenderIf";
import * as React from "react";

const Modal = React.lazy(() => import("@/components/ui/Modal"));

interface IModalProviderProps {
  children?: React.ReactNode;
}

interface SetModalValuesParams {
  children?: React.ReactNode;
  title?: React.ReactNode;
  size?: SizeModal;
}

interface ModalContextValues {
  closeModal?(): void;
  setModal?(values: SetModalValuesParams): void;
}

const ModalContext = React.createContext<ModalContextValues>({});

const ModalProvider: React.FunctionComponent<IModalProviderProps> = (props) => {
  const [show, setShow] = React.useState(false);
  const [size, setSize] = React.useState<SizeModal>("md");
  const [title, setTitle] = React.useState<React.ReactNode>(null);
  const [content, setContent] = React.useState<React.ReactNode>(null);

  const closeModal = React.useCallback(() => {
    setTitle(null);
    setContent(null);
    setShow(false);
  }, []);

  const setModal = React.useCallback((data: SetModalValuesParams) => {
    const { children, title, size } = data;
    setContent(children);
    setTitle(title);
    setSize(size || "md");
    setShow(true);
  }, []);

  return (
    <ModalContext.Provider value={{ closeModal, setModal }}>
      <RenderIf isTrue={show}>
        <React.Suspense fallback={<></>}>
          <Modal
            showModal={show}
            size={size}
            title={title}
            onClose={closeModal}
          >
            {content}
          </Modal>
        </React.Suspense>
      </RenderIf>

      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

export const useModal = () => React.useContext(ModalContext);
