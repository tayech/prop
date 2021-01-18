import React from "react";
import MemberCard from "../MemberCard/MemberCard";

const Dashboard = ({ team }) => {
  const handelName = (myname) => {
    alert(`Hello I am ${myname}`);
  };

  return (
    <>
      <div className="team">
        {team.map((member, i) => (
          <MemberCard member={member} key={i} handelName={handelName} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;