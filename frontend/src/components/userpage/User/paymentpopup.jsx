import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useNavigate } from "react-router-dom";

export default function PaymentDialog() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleConfirmPayment = () => {
    setIsOpen(false);
    navigate("/addappoinment?1"); // Adjust the navigation as needed
  };

  const handleFullPayment = () => {
    setIsOpen(false);
    navigate("/addappoinment?2"); // Adjust the navigation as needed
  };

  const handleCancel = () => {
    setIsOpen(false);
    navigate("/cancel"); // Adjust the navigation as needed
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 w-full h-full bg-black opacity-40" />
        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-md mx-auto px-6 py-8">
          <div className="bg-white rounded-md shadow-lg px-6 py-8">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1a9 9 0 11-9 9 9 9 0 019-9zm0-1a10 10 0 1010 10A10 10 0 0010 0zm1 14a1 1 0 11-2 0 1 1 0 012 0zm-1-10a1 1 0 00-1 1v4a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <Dialog.Title className="text-xl font-bold text-gray-800 text-center mt-4">
              Payment Options
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-sm leading-relaxed text-center text-gray-500">
              Please choose an action for your payment.
            </Dialog.Description>
            <div className="flex flex-col items-center gap-2 mt-4 text-sm">
              <button
                onClick={handleConfirmPayment}
                className="w-full p-3 mb-2 text-white bg-[#172b59] rounded-md outline-none ring-offset-2 ring-[#172b59] focus:ring-2"
              >
                Confirm Payment
              </button>
              <button
                onClick={handleFullPayment}
                className="w-full p-3 mb-2 text-white bg-[#172b59] rounded-md outline-none ring-offset-2 ring-[#172b59] focus:ring-2"
              >
                Full Payment
              </button>
              <button
                onClick={handleCancel}
                className="w-full p-3 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
