import React from 'react';

const NewsItems = (props) => {
  if (props.view === "column") {
    
    return (

      <div className="card news-card h-100 d-flex flex-column">
        <img src={props.imageUrl} className="card-img-top h-100 w-100" alt="news" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="badge bg-secondary" >{props.source}</p>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small>
              By {props.author} on {new Date(props.date).toGMTString()}
            </small>
          </p>
          <a href={props.url} className='readbutton'>Read More</a>
        </div>
      </div>
    );
  }

  
  return (
    
    <tr>
      <th scope="row">{props.indexx + 1}</th>
      <td>
        <img src={props.imageUrl} height="50px" width="50px" alt="news" />
      </td>
      <td>{props.title}</td>
      <td>{props.source}</td>
      <td>{props.description
      }...</td>
      <td>
        <a href={props.url} target="_blank"  rel="noreferrer">Read More</a>
      </td>
    </tr>

  );


};


export default NewsItems;
