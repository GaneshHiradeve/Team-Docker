import React from "react";
import "./Chat.scss";

const Chat = () => {
  return (
    <div>
      <div class="app-container">
        <div class="contacts">
          <div class="chat-header">Contacts</div>
          <div class="contact-list">
            <div class="contact">
              <div class="contact-logo">
                <img src="profile.png" alt="Contact Logo" />
              </div>
              <div class="contact-name">John Doe</div>
            </div>
            <div class="contact">
              <div class="contact-logo">
                <img src="profile.png" alt="Contact Logo" />
              </div>
              <div class="contact-name">Jane Doe</div>
            </div>
          </div>
        </div>

        <div class="messages">
          <div class="chat-header">Chat with John Doe</div>
          <div class="chat-messages">
            <div class="message">
              <div class="user">John Doe</div>
              <div class="timestamp">12:30 PM</div>
              <div class="text">Hello there!</div>
            </div>
            <div class="message sent">
              <div class="user">You</div>
              <div class="timestamp">12:35 PM</div>
              <div class="text">Hi! How can I help you?</div>
            </div>
            <div class="message">
              <div class="user">John Doe</div>
              <div class="timestamp">12:40 PM</div>
              <div class="text">I'm doing well, thank you!</div>
            </div>
          </div>
          <div class="chat-input">
            <input
              type="text"
              class="input-box"
              placeholder="Type your message"
            />
            <button class="send-button">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
