import React, { useState } from 'react';
import moment from 'moment'
import Timeline from 'react-calendar-timeline';

import { fetchShiftsDetails } from "../services/fetchShiftDetails";
import { fetchEmployeeDetails } from '../services/fetchEmployeeDetails';

import 'react-calendar-timeline/lib/Timeline.css';

const ScheduleView = () => {
    const [employeeDetails] = useState(fetchEmployeeDetails());
    const [shiftDetails] = useState(fetchShiftsDetails());

    return (
        <Timeline
            groups={employeeDetails}
            items={shiftDetails}
            defaultTimeStart={moment(`2018.06.18 0:00:00`)}
            defaultTimeEnd={moment(`2018.06.22 0:00:00`)}
            minZoom={1000 * 60 * 60 * 24}
            lineHeight={100}
            timeSteps={{
                hour: 1,
                day: 1,
                week: 1,
            }}
            itemHeightRatio={1}
            sidebarWidth={200}
            sidebarContent="Mentors"
        />
    )
};

export default ScheduleView;