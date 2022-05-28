import React, { Fragment } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

const Predict = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [date, setDate] = React.useState([]);
  const [sales, setSales] = React.useState([]);
  const [uploaded, setUploaded] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);
    try {
      setLoading(true);
      console.log('Uploading.....');
      const response = await axios({
        method: 'post',
        url: 'https://pharma-sales-pred.herokuapp.com/predict',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setLoading(false);
      setDate(response['data']['Date']);
      setSales(response['data']['Sales']);
      setUploaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <Fragment style={{ display: 'flex' }}>
      <div style={{ width: '55%', margin: 'auto' }}>
        <h1 style={{ margin: '2rem' }}>Forecast future Sales</h1>
        <h3>
          Sample CSV
          <a
            href="https://drive.google.com/file/d/1Xl3xM7rmh520_KTpyYTg3mxOjKX9p01e/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: '10px' }}
          >
            download/view
          </a>
        </h3>
        {/* ['StateHoliday', 'Store', 'DayOfWeek', 'Open', 'Promo',
                'SchoolHoliday', 'Year', 'Month', 'Day', 'WeekOfYear'] */}
        <p>The minimum types of features required in the uploaded data are:</p>
        <ul>
          <li>
            <b>Year</b> - Th year of the data
          </li>
          <li>
            <b>StateHoliday</b> - If the store is closed on a state holiday or
            not (0 or 1)
          </li>
          <li>
            <b>SchoolHoliday</b> - If the store is closed on a school holiday or
            not (0 or 1)
          </li>
          <li>
            <b>Store</b> - The Store number of the store (0-3)
          </li>
          <li>
            <b>Promo</b> - Promo used (0 or 1)
          </li>
          <li>
            <b>DayOfWeek</b> - the Date of the week (0 - 6)
          </li>
        </ul>

        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileSelect} />
          <input type="submit" value="Upload File" />
        </form>
        {loading && <p>Uploading...</p>}
        {loading && <Spinner animation="border" />}
        {/* if  uploaded, show Date and respective sales in table format*/}
        {uploaded && (
          <Fragment>
            <h3 style={{ margin: '1rem' }}>
              Predicted Sales for the coming weeks
            </h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Sales</th>
                </tr>
              </thead>
              <tbody>
                {date.map((date, index) => (
                  <tr key={index}>
                    <td>{date}</td>
                    <td>{sales[index]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Predict;
