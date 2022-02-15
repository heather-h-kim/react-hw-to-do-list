import './Table.css';

function Table() {
    return(
        <div id="table">
        <h2>Things to do</h2>
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Deadline</th>
                    <th>Status</th>
                    <th>Completed Date</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody id="to-do-list">

            </tbody>


        </table>
    </div>
    )
}

export default Table;