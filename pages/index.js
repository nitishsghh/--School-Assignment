import connection from '../db';

export default function Home({ schools }) {
  return (
    <div>
      <h1>List of Schools</h1>
      <ul>
        {schools.map((school) => (
          <li key={school.id}>
            {school.name} - {school.address}, {school.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  let schools = [];

  try {
    const query = 'SELECT * FROM schools';
    schools = await new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  } catch (error) {
    console.error('Error fetching schools:', error);
  }

  return {
    props: {
      schools
    }
  };
}
