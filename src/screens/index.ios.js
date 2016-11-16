import { Navigation } from 'react-native-navigation';

import Root from './Root';
import ConvoSwiper from './ConvoSwiper';
import MessageThread from './MessageThread';
import Inbox from './Inbox';
import Settings from './Settings';
import NewConvo from './NewConvo';
import ProfileSwiper from './ProfileSwiper';
import Login from './Login';
import ChooseNetwork from './ChooseNetwork';
import MyConvos from './MyConvos';
import CreateNetwork from './CreateNetwork';
import JoinNetwork from './JoinNetwork';
import Invite from './Invite';
import InviteConfirmation from './InviteConfirmation';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
    Navigation.registerComponent('Root', () => Root, store, Provider);
    Navigation.registerComponent('ConvoSwiper', () => ConvoSwiper, store, Provider);
    Navigation.registerComponent('Inbox', () => Inbox, store, Provider);
    Navigation.registerComponent('MessageThread', () => MessageThread, store, Provider);
    Navigation.registerComponent('Settings', () => Settings, store, Provider);
    Navigation.registerComponent('NewConvo', () => NewConvo, store, Provider);
    Navigation.registerComponent('ProfileSwiper', () => ProfileSwiper, store, Provider);
    Navigation.registerComponent('Login', () => Login, store, Provider);
    Navigation.registerComponent('ChooseNetwork', () => ChooseNetwork, store, Provider);
    Navigation.registerComponent('MyConvos', () => MyConvos, store, Provider);
    Navigation.registerComponent('CreateNetwork', () => CreateNetwork, store, Provider);
    Navigation.registerComponent('JoinNetwork', () => JoinNetwork, store, Provider);
    Navigation.registerComponent('Invite', () => Invite, store, Provider);
    Navigation.registerComponent('InviteConfirmation', () => InviteConfirmation, store, Provider);
}
