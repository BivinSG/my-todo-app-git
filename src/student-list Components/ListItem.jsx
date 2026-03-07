function ListItem({ id, name, onDelete }) {
  return (
    <div>
      {name}
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default ListItem;