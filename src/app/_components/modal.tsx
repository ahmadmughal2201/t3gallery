"use client";

import { useEffect, useRef, type ReactNode, type ElementRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

interface ModalProps {
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
    const router = useRouter();
    const dialogRef = useRef<ElementRef<"dialog">>(null);

    useEffect(() => {
        if (dialogRef.current && !dialogRef.current.open) {
            dialogRef.current.showModal();
        }
    }, []);

    const onDismiss = () => {
        router.back();
    };

    const stopPropagation = (e: MouseEvent | KeyboardEvent) => {
        e.stopPropagation();
    };

    return createPortal(
        <dialog
            ref={dialogRef}
            className="absolute h-screen w-screen bg-black/90 flex items-center justify-center m-0"
            onClose={onDismiss}
            onClick={onDismiss}

        >
         
              
                {children}
        </dialog>,
        document.getElementById("modal-root")!,
    );
};

export default Modal;
