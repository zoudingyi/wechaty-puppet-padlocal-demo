import { Contact, log, Wechaty } from 'wechaty';
import onMessage from './listeners/on-message';
import onScan from './listeners/on-scan';
import onLogin from './listeners/on-login';
import config from './config';

function onLogout(user: Contact) {
  log.info('StarterBot', '%s logout', user);
}

const bot = new Wechaty({
  name: config.name,
  /**
   * How to set Wechaty Puppet Provider:
   *
   *  1. Specify a `puppet` option when instantiating Wechaty. (like `{ puppet: 'wechaty-puppet-whatsapp' }`, see below)
   *
   * You can use the following providers locally:
   *  - wechaty-puppet-wechat (web protocol, no token required)
   *  - wechaty-puppet-whatsapp (web protocol, no token required)
   *  - wechaty-puppet-padlocal (pad protocol, token required)
   *  - etc. see: <https://wechaty.js.org/docs/puppet-providers/>
   */
  puppet: 'wechaty-puppet-padlocal',
  puppetOptions: {
    token: config.token
  }
});

bot.on('scan', onScan);
bot.on('login', onLogin);
bot.on('logout', onLogout);
bot.on('message', onMessage);

bot
  .start()
  .then(() => log.info('StarterBot', 'Starter Bot Started.'))
  .catch(e => log.error('StarterBot', e));
