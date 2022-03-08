import React, { Component } from "react";
import moment from "moment";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Media,
} from "reactstrap";

class DishComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  renderComments(comments) {
    if(DishComponent == null) {
      return(
          <div>

          </div>
      )
  }
  else{
    console.log("Render comment", this.props.DishComponent);
    const comments = this.props.DishComponent.comments.map((comments) => {
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
    let selectedDish = this.props.DishComponent;
    console.log("Selected Dish : ", selectedDish);
    const comments = this.renderComments();
    const DishComponent = (
      <>
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={selectedDish.image} alt={selectedDish.name} />
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
      </>
    );
    return DishComponent;
  }
}

export default DishComponent;
