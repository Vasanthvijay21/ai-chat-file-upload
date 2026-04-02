import React from 'react';
import './MessageList.css';

const MessageList = ({ messages }) => {
  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="message-list-container">
      {messages.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">💬</div>
          <h3>Welcome to AI Chat!</h3>
          <p>Upload files on the left and start asking questions.</p>
        </div>
      ) : (
        messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role}`}> 
            <div className="message-content">
              {msg.content}
              {msg.files && msg.files.length > 0 && (
                <div className="message-files">
                  📎 Files: {msg.files.join(', ')}
                </div>
              )}
            </div>
            <div className="message-timestamp">
              {formatTime(msg.timestamp)}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MessageList;