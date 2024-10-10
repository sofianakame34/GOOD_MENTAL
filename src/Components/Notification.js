import React from 'react';
import styled, { keyframes } from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

const notificationsData = [
  { id: 1, type: 'success', message: 'Votre rendez-vous avec le patient a été confirmé.', time: 'Il y a 5 minutes' },
  { id: 2, type: 'error', message: 'Échec de la mise à jour du dossier du patient. Veuillez réessayer.', time: 'Il y a 10 minutes' },
  { id: 3, type: 'info', message: 'Un nouveau message de votre patient est arrivé.', time: 'Il y a 15 minutes' },
  { id: 4, type: 'success', message: 'Vous avez reçu un retour positif sur votre dernière consultation.', time: 'Il y a 20 minutes' },
  { id: 5, type: 'info', message: 'Rappel : Consultation avec le patient prévu demain à 10h00.', time: 'Il y a 30 minutes' },
];

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const NotificationContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 300px;
  z-index: 1000;
`;

const NotificationCard = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.type === 'success' ? '#48bb78' :
    props.type === 'error' ? '#f56565' : '#4299e1'};
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease forwards;
  position: relative;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-size: 20px;
`;

const MessageWrapper = styled.div`
  flex-grow: 1;
`;

const MessageText = styled.p`
  font-size: 14px;
  margin: 0;
`;

const TimeText = styled.p`
  font-size: 12px;
  margin: 0;
  opacity: 0.7;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
`;

const getIcon = (type) => {
  switch (type) {
    case 'success':
      return <CheckCircleIcon />;
    case 'error':
      return <ErrorIcon />;
    case 'info':
      return <InfoIcon />;
    default:
      return <InfoIcon />;
  }
};

const NotificationsComponent = () => {
  const handleClose = (id) => {
    // Ici, vous pouvez implémenter la fonctionnalité de fermeture, pour l'instant, c'est juste un espace réservé
    console.log('Notification fermée:', id);
  };

  return (
    <NotificationContainer>
      {notificationsData.map(notification => (
        <NotificationCard key={notification.id} type={notification.type}>
          <IconWrapper>
            {getIcon(notification.type)}
          </IconWrapper>
          <MessageWrapper>
            <MessageText>{notification.message}</MessageText>
            <TimeText>{notification.time}</TimeText>
          </MessageWrapper>
          <CloseButton onClick={() => handleClose(notification.id)}>
            <CloseIcon />
          </CloseButton>
        </NotificationCard>
      ))}
    </NotificationContainer>
  );
};

export default NotificationsComponent;
