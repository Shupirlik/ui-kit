import React from 'react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import User from './';

const defaultKnobs = () => ({
  view: select('View', ['secondary', 'clear'], 'clear'),
  size: select('Size', ['s', 'm'], 'm'),
  status: select('Status', ['available', 'remote', 'out'], undefined),
  avatar: text(
    'Avatar Url',
    `https://pbs.twimg.com/profile_images/1150453787603156992/DoiKLDMY_400x400.png`,
  ),
});

const fullKnobs = () => ({
  name: text('Name', `Имя Фамилия`),
  info: text('Info', `Сегодня на Почтамской`),
});

storiesOf('User', module)
  .addDecorator(withKnobs)
  .add('Full', () => (
    <User type={'link'} href={`http://google.com`} {...defaultKnobs()} {...fullKnobs()} />
  ))
  .add('Mini', () => <User type={'button'} onlyAvatar={true} {...defaultKnobs()} />);
