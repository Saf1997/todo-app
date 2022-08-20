import './App.css';

const DeleteItem = ({ job, onChange, onDelete }) => (
    <div>
        <input type="text" value={job} onChange={onChange} />
        <button type="button" onClick={() => onDelete(job)}>
            Delete
        </button>
    </div>
)


export default DeleteItem