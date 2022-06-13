import React from 'react';
import { AvatarMenu, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import LocalStorageService from '../../services/LocalStorageService';
import jwt from 'jwt-decode' // import dependency
import userImage from "../../images/icons/avatar.png"
const NavbarAvatar = ({ user, ...props }) => {

  let localStorageService = new LocalStorageService();

  return (
    <div className="rainbow-m-vertical_xx-large rainbow-p-vertical_large rainbow-align-content_center">
      <AvatarMenu
        className="rainbow-m-horizontal_large"
        id="avatar-menu"
        src={userImage}
        assistiveText="Tahimi Leon"
        menuAlignment="right"
        menuSize="x-small"
        avatarSize="large"
        title={user.username}
      >
        <MenuItem
          label="Edit Profile"
          icon={<FontAwesomeIcon icon={faPencilAlt} />}
          iconPosition="left"
          onClick={() => {
            console.log('Edit Profile');
          }}
        />
        <MenuItem
          label="Logout"
          icon={<FontAwesomeIcon icon={faPowerOff} />}
          iconPosition="left"
          onClick={() => {
            localStorageService.deleteLocalStorage('accessToken');
            localStorageService.deleteLocalStorage('refreshToken');
            window.location.href = "/login";
          }}
        />
      </AvatarMenu>
    </div>
  )
}

export default NavbarAvatar