import { v4 } from 'uuid';
import { writeDB } from '../dbController.js';

const setMsgs = data => writeDB('messages', data);

/* 
parent: parent 객체. 거의 사용X
args: Query에 필요한 필드에 제공되는 인수(parameter)
context: 로그인한 사용자. DB Access 등의 중요한 정보들
*/

const messageResolver = {
  Query: {
    messages: (parent, args, context) => {
      // console.log({ parent, args, context })
      return context.messages;
    },
    message: (parent, { id = '' }, context) => {
      return context.messages.find(msg => msg.id === id);
    },
  },
  Mutation: {
    createMessage: (parent, { text, userId }, context) => {
      if (!userId) throw Error('사용자가 없습니다.');
      const newMsg = {
        id: v4(),
        text,
        userId,
        timestamp: Date.now(),
      };
      context.messages.unshift(newMsg);
      setMsgs(context.messages);
      return newMsg;
    },
    updateMessage: (parent, { id, text, userId }, context) => {
      const targetIndex = context.messages.findIndex(msg => msg.id === id);
      if (targetIndex < 0) throw Error('메시지가 없습니다.');
      if (context.messages[targetIndex].userId !== userId)
        throw Error('사용자가 다릅니다.');

      const newMsg = { ...context.messages[targetIndex], text };
      context.messages.splice(targetIndex, 1, newMsg);
      setMsgs(context.messages);
      return newMsg;
    },
    deleteMessage: (parent, { id, userId }, context) => {
      const targetIndex = context.messages.findIndex(msg => msg.id === id);
      if (targetIndex < 0) throw '메시지가 없습니다.';
      if (context.messages[targetIndex].userId !== userId)
        throw '사용자가 다릅니다.';
      context.messages.splice(targetIndex, 1);
      setMsgs(context.messages);
      return id;
    },
  },
};

export default messageResolver;
