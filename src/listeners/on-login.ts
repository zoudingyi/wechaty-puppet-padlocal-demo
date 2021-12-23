import { Contact, log } from 'wechaty';

async function onLogin(user: Contact) {
  log.info('StarterBot', '%s login', user);
}

export default onLogin;
