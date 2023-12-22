/* eslint-disable react/prop-types */

const TableRow = ({ idx, sessionName, sessionStatus, sessionLimit }) => {

    return (
        <tr>
            <th>{idx + 1}</th>
            <td>{sessionName}</td>
            <td>{sessionStatus
                ?
                <span className="text-green-600 font-bold">Completed</span>
                :
                <span className="text-red-600 font-bold">InCompleted</span>}</td>
            <td>{sessionLimit}</td>
        </tr>
    );
};

export default TableRow;