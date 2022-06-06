import React from 'react'
import { Notification } from 'react-rainbow-components';
import { NOTIFICATION_STATES } from '../../constants/NotificationStates';

const WhereNotification = ({ notificationState, title, description }) => {
  if (NOTIFICATION_STATES.INFO === notificationState) {
    return (
      <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <div className="rainbow-p-bottom_x-small">
          <Notification
            title={title}
            description={description}
            icon="info"
          />
        </div>
      </div>

    )
  }
  else if (NOTIFICATION_STATES.SUCCESS === notificationState) {
    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
      <div className="rainbow-p-bottom_x-small">
        <Notification
          title={title}
          description={description}
          icon="success"
        />
      </div>
      {console.log(notificationState)}
    </div>

  }
  else if (NOTIFICATION_STATES.WARNING === notificationState) {
    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
      <div className="rainbow-p-bottom_x-small">      <Notification
        title={title}
        description={description}
        icon="warning"
      />
      </div>
    </div>

  }
  else if (NOTIFICATION_STATES.ERROR === notificationState) {
    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
      <div className="rainbow-p-bottom_x-small">
        <Notification
          title={title}
          description={description}
          icon="error"
        />
      </div>
    </div>

  }
}

export default WhereNotification