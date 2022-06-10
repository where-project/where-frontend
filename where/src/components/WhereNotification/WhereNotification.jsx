import React from 'react'
import { Notification } from 'react-rainbow-components';
import { NOTIFICATION_STATES } from '../../constants/NotificationStates';

const WhereNotification = ({ notificationState, title, description }) => {
  if (NOTIFICATION_STATES.INFO === notificationState) {
    return (
      <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <div className="rainbow-p-right_small rainbow-flex rainbow-justify_end">
          <Notification
            title={title}
            description={description}
            style={{
              position: "fixed", right: "50px", bottom: " 140px",
            }}
            icon="info"
          />
        </div>
      </div>

    )
  }
  else if (NOTIFICATION_STATES.SUCCESS === notificationState) {
    return (
      <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <div className="rainbow-p-right_small rainbow-flex rainbow-justify_end">
          <Notification
            title={title}
            description={description}
            style={{
              position: "fixed", right: "50px", bottom: " 140px",
            }}
            icon="success"
          />
        </div>
      </div>
    )
  }
  else if (NOTIFICATION_STATES.WARNING === notificationState) {
    return (
      <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <div className="rainbow-p-right_small rainbow-flex rainbow-justify_end">
          <Notification
            title={title}
            description={description}
            style={{
              position: "fixed", right: "50px", bottom: " 140px",
            }}
            icon="warning"
          />
        </div>
      </div>
    )
  }
  else if (NOTIFICATION_STATES.ERROR === notificationState) {
    return (
      <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <div className="rainbow-p-right_small rainbow-flex rainbow-justify_end">
          <Notification
            title={title}
            description={description}
            style={{
              position: 'fixed', right: "50px", bottom: " 140px",
            }}
            icon="error"
          />
        </div>
      </div>
    )
  }
}

export default WhereNotification