import './App.css';

const AddItem = ({ job, onChange, onAdd }) => (
    <div>
        <input type="text" value={job} onChange={onChange} />
        <button type="button" onClick={onAdd}>
            Add
        </button>
    </div>
)


export default AddItem