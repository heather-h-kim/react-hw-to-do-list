import './InputFields.css';

function InputFields() {
    return (
        <div>
            <h2>What do you need to do?</h2>
            <div id="input-fields">
            <input class="task-input" type="text" id="task" placeholder="What task?"></input>
            <input type="text" id="deadline" placeholder="By when?"></input>
            <button id="submit">Submit</button>
            </div>
        </div>
    )
}

export default InputFields;