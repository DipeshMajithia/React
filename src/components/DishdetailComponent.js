import React, { Component } from "react";
import moment from "moment";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Media,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    console.log("In toggle modal", this.state.isModalOpen);
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleSubmit(values) {
    console.log("Current state is : " + JSON.stringify(values));
    alert("Current state is : " + JSON.stringify(values));
  }

  render() {
    return (
      <>
        {" "}
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg"> </span>
          Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="ratings">Ratings</Label>
                <Control.select
                  model=".ratings"
                  id="ratings"
                  className="form-control"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author">Your Name</Label>
                <Control.text
                  model=".author"
                  id="author"
                  className="form-control"
                  placeholder="Your Name"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />{" "}
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment">Comment</Label>
                <Control.textarea
                  model=".comment"
                  id="comment"
                  className="form-control"
                  rows="6"
                />{" "}
              </Row>

              <Button type="submit" color="primary">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
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
              <>
                <CommentForm />
              </>
            </div>
          </div>
        </div>
      );
    }
  };

  return <>{renderDish()}</>;
};

export default DishComponent;
