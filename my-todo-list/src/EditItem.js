import './App.css';

const EditItem = ({ job, onChange, onEdit }) => (
    <div>
        <input type="text" value={job} onChange={onChange} />
        <button type="button" onClick={() => onEdit(job)}>
            Edit
        </button>
    </div>
)


export default EditItem