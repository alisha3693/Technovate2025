import React, { useState, useEffect } from "react";
import "./Schedule.css"; // CSS file for styling
import backgroundVideo from "../../assets/Videos/assassins-creed-iv-black-flag-moewalls-com.mp4";

// Schedule data for different days
const scheduleData = {
    day1: [
        { time: "10:00 AM", event: "Opening Ceremony", venue: "Hall A" },
        { time: "11:00 AM", event: "Keynote Speech", venue: "Hall B" },
        { time: "01:00 PM", event: "Workshop 1", venue: "Room 101" },
    ],
    day2: [
        { time: "10:00 AM", event: "Panel Discussion", venue: "Hall C" },
        { time: "12:00 PM", event: "Networking Lunch", venue: "Cafeteria" },
        { time: "02:00 PM", event: "Workshop 2", venue: "Room 102" },
    ],
    day3: [
        { time: "09:00 AM", event: "Hackathon", venue: "Lab A" },
        { time: "12:00 PM", event: "Project Showcase", venue: "Hall D" },
        { time: "03:00 PM", event: "Closing Ceremony", venue: "Hall A" },
    ],
};

const Schedule = () => {
    const [currentDay, setCurrentDay] = useState("day1");

    // Trigger animations after component mounts
    useEffect(() => {
        const scheduleContainer = document.querySelector(".schedule-container");
        scheduleContainer.classList.add("loaded");

        // Debugging log to check if component is rendered
        console.log("Schedule component mounted");
    }, []);

    // Check if scheduleData exists
    console.log("Current Day Schedule Data:", scheduleData[currentDay]);

    return (
        <div className="schedule-container">
            {/* Background Video */}
            <video autoPlay muted loop className="background-video">
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Schedule Content */}
            <div className="schedule-content">
                <div className="schedule-header">
                    <h1 className="schedule-title">SCHEDULE</h1>
                    <div className="days-container">
                        <span
                            className={`day ${currentDay === "day1" ? "active" : ""}`}
                            onClick={() => setCurrentDay("day1")}
                        >
                            DAY 1
                        </span>
                        <span
                            className={`day ${currentDay === "day2" ? "active" : ""}`}
                            onClick={() => setCurrentDay("day2")}
                        >
                            DAY 2
                        </span>
                        <span
                            className={`day ${currentDay === "day3" ? "active" : ""}`}
                            onClick={() => setCurrentDay("day3")}
                        >
                            DAY 3
                        </span>
                    </div>
                </div>

                {/* Schedule Table */}
                <div className="schedule-table">
                    <div className="table-header">
                        <span>Time</span>
                        <span>Event Name</span>
                        <span>Venue</span>
                    </div>
                    <div className="table-rows">
                        {scheduleData[currentDay].map((item, index) => (
                            <div className="table-row" key={index}>
                                <span>{item.time}</span>
                                <span>{item.event}</span>
                                <span>{item.venue}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
