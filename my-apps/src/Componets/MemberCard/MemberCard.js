import React from 'react';
import {Card,Button} from 'react-bootstrap'
import PropTypes from 'prop-types'
const MemberCard = ({
    member: { name, bio, photo,profession },
    handelName 
  }) => {
    return (
<Card border="dark" style={{ width: '25rem', margin: "100px 100px 100px 300px" }}>
  <Card.Img variant="top" src={photo} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>{bio}</Card.Text>
    <Card.Text>{profession}</Card.Text>
    <Button variant="primary" onClick={() => handelName(name)}>click</Button>
  </Card.Body>
</Card>
  );
};
MemberCard.propTypes = {
    member: PropTypes.shape({
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      profession:PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    }),
  
    handelName: PropTypes.func.isRequired,
  };
  
  MemberCard.defaultProps = {
    desc: "No Data Description",
  };

export default MemberCard;