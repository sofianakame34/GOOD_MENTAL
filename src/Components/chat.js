import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const chatData = {
  "chats": [
    {
      "chat_id": "1",
      "user_id": "101",
      "admin_id": "501",
      "message": "Bonjour, j'aimerais en savoir plus sur le service GoodMental.",
      "date_message": "2024-10-09T09:15:00",
      "lu": false
    },
    {
      "chat_id": "1",
      "user_id": "102",
      "admin_id": "501",
      "message": "Bien sûr ! GoodMental vous permet de suivre votre état mental et d'échanger avec des professionnels.",
      "date_message": "2024-10-09T09:16:00",
      "lu": true
    },
    {
      "chat_id": "2",
      "user_id": "102",
      "admin_id": "502",
      "message": "Je me sens un peu stressé ces derniers temps, que me conseillez-vous ?",
      "date_message": "2024-10-09T10:30:00",
      "lu": false
    },
    {
      "chat_id": "2",
      "user_id": "102",
      "admin_id": "502",
      "message": "Je vous recommande de commencer par répondre aux questionnaires de suivi pour mieux comprendre votre état.",
      "date_message": "2024-10-09T10:32:00",
      "lu": true
    },
    {
      "chat_id": "3",
      "user_id": "1031",
      "admin_id": "503",
      "message": "Merci pour vos conseils, ça m'aide beaucoup.",
      "date_message": "2024-10-09T11:00:00",
      "lu": true
    }
  ]
};

const Container = styled.div`
  background-color: #f0f4f8;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
`;

const ChatBox = styled.div`
  max-width: 600px;
  width: 100%;
  background: linear-gradient(135deg, #f7f9fc 0%, #dceefb 100%);
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

const ChatListStyled = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ChatItem = styled.li`
  display: flex;
  justify-content: ${props => props.isAdmin ? 'flex-start' : 'flex-end'};
  margin-bottom: 20px;
`;

const MessageBubble = styled.div`
  max-width: 70%;
  padding: 12px 18px;
  border-radius: 18px;
  border-bottom-${props => props.isAdmin ? 'left-radius' : 'right-radius'}: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.isAdmin ? '#ffffff' : '#4299e1'};
  color: ${props => props.isAdmin ? '#4a5568' : '#ffffff'};
  position: relative;
`;

const MessageText = styled.p`
  margin: 0 0 8px 0;
  font-size: 14px;
  line-height: 1.4;
`;

const MessageMeta = styled.div`
  font-size: 11px;
  color: ${props => props.isAdmin ? '#a0aec0' : '#bee3f8'};
  display: flex;
  justify-content: space-between;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${props => props.isAdmin ? '#ffffff' : '#4299e1'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.isAdmin ? '#4a5568' : '#ffffff'};
  margin-${props => props.isAdmin ? 'right' : 'left'}: 10px;
`;

const ChatListComponent = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <ChatBox>
          <Title>Messages GoodMental</Title>
          <ChatListStyled>
            {chatData.chats.map((chat, index) => (
              <ChatItem key={index} isAdmin={chat.admin_id}>
                {chat.admin_id && <Avatar isAdmin={chat.admin_id}>{chat.admin_id ? 'A' : 'U'}</Avatar>}
                <MessageBubble isAdmin={chat.admin_id}>
                  <MessageText>{chat.message}</MessageText>
                  <MessageMeta isAdmin={chat.admin_id}>
                    <span>{new Date(chat.date_message).toLocaleString()}</span>
                    <span>{chat.lu ? '✓✓' : '✓'}</span>
                  </MessageMeta>
                </MessageBubble>
                {!chat.admin_id && <Avatar isAdmin={chat.admin_id}>{chat.admin_id ? 'A' : 'U'}</Avatar>}
              </ChatItem>
            ))}
          </ChatListStyled>
        </ChatBox>
      </Container>
    </div>
  );
};

export default ChatListComponent;
