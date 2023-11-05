import React, { useEffect, useState } from "react";
import "./OrganizerStyle.css";
import { SlOrganization } from "react-icons/sl";
import { AiOutlineFileAdd, AiOutlineDelete } from "react-icons/ai";

import { users_dates } from "../../assets/dates/USERS_DB";
import axios from "axios";
import { PORT } from "../../assets/dates/port";
import { Link, useNavigate } from "react-router-dom";

const OrganizerPage = () => {
  const [lastItemID, setLastItemID] = useState(0);
  const [userInfo, setUserInfo] = useState(users_dates[0]);
  const [activeMode, setAvtiveMode] = useState(true);
  const [appState, setAppState] = useState([]);
  const [currentState, setcurrentState] = useState([]);
    const navigate = useNavigate()
  useEffect(() => {
    if (appState.length == 0) {
      axios
        .get(`http://localhost:${PORT}/rest-api/getAllEvents`)
        .then((response) => {
          console.log(response.data);
          setAppState(response.data);
          setLastItemID(response.data.at(-1).event_id + 1);
          setcurrentState(
            response.data.filter(
              (value) => value.event_authorID == userInfo.user_id
            )
          );
        });
    }
    setcurrentState(currentState);

    console.log(currentState);
  }, [appState, currentState]);
  const [eventName, setEventName] = useState("");
  const [eventSubtitle, setEventSubtitle] = useState("");
  const [eventText, setEventText] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [eventType, setEventType] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const new_event = {};
    await axios.post(`http://localhost:${PORT}/rest-api/putNewEvent`, {
      event_id: lastItemID,
      event_image: "event_9.jpg",
      event_name: eventName,
      event_subtitle: eventSubtitle,
      event_text: eventText,
      event_authorID: userInfo.user_id,
      event_location: eventLocation,
      event_start: eventStart,
      event_end: eventEnd,
      event_type: eventType,
    });
    setAppState([]);
  };
  function removeById(id, array) {
    const index = array.findIndex((obj) => obj.event_id == id);
    if (index > -1) {
      array.splice(index, 1);
    }
    return array;
  }
  const handleDeleteClick = async (event_id) => {
    await axios.post(`http://localhost:${PORT}/rest-api/deleteAEvent`, {
      event_id: event_id,
    });
    setAppState([]);
  };
  const handleClick = (e) =>{
    e.preventDefault();
    navigate('/')
  }
  useEffect(() => {
    console.log(userInfo);
    console.log(currentState);
  });
  return (
    <div className="org_page_wrapper">
      <div className="org_page_header">
        <p>
          <SlOrganization className="org_page_header_icons" /> Организация
          мероприятий
        </p>
        <div className="org_page_nav">
          <p
            className={activeMode ? "active" : ""}
            onClick={() => setAvtiveMode(true)}
          >
            {" "}
            <AiOutlineFileAdd /> Добавление
          </p>
          <p
            className={!activeMode ? "active" : ""}
            onClick={() => setAvtiveMode(false)}
          >
            <AiOutlineDelete /> Удаление{" "}
          </p>
          <button onClick={(e)=>handleClick(e)}>Выход</button>
        </div>
      </div>
      <div className="org_page_content">
        {activeMode ? (
          <div className="add_form">
            <form>
              <p>
                Название мероприятия
                <input
                  onChange={(e) => setEventName(e.target.value)}
                  value={eventName}
                  type="text"
                />
              </p>

              <p>
                Короткое описание
                <input
                  onChange={(e) => setEventSubtitle(e.target.value)}
                  value={eventSubtitle}
                  type="text"
                />
              </p>

              <p>Полное описание</p>
              <textarea
                onChange={(e) => setEventText(e.target.value)}
                value={eventText}
                cols="60"
                rows="5"
              ></textarea>

              <p>
                Место проведения
                <input
                  onChange={(e) => setEventLocation(e.target.value)}
                  value={eventLocation}
                  type="text"
                />
              </p>

              <p>
                Начало мероприятия
                <input
                  onChange={(e) => setEventStart(e.target.value)}
                  value={eventStart}
                  type="date"
                />{" "}
                <br />
                Конец мероприятия
                <input
                  onChange={(e) => setEventEnd(e.target.value)}
                  value={eventEnd}
                  type="date"
                />
              </p>
              <p>
                Категория:
                <input
                  onChange={(e) => setEventType(e.target.value)}
                  value={eventType}
                  type="text"
                />
              </p>

              <button onClick={handleFormSubmit}>Добавить мероприятие</button>
            </form>
          </div>
        ) : (
          <div className="delete_form">
            {currentState
              ? currentState.map((el) => (
                  <div key={el.event_id} className="card_item">
                    <img
                      src={el.event_image}
                      alt="#"
                      className="card_item_bg"
                    />
                    <div className="card_item_header">
                      <p>{el.event_name}</p>
                    </div>
                    <div className="card_item_title">
                      <p>{el.event_subtitle}</p>
                    </div>
                    <button onClick={() => handleDeleteClick(el.event_id)}>
                      УДАЛИТЬ
                    </button>
                  </div>
                ))
              : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrganizerPage;
