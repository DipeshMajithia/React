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

class DishComponent extends Component {
  componentDidMount() {
    console.log("DishDetail Component componentDidMount is invoked");
  }
  componentDidUpdate() {
    console.log("DishDetail Component componentdidupdate is inoked");
  }

  renderComments() {
    if (DishComponent == null) {
      return <div></div>;
    } else {
      const comments = this.props.dish.comments.map((comments) => {
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
  }

  render() {
    console.log("DishDetail Component rendered is inoked");
    if (this.props.dish == null) {
      return <></>;
    } else {
      let selectedDish = this.props.dish;
      const comments = this.renderComments();
      const DishComponent = (
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
              {comments}
            </div>
          </div>
        </div>
      );
      return DishComponent;
    }
  }
}

export default DishComponent;
