export const Task = ({ label, handleDelete, id }) => {
  return (
    <>
      <li className="">
        <span className="label">{label}</span>{' '}
        <div className="actions">
     
          <button
            type="button"
            aria-label="Delete"
            title="Delete"
            className="btn-picto"
            onClick={() => handleDelete(id)}
          >
            <i aria-hidden="true" className="material-icons">
              ↩️
            </i>
          </button>
        </div>
      </li>
    </>
  );
};
