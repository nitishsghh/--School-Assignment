import '../styles/globals.css'; // Import global styles
// import Layout from '../components/Layout'; 
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [schools, setSchools] = useState([]); // Example state for schools data

  // Simulated function to fetch schools data
  const fetchSchoolsData = async () => {
    try {
      const response = await fetch('your_api_endpoint_to_fetch_schools');
      const data = await response.json();
      setSchools(data);
    } catch (error) {
      console.error('Error fetching schools:', error);
    }
  };

  // Fetch schools data on component mount
  useEffect(() => {
    fetchSchoolsData();
  }, []);

  return (
    <Layout>
      {/* Pass schools data as props to the main component */}
      <Component {...pageProps} schools={schools} />
    </Layout>
  );
}

export default MyApp;
