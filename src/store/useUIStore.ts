import { create } from "zustand";

interface UIState {
  mobileMenuOpen: boolean;
  modalOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  setModalOpen: (isOpen: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  mobileMenuOpen: false,
  modalOpen: false,
  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
  setModalOpen: (isOpen: boolean) => set({ modalOpen: isOpen }),
}));
