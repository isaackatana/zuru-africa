import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SafariList() {
  const [safaris, setSafaris] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchSafaris = async () => {
      try {
        const response = await fetch('/api/safaris');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setSafaris(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSafaris();
  }, []);

  if (loading) {
    return <p>Loading safaris...</p>;
  }

  if (error) {
    return <p>Error fetching safaris: {error}</p>;
  }

  return (
    <div className="safari-list">
      {safaris.map((safari) => (
        <div key={safari._id} className="wrapper">
          <h1>{safari.name}</h1>
          <Link to={`/safaris/${safari._id}`}>
            <img src={safari.thumbnail} alt={`Thumbnail for ${safari.name}`} />
          </Link>
          <div className="info">
            <div className="wrapper2">
              <h2>{safari.duration}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                suscipit magni officiis nemo possimus blanditiis.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SafariList;
