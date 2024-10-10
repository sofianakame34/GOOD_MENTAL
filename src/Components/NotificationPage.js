import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import NotificationsComponent from './Notification';

const notificationsData = [
  {
    id: 1,
    message: "Votre consultation a été confirmée pour le 15 octobre à 10h.",
    date: "2024-10-01T12:00:00",
    read: false,
  },
  {
    id: 2,
    message: "Nouveau message de votre professionnel de santé.",
    date: "2024-10-05T09:30:00",
    read: true,
  },
  {
    id: 3,
    message: "Un nouveau questionnaire est disponible.",
    date: "2024-10-08T14:15:00",
    read: false,
  },
];

const Container = styled.div`
  background-color: #f0f4f8;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
`;

const NotificationBox = styled.div`
  max-width: 500px;
  width: 100%;
  background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #4a5568;
  text-align: center;
  margin-bottom: 20px;
`;

const NotificationList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NotificationItem = styled.li`
  background-color: ${props => props.read ? '#ffffff' : '#bee3f8'};
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NotificationText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const NotificationDate = styled.div`
  font-size: 11px;
  color: #a0aec0;
  margin-top: 5px;
`;

const NotificationsPage = () => {
  return (
    <div>
        <NavBar/>
        <Container>
        <NotificationBox>
        <Title>Notifications</Title>
        <NotificationList>
          {notificationsData.map(notification => (
            <NotificationItem key={notification.id} read={notification.read}>
              <NotificationText>{notification.message}</NotificationText>
              <NotificationDate>{new Date(notification.date).toLocaleString()}</NotificationDate>
            </NotificationItem>
          ))}
        </NotificationList>
        <NotificationsComponent/>
      </NotificationBox>
    </Container>
    </div>
  );
};

export default NotificationsPage;
