import {React,useState} from 'react';
import {Link} from 'react-router-dom';


function CourseStructure(props) {

  const courseName = props.match.params.coursename;
  
  // Create an object of arrays with pair of title and ID in each 
  const course = {
    reactjs:[
      {title:"ReactJs title 1", vid:"edblCnJhvdI"},
      {title:"ReactJs title 2", vid:"MXZvQuG5mQc"},
      {title:"ReactJs title 3", vid:"VPIrZr8YVrQ"}
    ],
    nodejs:[
      {title:"NodeJS title 1", vid:"F-i0d67PVkE"},
      {title:"NodeJS title 2", vid:"R1IDMzKSmMc"},
      {title:"NodeJS title 3", vid:"Ob85LE0CGCc"}
    ]
  }

  // useState Hooks
  const [title,utitle] = useState(course[courseName][0].title)
  const [vid,uid] = useState(course[courseName][0].vid)

  const renderVideo = () => {
    return(
      <div className="video-container">
        <iframe title="video-player" width="853" height="480" src={`//www.youtube.com/embed/${vid}`} frameBorder="0" allowFullScreen></iframe>
      </div>
    )
  }
  return (
    <div className="App">
      {console.log(props)}
      <h1>KVSJ's {courseName} Course</h1>
      {renderVideo()}
      
    </div>
  );
}

export default CourseStructure;