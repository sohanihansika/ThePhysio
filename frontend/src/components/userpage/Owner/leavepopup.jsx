import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useNavigate, useLocation } from "react-router-dom";
import LeaveService from "../../service/LeaveService";

export default function ApprovalConfirmationDialog() {
  const [isOpen, setIsOpen] = useState(true);
  const [leaveInfo, setLeaveInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Extract physioId from query parameters
  const queryParams = new URLSearchParams(location.search);
  const physioId = queryParams.get('id');
  console.log('Physio ID:', physioId);

  // Function to fetch leave information
  const fetchLeaveInfo = async (Id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await LeaveService.getleaveById(Id, token);
      console.log('Fetched leave information:', response);
      setLeaveInfo(response);
    } catch (error) {
      console.error('Error fetching leave information:', error);
      setError('Failed to fetch leave information');
    } finally {
      setLoading(false);
    }
  };

  // Function to update leave status
  const updateLeaveStatus = async (status) => {
    try {
      const token = localStorage.getItem('token');
      const leaveUpdateData = { ...leaveInfo, status }; // Add status to the leaveInfo
      await LeaveService.leaveUpdate(physioId, leaveUpdateData, token);
      console.log(`Leave status updated to ${status}`);
      navigate("/leavehandle"); // Navigate to leave handle page on success
    } catch (error) {
      console.error('Error updating leave status:', error);
      setError('Failed to update leave status');
    }
  };

  // Fetch leave information when physioId changes
  useEffect(() => {
    if (physioId) {
      fetchLeaveInfo(physioId);
    }
  }, [physioId]);

  const handleApproveClick = () => {
    setIsOpen(false);
    updateLeaveStatus(2); // Status 2 for approved
  };

  const handleCancelClick = () => {
    setIsOpen(false);
    updateLeaveStatus(3); // Status 3 for canceled
  };
   const handleStayClick=()=>{
    setIsOpen(false);
    updateLeaveStatus(1);  // Navigate to leave handle page on success
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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
              Are you sure you want to approve this leave request?
            </Dialog.Description>
            {leaveInfo && (
              <div className="mt-4 text-sm text-gray-600">
                <p><strong>Count:</strong> {leaveInfo.count}</p>
                <p><strong>Leave Date:</strong> {new Date(leaveInfo.date).toLocaleDateString()}</p>
                <p><strong>Physio ID:</strong> {leaveInfo.physioId}</p>
                <p><strong>Reason:</strong> {leaveInfo.reason}</p>
              </div>
            )}
            <div className="items-center gap-2 mt-4 text-sm sm:flex">
              <button
                onClick={handleApproveClick}
                className="w-full sm:w-auto mt-2 p-3 flex-1 text-white bg-green-500 rounded-md outline-none ring-offset-2 ring-green-500 focus:ring-2"
              >
                Approve
              </button>
              <button
                onClick={handleStayClick}
                className="w-full sm:w-auto mt-2 p-3 flex-1 text-white bg-yellow-500 rounded-md outline-none ring-offset-2 ring-red-500 focus:ring-2"
              >
                Pending
              </button>
              <button
                onClick={ handleCancelClick}
                className="w-full sm:w-auto mt-2 p-3 flex-1 text-white bg-red-500 rounded-md outline-none ring-offset-2 ring-red-500 focus:ring-2"
              >
Disapprove              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
