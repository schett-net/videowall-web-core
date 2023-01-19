import { useDisclosures } from "../../../../hooks/useDisclosure";
import { Privacy } from "../Privacy";
import { Tutorial } from "../Tutorial";

interface DisclosuresProviderProps {
  children: React.ReactNode;
}

export const ModalWrapper = (props: DisclosuresProviderProps) => {
  const { children } = props;

  const disc = useDisclosures();

  return (
    <>
      {disc.tutorialModal && (
        <Tutorial
          isOpen={disc.tutorialModal.isOpen}
          onClose={disc.tutorialModal.onClose}
        />
      )}
      {children}
    </>
  );
};
