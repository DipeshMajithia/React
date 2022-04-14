import React, { Component } from "react";
import moment from "moment";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Media,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const DishComponent = (props) => {
  const renderComments = () => {
    console.log("IN RENDER COMMENTS");
    if (renderDish == null) {
      return <div></div>;
    } else {
      const comments = props.comments.map((comments) => {
        return (
          <div key={comments.id} className="container">
            <div className="row">
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
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
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
              <div className="row">{renderComments()}</div>
            </div>
          </div>
        </div>
      );
    }
  };

  return <>{renderDish()}</>;
};

export default DishComponent;
