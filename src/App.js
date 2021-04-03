import React, { useEffect, useState } from "react"
import './App.css';
import Sidebar from "./Sidebar"
import Chat from "./Chat"
import Pusher from "pusher-js"
import axios from "./axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync")
    .then(response => {
      setMessages(response.data);
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('1f31db359a61481032ab', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    // cleanup function
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
      <Router>
        <Sidebar />

        <Switch>
          <Route path="/rooms/:roomId">
            <Chat />
          </Route>
          <Route path="/">
            <Chat />
          </Route>
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
