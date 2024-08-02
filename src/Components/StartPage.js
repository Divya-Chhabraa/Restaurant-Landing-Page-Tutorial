import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import Navout from './Navout';
import './StartPage.css'; 
import './custom-datetime.css';

const StartPage = ({ onLogout }) => {
  const [meetingTime, setMeetingTime] = useState('');
  const [meetingDate, setMeetingDate] = useState(new Date());
  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingLink, setMeetingLink] = useState('');
  const [showPrompt, setShowPrompt] = useState(false); // State for prompt visibility

  // Function to generate a unique room ID
  function uuidv4() {
    return 'xxyxyxxyx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  const handleScheduleMeeting = () => {
    if (!isFutureDate()) {
      alert("Please select a future date and time.");
      return;
    }
    
    const roomId = uuidv4();
    const generatedLink = `http://localhost:8000/room.html?room=${roomId}`;
    setMeetingLink(generatedLink);

    // Show the custom prompt with meeting details
    setShowPrompt(true);
  };

  const handleInstantMeeting = () => {
    // const roomId = uuidv4();
    // const instantLink = `http://localhost:3000/room.html?room=${roomId}`;
    window.location.href = "http://localhost:8000/"; // Navigate to the instant meeting link
  };

  const copyToClipboard = () => {
    const meetingDetails = `Meeting Scheduled!\nTitle: ${meetingTitle}\nDate: ${meetingDate.toLocaleDateString()}\nTime: ${meetingTime}\nLink: ${meetingLink}`;
    navigator.clipboard.writeText(meetingDetails);
  };

  const handleDateTimeChange = (moment) => {
    setMeetingDate(moment.toDate());
    setMeetingTime(moment.format('HH:mm')); // Set the time separately
  };

  const isFutureDate = () => {
    const selectedDateTime = new Date(meetingDate);
    const currentDateTime = new Date();
    return selectedDateTime > currentDateTime;
  };

  return (

    <div className="home-container">
      <Navout />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading" style={{marginTop:"10px"}}>
          Start an Instant Meeting 👇🏼
          </h1>
          {/* <p className="primary-text">
          Just a click away! 
          </p> */}
          <button onClick={handleInstantMeeting} className="start-button">
          Start Meeting {" "}
          </button>
        </div>
        <div className="home-image-section">
        <div className="home-image-section newbg bg-white p-3 rounded w-25">
              <h1 style={{textAlign:"center", margin:"10px"}}>Schedule a Meeting</h1>
              <input
                type="text"
                placeholder="Meeting Title"
                value={meetingTitle}
                onChange={(e) => setMeetingTitle(e.target.value)}
                className="input"
              />
              <Datetime
                value={meetingDate}
                onChange={handleDateTimeChange}
                inputProps={{ placeholder: 'Select Date and Time', className: 'input' }}
                isValidDate={(current) => current.isAfter(Datetime.moment().subtract(1, 'day'))}
              />
              <button
                onClick={handleScheduleMeeting}
                className="schedule-button"
              >
                Schedule
              </button>
              {meetingLink && (
                <div className="meeting-link">
                  <p style={{textAlign:"left"}}>Meeting Link :</p>
                  <span>
                    <input
                    type="text"
                    value={meetingLink}
                    readOnly
                    className="link-input"
                  />
                  <button
                    onClick={() => navigator.clipboard.writeText(meetingLink)}
                    className="copy-button"
                  >  Copy Link
                  </button>
                  </span>
                  
                  
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Custom Prompt */}
        {showPrompt && (
          <div className="prompt-overlay">
            <div className="prompt-container">
              <h3>Meeting Scheduled!</h3>
              <p>
                <strong>Title :</strong> {meetingTitle}
              </p>
              <p>
                <strong>Date & Time :</strong> {meetingDate.toLocaleString()}
              </p>
              <p>
                <strong>Link :</strong> {meetingLink}
              </p>
              <button onClick={copyToClipboard} className="copy-button">
                Copy Message
              </button>
              <button
                onClick={() => setShowPrompt(false)}
                className="close-button"
              >
                Close
              </button>
            </div>
          </div>
        )}
        </div>
  )}

export default StartPage;
