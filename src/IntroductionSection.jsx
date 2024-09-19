import React, { useState } from 'react';

const modules = [
    {
        name: 'Travel Management',
        icon: 'fa-solid fa-taxi',
        details: {
            title: 'Travel Management',
            description: 'Manage all aspects of your business travel needs efficiently.',
            sections: [
                {
                    heading: 'Trip Information',
                    items: ['Trip Data/Totals', 'Receipts, Receipts Without Plan', 'Cost Assignment'],
                },
                {
                    heading: 'Travel Management',
                    items: ['Trip Destinations', 'Expense Reporting (By Period)', 'Exceeded Trip Days'],
                },
                {
                    heading: 'Financial Aspects',
                    items: ['FI Payment Date', 'Income Related Expenses', 'Income Tax recovery'],
                },
            ],
        },
    },
    {
        name: 'Time Management',
        icon: 'fa-solid fa-clock',
        details: {
            title: 'Time Management',
            description: 'Track employee time and attendance, manage shifts, and leaves.',
            sections: [
                {
                    heading: 'Planned Time',
                    items: ['Shift Planning', 'Holiday Calendar'],
                },
                {
                    heading: 'Leave Management',
                    items: ['Quotas and Acurals', 'Leave Applications'],
                },
                {
                    heading: 'Actual Time',
                    items: ['Time and Attendance', 'Punch In/Out Status'],
                },
                {
                    heading: 'Timesheets',
                    items: ['To Be Approved', 'Pending'],
                }
            ],
        },
    },
    {
        name: 'Task Management',
        icon: 'fa-solid fa-tasks',
        details: {
            title: 'Task Management',
            description: 'Plan, track, and manage all your projects and tasks in one place.',
            sections: [
                {
                    heading: 'Activity Plan',
                    items: ['Start-End Time', 'Duration', 'Priority'],
                },
                {
                    heading: 'Task Reports',
                    items: ['Active Tasks', 'Tickets', 'Planned/Actual Tasks'],
                },
            ],
        },
    },
    {
        name: 'Purchase Requests',
        icon: 'fa-solid fa-cart-arrow-down',
        details: {
            title: 'Purchase Requests',
            description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            sections: [
                {
                    heading: 'Raise PR',
                    items: ['Past PR', 'My PR tickets', 'PR - Pending my Action', 'PR - Completed my Action'],
                },
                {
                    heading: 'PR Reports',
                    items: ['PR Pending Approvals', 'PR within Budgets', 'Open PRs', 'Closed PRs', 'Project wise PRs'],
                },
            ],
        },
    },
    {
        name: 'Expense Reimbursement',
        icon: 'fa-solid fa-wallet',
        details: {
            title: 'Expense Reimbursement',
            description: 'Take control of your company\'s finances with our robust tools.',
            sections: [
                {
                    heading: 'iExpense',
                    items: ['Raise iExpense', 'My iExpense Requests', 'iExpense - Pending (My Action)', 'iExpense - Completed (My Action)'],
                },
                {
                    heading: 'Reimbursements',
                    items: ['Reimbursement Requests', 'Description and Approvals'],
                },
            ],
        },
    },
    {
        name: 'Employee Central',
        icon: 'fa-solid fa-user-tie',
        details: {
            title: 'Employee Central',
            description: 'Empower your employees with Employee Central options.',
            sections: [
                {
                    heading: 'Employee Management',
                    items: ['Employee Master Data', 'Planned Timer Data'],
                },
                {
                    heading: 'Payroll& Compensation',
                    items: ['Payroll Data (One-time,Recurring)', 'Payslips & Form 16'],
                },
                {
                    heading: 'Payroll Reports',
                    items: ['CTC Report', 'Salary Register', 'Payments & Deductions', 'Bank Statements', 'FI-CO Postings'],
                },
            ],
        },
    },
];

const IntroductionSection = () => {
    // State to track the active module
    const [activeModuleIndex, setActiveModuleIndex] = useState(0);
    const [hoveredModuleIndex, setHoveredModuleIndex] = useState(null); // To track which module is being hovered over

    // Handle the next module (right arrow click)
    const handleNextModule = () => {
        setActiveModuleIndex((prevIndex) =>
            prevIndex === modules.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Handle the previous module (left arrow click)
    const handlePreviousModule = () => {
        setActiveModuleIndex((prevIndex) =>
            prevIndex === 0 ? modules.length - 1 : prevIndex - 1
        );
    };

    // Determine which module's details to show (hovered or active)
    const moduleToShow = hoveredModuleIndex !== null ? modules[hoveredModuleIndex] : modules[activeModuleIndex];

    return (
        <div
            className="text-center pt-8 bg-cover bg-center bg-no-repeat min-h-screen"
            style={{
                backgroundImage: "url('/Landback.png')",
                backgroundSize: 'cover',          // Ensure the image covers the full area
                backgroundPosition: 'center',    // Center the background image
                backgroundPositionY: '70%',     // Reduse the colour of background image make it visible
                backgroundPositionX: '80',     // increase the bottom length
                minHeight: '190vh',           // Ensure it covers the entire viewport height in the bottom
                width: '1800px',             // Full width of the page
                position: 'static',         // Ensure it remains relative to the viewport
                margin: 0,                 // Remove any margin space
                padding: 0,               // Remove any padding space
            }}
        >
            {/* Header Section */}
            <h2 className="text-4xl font-extrabold text-purple-500">Introduction to your iEmpPower modules:</h2>
            <p className="text-gray-300 mt-4 text-lg max-w-3xl mx-auto">
                Discover our comprehensive suite of modules designed to streamline your HR processes and boost productivity.
            </p>

            {/* Icon Section */}
            <div className="flex justify-center mt-8 space-x-6">
                {modules.map((module, index) => (
                    <div
                        key={index}
                        className="text-white text-center cursor-pointer"
                        onMouseEnter={() => setHoveredModuleIndex(index)} // Update hovered module
                        onMouseLeave={() => setHoveredModuleIndex(null)} // Reset hovered module
                    >
                        <i className={`${module.icon} text-5xl`}></i>
                        {/*<p className="mt-2">{module.name}</p>*/}
                    </div>
                ))}
            </div>

            {/* Details Section */}
            <div className="bg-purple-800 text-white rounded-lg mt-12 p-6 max-w-3xl mx-auto shadow-lg relative">
                <div className="flex items-start justify-between">
                    {/* Icon and Title */}
                    <div className="flex items-center space-x-4">
                        <i className={`${moduleToShow.icon} text-4xl`}></i>
                        <h3 className="text-3xl font-bold">{moduleToShow.details.title}</h3>
                    </div>

                    {/* Navigation arrows */}
                    <div className="absolute top-6 right-6 flex space-x-4">
                        {/* Left Arrow */}
                        <i
                            className="fa-solid fa-caret-left text-2xl cursor-pointer"
                            onClick={handlePreviousModule}
                        ></i>

                        {/* Right Arrow */}
                        <i
                            className="fa-solid fa-caret-right text-2xl cursor-pointer"
                            onClick={handleNextModule}
                        ></i>
                    </div>
                </div>

                {/* Subheading */}
                <p className="text-gray-300 mt-2 text-base">{moduleToShow.details.description}</p>

                {/* List Section */}
                <div className="grid grid-cols-2 gap-8 mt-6 text-lg">
                    {moduleToShow.details.sections.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-bold">{section.heading}</h4>
                            <ul className="space-y-2 mt-2">
                                {section.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-right mt-6">
                    <button className="bg-white text-purple-800 font-semibold py-2 px-6 rounded-lg shadow">
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IntroductionSection;