import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './messages.scss'
function Messages() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const fetchMessages = async () => {
          try {
            const token = JSON.parse(localStorage.getItem('token')).token;
            const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/message/getall`,
              {
                headers:{
                    authorization:`Bearer ${token}`
                }
            }
            );
            //console.log(data)
            setMessages(data);
          } catch (error) {
            console.log(error.response.data.message);
          }
        };
        fetchMessages();
      }, []);
  return (
    <section className="messages">
      <h1>MESSAGES</h1> 
      <div className="wrappermessage">
        {messages && messages.length > 0 ? (
          messages.map((element) => {
            return (
              <div className="cardmessage" key={element._id}>
                <div className="detailsmessage">
                  <p>
                    First Name: <span>{element.firstName}</span>
                  </p>
                  <p>
                    Last Name: <span>{element.lastName}</span>
                  </p>
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p>
                    Message: <span>{element.message}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Messages!</h1>
        )}
      </div>
    </section>
  )
}

export default Messages