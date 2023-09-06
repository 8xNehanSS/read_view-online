import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState({});
  const types = ["hardcover-fiction", "hardcover-nonfiction", "manga", "childrens-middle-grade", "young-adult", "crime-and-punishment"];
  const loc = ["fiction", "nonfiction", "manga", "childrens", "young-adult", "crime"];

  useEffect(() => {
    const fetchData = async () => {
      const newData = {};
      for (let i = 0; i < types.length; i++) {
        try {
          const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${types[i]}.json?api-key=RdZPOiEUuyJPU8dI1bGdVCWMDB9i2iVM`);
          if (!response.ok) {
            throw new Error(`Error fetching data for ${types[i]}`);
          }
          const result = await response.json();
          newData[loc[i]] = result;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      setData(newData);

      // Save the entire data object to local storage
      localStorage.setItem('bookData', JSON.stringify(newData));
    };

    fetchData();
  }, []);

  return (
    <div className="FetchData">
      {/* Render and use the 'data' state as needed */}
    </div>
  );
}
