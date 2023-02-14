import { employeeData } from '../data';

export const fetchEmployeeDetails = () => {
    return employeeData.map((employee) => {
        const titleView = <b> {employee.first_name} {employee.last_name}</b>;

        return ({
            id: employee.id,
            title: titleView,
            stackItems: true,
            height: 100,
            canMove: false,
            canResize: false,
        })
    });
};