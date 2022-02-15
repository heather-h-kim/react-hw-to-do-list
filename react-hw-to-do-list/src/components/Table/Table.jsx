import './Table.css';

function Table() {
    return(
        <div id="table-container">
        <h2>Things to do</h2>
        <table>
            <thead>
                <tr>
                    <th id="task">Task</th>
                    <th class="other-head">Deadline</th>
                    <th class="other-head">Status</th>
                    <th class="other-head">Completed Date</th>
                    <th class="other-head"> </th>
                </tr>
            </thead>
            <tbody id="to-do-list">

            </tbody>


        </table>
    </div>
    )
}

export default Table;