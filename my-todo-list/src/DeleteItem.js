import './App.css';

const DeleteItem = ({ job, onChange, onAdd }) => (
    <div>
        <input type="text" value={job} onChange={onChange} />
        <button type="button" onClick={onAdd}>
            Add
        </button>
    </div>
)


export default DeleteItem