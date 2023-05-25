import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route='/'>
        <a className='Item'>CrowdCoin</a>
      </Link>

      <Menu.Menu position="right">
        <Link route='/'>
          <a className='Item'>Campaigns</a>
        </Link>

        <Link route='/campaigns/new'>
          <a className='Item'>+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
