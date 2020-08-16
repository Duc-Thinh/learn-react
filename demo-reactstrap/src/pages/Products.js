import React , { Component } from 'react'

import { Container, Row, Col, Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button  } from 'reactstrap'

class Products extends Component {
    constructor(props){
        super(props)

        this.state = {
            Products: [{
                "id": "ef020591-98c5-4e48-80b7-4f577ae42aae",
                "name": "Veal - Chops, Split, Frenched",
                "description": "non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing",
                "imageURL": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "90e7e33c-1bad-4db8-91aa-5a1c21e09028",
                "name": "Wine - Cave Springs Dry Riesling",
                "description": "posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc",
                "imageURL": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "d889a95f-88c0-4e4c-a56a-3de73eeabdc8",
                "name": "Dried Cherries",
                "description": "eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus",
                "imageURL": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "f53013d7-36be-4549-a4cf-933f0b889ae6",
                "name": "Tomatoes - Roma",
                "description": "at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero",
                "imageURL": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "91cb9279-93f9-467f-9db7-3f914df13219",
                "name": "Juice - Lemon",
                "description": "integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "a3ec9e42-1e17-481d-9390-2ee2e73a796f",
                "name": "Tequila Rose Cream Liquor",
                "description": "suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris",
                "imageURL": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "b022356e-79c5-4927-876c-5769bc1a61b5",
                "name": "Pork - Belly Fresh",
                "description": "varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus",
                "imageURL": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "502f6f6d-c3f8-4d6b-abcc-ce9ddd198893",
                "name": "Wine - Shiraz South Eastern",
                "description": "in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "e0a8ab0b-9de4-475e-b31e-76359109a086",
                "name": "Cheese - Victor Et Berthold",
                "description": "ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar",
                "imageURL": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "05237e26-355b-4c68-b867-033031e4709e",
                "name": "Chicken - Soup Base",
                "description": "est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl",
                "imageURL": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "b13562da-c2da-466b-919e-daa7ac8c589f",
                "name": "Wasabi Paste",
                "description": "libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo",
                "imageURL": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "0dbc054b-495d-4614-a30d-b153ade7af9d",
                "name": "Breakfast Quesadillas",
                "description": "non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac",
                "imageURL": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "437c76da-165d-4dda-a876-ba438953d89e",
                "name": "Cornflakes",
                "description": "cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "6f2afa5d-4511-4fd9-8d1a-e0e7df14f807",
                "name": "Sorrel - Fresh",
                "description": "convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis",
                "imageURL": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "0aeaf504-726e-4d13-9245-72f758b1407a",
                "name": "Vodka - Moskovskaya",
                "description": "sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "d4d33ef7-4add-4983-a8b1-ba514992fbf8",
                "name": "Chestnuts - Whole,canned",
                "description": "ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra",
                "imageURL": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "f2d3154d-41c5-4fe4-b956-c29f424f43c3",
                "name": "Cheese - Blue",
                "description": "quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer",
                "imageURL": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "dc43c836-3d33-4d6d-af31-da75220605f6",
                "name": "Soup - Campbells, Chix Gumbo",
                "description": "nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna",
                "imageURL": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "28f47e1e-d48b-4719-a257-27d6c39aec8a",
                "name": "Glove - Cutting",
                "description": "felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio",
                "imageURL": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "b4891e36-8c17-4d16-b0fc-16cfebdd5ab7",
                "name": "Pasta - Rotini, Colour, Dry",
                "description": "tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }]
        }
    }
    render() {
        const { Products } =  this.state
        return (
            <Container>
                <h2>Product</h2>
                <Row>
                    { Products.map(product => (
                        <Col sm="4">
                            <Card>
                                <CardImg 
                                    top width="100%" src={product.imageURL} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>{product.name}</CardTitle>
                                    <CardText>{product.description}</CardText>
                                    <Button>Add to cart</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    )) }
                </Row>
            </Container>
        )
    }
}

export default Products