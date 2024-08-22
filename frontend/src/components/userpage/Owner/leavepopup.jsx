import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useNavigate } from "react-router-dom";

export default function ApprovalConfirmationDialog() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleApproveClick = () => {
    setIsOpen(false);
    navigate("/leavehandle"); // Navigate to leave handle page on approval
  };

  const handleCancelClick = () => {
    setIsOpen(false);
    navigate("/leavehandle"); // Navigate to home page on cancellation
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
                  d="M10 1a9 9 0 11-9 9 9 9 0 019-9zm0-1a10 10 0 1010 10A10 10 0 0010 0zm-1 5a1 1 0 00-1 1v4a1 1 0 001 1h2a1 1 0 001-1V6a1 1 0 00-1-1h-2zm0 6a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <Dialog.Title className="text-xl font-bold text-gray-800 text-center mt-4">
              Confirm Approval
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-sm leading-relaxed text-center text-gray-500">
              Are you sure you want to approve this leave request? This action cannot be undone.
            </Dialog.Description>
            <div className="items-center gap-2 mt-4 text-sm sm:flex">
              <button
                onClick={handleApproveClick}
                className="w-full sm:w-auto mt-2 p-3 flex-1 text-white bg-green-500 rounded-md outline-none ring-offset-2 ring-green-500 focus:ring-2"
              >
                Yes, Approve
              </button>
              <button
                onClick={handleCancelClick}
                className="w-full sm:w-auto mt-2 p-3 flex-1 text-white bg-red-500 rounded-md outline-none ring-offset-2 ring-red-500 focus:ring-2"
              >
                No, Cancel
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
