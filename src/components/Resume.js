import React from "react";

function Resume(props) {
  const {year, position, graduation, university, company, details,coursename} = props.resumeData;

    // Function to render each line with conditional formatting
    const renderDetails = () => {
      return details.split("\n").map((line, index) => {
        if (line.includes("<strong>")) {
          return <p className="mi-resume-company" key={index}>{line.split("<strong>").join("")}</p>;
        }  else {
          return <p key={index}>{line}</p>;
        }
      });
    };

  return (
    <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year">{year}</h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation || coursename}</h5>
        <h6 className="mi-resume-company">{company || university}</h6>
         {/* Split details by newlines and map each line to a <p> tag */}
          {renderDetails()}
        
      </div>
    </div>
  );
};

export default Resume;