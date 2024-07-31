import React, { useState } from 'react';

// Dummy data for attendance
const dummyData = {
    "123": ["2024-07-01", "2024-07-05", "2024-07-10"],
    "456": ["2024-07-02", "2024-07-07", "2024-07-11"],
    "789": ["2024-07-03", "2024-07-08", "2024-07-12"],
};

const AttendancePage = () => {
    const [memberId, setMemberId] = useState('');
    const [attendanceDates, setAttendanceDates] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const today = new Date().toISOString().split('T')[0]; // Today's date in YYYY-MM-DD format

    const handleMemberIdChange = (event) => {
        setMemberId(event.target.value);
    };

    const handleCheckAttendance = () => {
        if (dummyData[memberId]) {
            setAttendanceDates(dummyData[memberId]);
        } else {
            setAttendanceDates([]);
        }
    };

    const handleReset = () => {
        setMemberId('');
        setAttendanceDates([]);
    };

    const handleToggleAttendance = (date) => {
        if (date === today) {
            if (memberId) {
                setAttendanceDates((prevDates) => {
                    if (prevDates.includes(date)) {
                        const newDates = prevDates.filter(d => d !== date);
                        dummyData[memberId] = newDates; // Update dummy data
                        return newDates;
                    } else {
                        const newDates = [...prevDates, date].sort();
                        dummyData[memberId] = newDates; // Update dummy data
                        return newDates;
                    }
                });
            }
        } else {
            alert("You can only mark attendance for today's date.");
        }
    };

    const handlePreviousMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const generateCalendar = () => {
        const daysInMonth = getDaysInMonth(currentMonth, currentYear);
        const calendar = [];

        for (let i = 1; i <= daysInMonth; i++) {
            const date = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
            const isAttended = attendanceDates.includes(date);
            const isToday = date === today;

            calendar.push(
                <div
                    key={i}
                    className={`day-container ${isAttended ? 'attended' : ''} ${isToday ? 'today' : ''}`}
                    style={{
                        textAlign: 'center',
                        margin: '5px',
                    }}
                >
                    <div
                        className="day"
                        style={{
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            backgroundColor: isAttended ? 'green' : 'white',
                            color: isAttended ? 'white' : 'black',
                            cursor: isToday ? 'pointer' : 'not-allowed',
                            transition: 'background-color 0.3s, color 0.3s',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = isToday ? '#f0f0f0' : e.currentTarget.style.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = isAttended ? 'green' : 'white'}
                        onClick={() => isToday && handleToggleAttendance(date)}
                    >
                        {i}
                    </div>
                </div>
            );
        }

        return calendar;
    };

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return (
        <div className="relative min-h-screen p-4">
            {/*<div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url('./src/assets/GymPlans/gymp.jpg')`, // Replace with your image URL
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.8, // 70% opacity of the background image
                    zIndex: -1,
                }}
            ></div>*/}
            
            <div className="mb-8">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Mark Attendance</h3>
                <div className="flex flex-col items-center mt-4">
                    <div className="flex items-center mb-4">
                        <input
                            type="text"
                            placeholder="Enter Member ID"
                            value={memberId}
                            onChange={handleMemberIdChange}
                            className="border border-gray-300 p-2 rounded-md mr-2"
                            style={{ width: '200px' }}
                        />
                        <button
                            onClick={handleCheckAttendance}
                            className="bg-[#007BFF] text-white p-2 rounded-md cursor-pointer transition hover:bg-[#0056b3]"
                        >
                            Check Attendance
                        </button>
                        <button
                            onClick={handleReset}
                            className="bg-[#FF4C4C] text-white p-2 rounded-md cursor-pointer transition hover:bg-[#cc0000] ml-2"
                        >
                            Reset
                        </button>
                    </div>
                    {attendanceDates.length > 0 && (
                        <div style={{ marginTop: '20px', maxWidth: '600px' }}>
                            <h2 className="text-2xl font-bold mb-4 text-[#000099] text-center">
                                {monthNames[currentMonth]} {currentYear}
                            </h2>
                            <div className="flex justify-between mb-4">
                                <button
                                    onClick={handlePreviousMonth}
                                    className="bg-[#007BFF] text-white p-2 rounded-md cursor-pointer transition hover:bg-[#0056b3]"
                                >
                                    Previous Month
                                </button>
                                <button
                                    onClick={handleNextMonth}
                                    className="bg-[#007BFF] text-white p-2 rounded-md cursor-pointer transition hover:bg-[#0056b3]"
                                >
                                    Next Month
                                </button>
                            </div>
                            <div
                                className="grid grid-cols-7 gap-2"
                                style={{ maxWidth: '600px', margin: '0 auto' }}
                            >
                                {generateCalendar()}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AttendancePage;
