import { create } from "zustand";

type DropModalStore = {
  isOpen: boolean;
  payload: { [key: string]: string[] };
  currentKey: string | null;
  uploadedFiles: string[];
  onOpen: (key: string) => void;
  onClose: () => void;
  reset: () => void;
  onFilesUploaded: (files: string[]) => void;
  setUploadedFiles: (files: string[]) => void;
};

const useAttachment = create<DropModalStore>((set) => ({
  isOpen: false,
  payload: {},
  currentKey: null,
  uploadedFiles: [],
  onOpen: (key: string) => set({ isOpen: true, currentKey: key }),
  onClose: () =>
    set({
      isOpen: false,
      currentKey: null,
      uploadedFiles: [],
    }),
  reset: () => set({ payload: {}, currentKey: null, uploadedFiles: [] }),
  onFilesUploaded: (files) =>
    set((state) => {
      const currentKey = state.currentKey;
      if (currentKey) {
        const updatedPayload = { ...state.payload };
        updatedPayload[currentKey] = [
          ...new Set([...(updatedPayload[currentKey] || []), ...files]),
        ];
        return {
          payload: updatedPayload,
          uploadedFiles: [...new Set([...state.uploadedFiles, ...files])],
        };
      }
      return state;
    }),
  setUploadedFiles: (files) =>
    set((state) => ({
      uploadedFiles: [...new Set([...state.uploadedFiles, ...files])],
    })),
}));

export default useAttachment;
