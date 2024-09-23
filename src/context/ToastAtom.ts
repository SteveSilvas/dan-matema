import { atom } from 'jotai';

export interface IToastContext {
    isOpen: boolean
    text: string;
}
const toastContext = atom<IToastContext>({
    isOpen: false,
    text: '',
});

export default toastContext;