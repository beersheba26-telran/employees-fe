import { Button, Dialog, IconButton, Portal } from "@chakra-ui/react";
import { FC, useState } from "react";
import { useColorModeValue } from "./ui/color-mode";
import { MdDelete } from "react-icons/md";
interface Props {
  content: string;
  onClose: (isDelete: boolean) => void;
  isPending: boolean;
}
const ConfirmDialog: FC<Props> = ({ content, onClose, isPending }) => {
  const bg = useColorModeValue("red.500", "red.200");
  const buttonsBackground = useColorModeValue("blue.500", "blue.200");
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Dialog.Trigger asChild>
        <IconButton
          backgroundColor={bg}
          size="xs"
          aria-label="Delete"
          disabled={isPending}
        >
          <MdDelete />
        </IconButton>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop></Dialog.Backdrop>
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Are You Sure</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>{content}</Dialog.Body>
            <Dialog.Footer>
              <Button
                backgroundColor={buttonsBackground}
                onClick={() => {
                  setOpen(false);
                  onClose(false);
                }}
              >
                Cancel
              </Button>
              <Button
                backgroundColor={buttonsBackground}
                onClick={() => {
                  setOpen(false);
                  onClose(true);
                }}
              >
                OK
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ConfirmDialog;
