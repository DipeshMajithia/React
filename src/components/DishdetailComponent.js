import React, { Component } from "react";
import moment from "moment";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Media,
} from "reactstrap";

const DishComponent = (props) => {
  const renderComments = () => {
    console.log("IN RENDER COMMENTS");
    if (renderDish == null) {
      return <div></div>;
    } else {
      const comments = props.dish.comments.map((comments) => {
        return (
          <div key={comments.id}>
            <Media tag="li" className="list-unstyled">
              <Media body>
                <span>{comments.comment}</span>
                <br />
                <br />
                <span>
                  -- {comments.author},{" "}
                  {moment(comments.date).format("MMM DD, YYYY")}
                </span>
                <br />
                <br />
              </Media>
            </Media>
          </div>
        );
      });
      return comments;
    }
  };

  const renderDish = () => {
    console.log("IN RENDER DISH");
    if (props.dish == null) {
      return null;
    } else {
      let selectedDish = props.dish;
      return (
        <div className="container">
          <div className="row">
            <div className="m-1 col-12 col-md-5">
              <Card>
                <CardImg
                  width="100%"
                  src={selectedDish.image}
                  alt={selectedDish.name}
                />
                <CardBody>
                  <CardTitle>{selectedDish.name}</CardTitle>
                  <CardText>{selectedDish.description}</CardText>
                </CardBody>
              </Card>
            </div>

            <div className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
              {renderComments()}
            </div>
          </div>
        </div>
      );
    }
  };

  return <>{renderDish()}</>;
};

export default DishComponent;
