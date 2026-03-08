import { Button, Dialog, Portal } from '@chakra-ui/react'
import {useState} from 'react'
import { useFilters } from '../state-management/filters-store';

const Filters = () => {
 const [open, setOpen] = useState(false)
 const filters = useFilters();
  return (
    <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export default Filters
