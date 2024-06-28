import { create } from 'zustand'

interface AppState{
    isDeleteModalOpen: boolean;
    isRenameModalOpen: boolean;
    fileId: string | null;
    filename: string;
    setIsDeleteModalOpen: (open: boolean)=>void;
    setIsRenameModalOpen: (open: boolean)=>void;
    setFileId: (fileId: string)=>void;
    setFilename: (filename: string)=>void;
}

export const useAppStore=create<AppState>()((set)=>({
    fileId:null,
    setFileId: (fileId: string)=>set((state)=>({fileId})),

    filename:"",
    setFilename: (filename: string)=>set((state)=>({filename})),

    isDeleteModalOpen:false,
    setIsDeleteModalOpen: (open)=>set((state)=>({isDeleteModalOpen: open})),

    isRenameModalOpen:false,
    setIsRenameModalOpen: (open)=>set((state)=>({isRenameModalOpen: open})),
}))