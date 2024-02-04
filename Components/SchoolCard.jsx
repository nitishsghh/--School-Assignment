const SchoolCard = ({ school }) => {
    return (
        <div className="school-card">
            <h2>{school.name}</h2>
            <p>Address: {school.address}</p>
            <p>City: {school.city}</p>
            <p>State: {school.state}</p>
            <p>Contact: {school.contact}</p>
            <img src={school.image} alt={school.name} />
            <p>Email: {school.email_id}</p>
        </div>
    );
};

export default SchoolCard;
