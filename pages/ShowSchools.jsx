import { useEffect, useState } from 'react';

const ShowSchools = () => {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        fetch('/api/getSchools')
            .then(response => response.json())
            .then(data => setSchools(data))
            .catch(error => console.error('Error fetching schools:', error));
    }, []);

    return (
        <div>
            <h1>Schools</h1>
            <div>
                {schools.map(school => (
                    <div key={school.id}>
                        <h3>{school.name}</h3>
                        <p>{school.address}, {school.city}</p>
                        <img src={`/schoolImages/${school.image}`} alt={school.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowSchools;
