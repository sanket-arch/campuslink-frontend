'use client';
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Toast from "@radix-ui/react-toast";
import { hideToast } from "@/store/reducers/globalReducers";
import _ from "lodash";

const ToastManager = () => {
  const dispatch = useDispatch();
  const { toastOpen, toastMessage, toastTitle, toastType, toastDuration } = useSelector((state) => state.global);

  React.useEffect(() => {
    console.log('[ToastManager] toastOpen:', toastOpen, 'toastMessage:', toastMessage, 'toastTitle:', toastTitle);
  }, [toastOpen, toastMessage, toastTitle]);

  const toastStyles = {
    info: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-800",
    success: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-800",
    error: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-200 dark:border-red-800",
  };

  return (
    <Toast.Provider swipeDirection="up" duration={toastDuration || 2000}>
      <Toast.Root
        className={`${toastStyles[toastType]} shadow-lg rounded-lg px-4 py-3 mb-4 border flex flex-col gap-1 min-w-[280px] max-w-xs z-[9999]`}
        open={toastOpen}
        onOpenChange={(v) => !v && dispatch(hideToast())}
      >
        {!_.isEmpty(toastTitle) && (
          <Toast.Title className="font-semibold text-base mb-1">{toastTitle}</Toast.Title>
        )}
        <Toast.Description className="text-sm">{toastMessage}</Toast.Description>
        	<Toast.Close aria-label="Close" className="absolute top-2 right-4 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">
            <span aria-hidden>×</span>
          </Toast.Close>
      </Toast.Root>
      <Toast.Viewport className="fixed top-4 right-4 flex flex-col gap-2 w-auto z-[9999]" />
    </Toast.Provider>
  );
};

export default ToastManager;
