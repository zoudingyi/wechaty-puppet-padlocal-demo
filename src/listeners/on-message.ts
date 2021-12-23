import { Message } from 'wechaty';
import { logInfo } from '../utils/console-info';

async function onMessage(msg: Message) {
  logInfo(msg);
  if (msg.text() === 'ding') {
    await msg.say('dong');
  }
}

export default onMessage;