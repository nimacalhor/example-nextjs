"use client";

import {
  Toast,
  ToastClose,
  ToastProvider,
  ToastViewport
} from "@ui/toast";
import { useToast } from "@ui/use-toast";
import dynamic from "next/dynamic";

export function Toaster() {
  const { toasts } = useToast();

const ToastTitle = dynamic(() => import('@ui/toast').then(mod => mod.ToastTitle), {})
const ToastDescription = dynamic(() => import('@ui/toast').then(mod => mod.ToastDescription), {})

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
