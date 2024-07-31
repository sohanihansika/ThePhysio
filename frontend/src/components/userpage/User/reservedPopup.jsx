import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useNavigate } from "react-router-dom";

export default () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleOkClick = () => {
    setIsOpen(false);
    navigate("/calendar"); // Adjust the navigation as needed
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 w-full h-full bg-black opacity-40" />
        <Dialog.Content className="fixed top-[50%] left-[60%] translate-x-[-60%] translate-y-[-50%] w-full max-w-xl mx-auto px-6 py-8">
          <div className="bg-white rounded-md shadow-lg px-6 py-8">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-red-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1a9 9 0 11-9 9 9 9 0 019-9zm0-1a10 10 0 1010 10A10 10 0 0010 0zm1.293 12.293a1 1 0 00-1.414 0L10 12.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 11 7.293 9.707a1 1 0 011.414-1.414L10 9.586l1.293-1.293a1 1 0 111.414 1.414L11.414 11l1.293 1.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <Dialog.Title className="text-xl font-bold text-gray-800 text-center mt-4">
              All Time Slots Are Booked
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-sm leading-relaxed text-center text-gray-500">
            All time slots are reserved for this day. Please select another date.
            </Dialog.Description>
            <div className="items-center gap-2 mt-4 text-sm sm:flex">
              <Dialog.Close asChild>
                <button
                  onClick={handleOkClick}
                  className="w-full mt-2 p-3 flex-1 text-white bg-[#172b59] rounded-md outline-none ring-offset-2 ring-[#172b59] focus:ring-2"
                >
                  OK
                </button>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
