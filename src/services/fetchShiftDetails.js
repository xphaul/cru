import { shiftsData, roleData } from '../data';
import moment from 'moment';

export const fetchShiftsDetails = () => {
    return shiftsData.map((schedule, index) => {
        const titleView = (
            <h2 style={{ margin: 0 }}>
             <span><b>{moment(schedule.start_time).format('HH:mm')} - {moment(schedule.end_time).format('HH:mm')}</b></span>
            </h2>
        );

        return ({
            id: index,
            group: schedule.employee_id,
            title: titleView,
            start_time: moment(schedule.start_time),
            end_time: moment(schedule.end_time),
            itemProps: {
                style: {
                    background: roleData.filter((role) => role.id === schedule.role_id).pop()[`background_colour`],
                    color: roleData.filter((role) => role.id === schedule.role_id).pop()[`text_colour`]
                }
            }
        })
    });
};