import { create } from "zustand"

interface SubModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useSubModal = create<SubModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useSubModal
