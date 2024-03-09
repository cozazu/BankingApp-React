const Turno = ({ id, date, time, description, status }) => {
    return (
        <div className="turno-card">
            <h4>{id}</h4>
            <h4>Date: {date}</h4>
            <h4>Time: {time}</h4>
            <h4>Descrih4tion: {description}</h4>
            <h4>Status: {status}</h4>
        </div>
    );
}

export default Turno;
