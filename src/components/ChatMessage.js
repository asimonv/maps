import moment from "moment";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const MessageContainer = styled.div`
  display: flex;
`;

const Date = styled.span`
  color: gray;
  font-size: x-small;
  text-transform: uppercase;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Username = styled.span`
  font-weight: bold;
`;

const Message = styled.span`
  margin-left: 10px;
`;

const ChatMessage = ({ data: { message, name, date } }) => (
  <Container>
    <Date>{moment(date).fromNow()}</Date>
    <MessageContainer>
      <Username>{name}</Username>
      <Message>{message}</Message>
    </MessageContainer>
  </Container>
);

export default ChatMessage;
