import { UseDisclosureReturn, useId } from "@chakra-ui/hooks";
import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface IUseDisclosureReturn extends UseDisclosureReturn {
  onOpen: (data?: any) => void;
  modalContent?: any;
}

interface DisclosuresContextParams {
  tutorialModal: IUseDisclosureReturn;
}

export interface UseDisclosureProps {
  isOpen?: boolean;
  defaultIsOpen?: boolean;
  defaultModalContent?: any;
  onClose?(): void;
  onOpen?(): void;
  id?: string;
}

type HTMLProps = React.HTMLAttributes<HTMLElement>;

interface DisclosuresProviderProps {
  children: React.ReactNode;
}

const DisclosuresContext = createContext<Partial<DisclosuresContextParams>>({});

export function useCallbackRef<T extends (...args: any[]) => any>(
  callback: T | undefined,
  deps: React.DependencyList = []
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(((...args) => callbackRef.current?.(...args)) as T, deps);
}

/**
 * `useDisclosure` is a custom hook used to help handle common open, close, or toggle scenarios.
 * It can be used to control feedback component such as `Modal`, `AlertDialog`, `Drawer`, etc.
 *
 * @see Docs https://chakra-ui.com/docs/hooks/use-disclosure
 */
export function useDisclosure(props: UseDisclosureProps = {}) {
  const {
    onClose: onCloseProp,
    onOpen: onOpenProp,
    isOpen: isOpenProp,
    id: idProp,
  } = props;

  const handleOpen = useCallbackRef(onOpenProp);
  const handleClose = useCallbackRef(onCloseProp);

  const [isOpenState, setIsOpen] = useState(props.defaultIsOpen || false);
  const [modalContent, setModalContent] = useState(
    props?.defaultModalContent || null
  );

  const isOpen = isOpenProp !== undefined ? isOpenProp : isOpenState;

  const isControlled = isOpenProp !== undefined;

  const uid = useId();
  const id = idProp ?? `disclosure-${uid}`;

  const onClose = useCallback(() => {
    if (!isControlled) {
      setIsOpen(false);
    }
    handleClose?.();
  }, [isControlled, handleClose]);

  const onOpen = useCallback(
    (data?: any) => {
      if (!isControlled) {
        setIsOpen(true);
        setModalContent(data);
      }
      handleOpen?.();
    },
    [isControlled, handleOpen]
  );

  const onToggle = useCallback(() => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  }, [isOpen, onOpen, onClose]);

  function getButtonProps(props: HTMLProps = {}): HTMLProps {
    return {
      ...props,
      "aria-expanded": isOpen,
      "aria-controls": id,
      onClick(event) {
        props.onClick?.(event);
        onToggle();
      },
    };
  }

  function getDisclosureProps(props: HTMLProps = {}): HTMLProps {
    return {
      ...props,
      hidden: !isOpen,
      id,
    };
  }

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    modalContent,
    isControlled,
    getButtonProps,
    getDisclosureProps,
  };
}

export const useDisclosures = () => {
  const disclosures = useContext(DisclosuresContext);

  /*if (!disclosures) {
    throw new ContextNoProviderError('useDisclosures', 'DisclosuresProvider');
  }*/

  return disclosures;
};

export const DisclosuresProvider = (props: DisclosuresProviderProps) => {
  const { children } = props;

  const tutorialModal = useDisclosure();

  const value = {
    tutorialModal,
  };

  return (
    <DisclosuresContext.Provider value={value}>
      {children}
    </DisclosuresContext.Provider>
  );
};
