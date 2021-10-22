import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MenuCard({ menuState }) {
  const notifySelection = (item) =>
    toast.success("You have selected " + item + ".");
  return (
    <>
      <ToastContainer />
      <Container className="my-5">
        <Row xs={1} md={3} className="g-4">
          {menuState.map((currentEle) => {
            const { id, image, name, category, description, price } =
              currentEle;
            return (
              <Col key={id}>
                <Card>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <h3 className="">{name}</h3>
                      <Badge pill bg="primary">
                        {id}
                      </Badge>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-primary">
                      {category}
                    </Card.Subtitle>
                    <Card.Text className="text-muted">{description}</Card.Text>
                    <div className="d-flex justify-content-between">
                      <div>
                        <span>
                          Price: <span className="text-primary">{price}</span>
                        </span>
                      </div>
                      <Button
                        variant="primary"
                        onClick={() => notifySelection(name)}
                      >
                        Order Now
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default MenuCard;
