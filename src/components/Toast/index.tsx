
import { Toast, ToastToggle } from "flowbite-react";
import { RiMessage2Fill } from "react-icons/ri";

export interface IToastComponent {
    isOpen?: boolean;
    text: string;
}
const ToastComponent: React.FC<IToastComponent> = ({
    isOpen = true,
    text,
}) => {
    return isOpen ? (
        <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                <RiMessage2Fill className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
                {text}
            </div>
            <ToastToggle />
        </Toast>
    ) : null;
}

export default ToastComponent;