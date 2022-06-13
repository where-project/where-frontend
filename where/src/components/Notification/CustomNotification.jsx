import React from 'react';
import { Notification } from 'react-rainbow-components';

const CustomNotification = ({ title, icon, description, ...props }) => {
    return (
        <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large" style={{ zIndex: 1000 }}>
            <div className="rainbow-p-right_small rainbow-flex rainbow-flex_column rainbow-align_end">
                <div className="rainbow-p-bottom_x-small">
                    <Notification
                        title={title}
                        description={description}
                        icon={icon}
                    />
                </div>
            </div>
        </div>
    )
}

export default CustomNotification