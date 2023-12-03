import React, { useState } from 'react';
import './table.css'
import {FiExternalLink} from 'react-icons/fi'

function TableData({ data }) {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
    
    
    const displayedData = showMore ? data : data.slice(0, 5);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Treatment</th>
                        <th>Thumbnail</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Docter</th>
                        <th>Studio</th>
                        <th>Payment</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.treatment}</td>
                            <td>
                                <img src={item.thumbnail} alt={`Image ${index}`} width="50" height="50" />
                            </td>
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                            <td>{item.docter}</td>
                            <td>{item.studio}</td>
                            <td>
                                <button>{item.payment}</button>
                            </td>
                            <td><a href='/prpinjectiondr'><FiExternalLink/></a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='table-btn'>
                {data.length > 5 && (
                    <button onClick={toggleShowMore}>
                        {showMore ? 'View Less' : 'View More'}
                    </button>
                )}
            </div>
        </div>
    );
}

export default TableData;
