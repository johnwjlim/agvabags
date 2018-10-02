import React from 'react'
import { Link, push, navigate } from 'gatsby'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1em 1.5em;
`;

const Title = styled.h1`
    font-family: "Montserrat Medium";
    font-size: 1.6rem;
    margin-bottom: 1.2em;
`;

const Content = styled.div`
    padding: 1em;
`;

const MicroTextWrapper = styled.div`
    display: flex;
`;

const MicroText = styled.h6`
    font-family: "Montserrat", "sans serif";
    font-size: 12px;
    color: #767676;
    margin-bottom: 1.2em;
    width: 50%;
`;

const List = styled.ul`
    margin: 0;
    overflow: scroll;
    max-height: 430px;
    margin-bottom: 0.5em;
`;

const Listing = styled.li`
    list-style-type: none;
    border-top: solid 0.5px #dddddd;
    padding-top: 1.5em;
    margin-bottom: 3em;
    display: flex;
`;

const ListingSection = styled.div`
    width: 50%;
`;

const ProductGroup = styled.div`
    display: flex;
`;

const ImageWrapper = styled.div`
    width: 25%;
`;

const ProductTitle = styled.a`
    margin-left: 2.5em;
    cursor: pointer;
`;

const Button = styled.button`
    font-family: "Montserrat Medium", "sans serif";
    font-size: 0.8rem;
    color: #767676;
    background-color: white;
    cursor: pointer; 
    margin: 0;  
    border-color: white;
    border-radius: 5px;

    &:hover {
        background-color: #5e5e5e;
        color: white;
        transition: 0.2s;
    }
`;

const Form = styled.div`
    border: 0.5px solid #767676;
    padding: 3em 2em;
`;

const FormSection = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        display: block;
    }
`;

const InputGroup = styled.div`
    margin: 0 2em;
`;

const Label = styled.label`
    display: block;
    font-family: "Montserrat", "sans serif";
    font-size: 12px;
    color: #484848;
    // margin-bottom: 1.2em;
    width: 50%;
`;

const NameInput = styled.input.attrs({
    type: "text"
})`
    display: block;
    font-family: "Open Sans", "sans serif";
    color: #484848;
    font-size: 14px;
    margin: 0.35em 0;
    padding: 0.5em;
    border: 0.5px solid #dddddd;
    border-radius: 4px;
    width: 230px;
    margin-bottom: 1.2em;
`;

const EmailInput = styled.input.attrs({
    type: "email"
})`
    display: block;
    font-family: "Open Sans", "sans serif";
    color: #484848;
    font-size: 14px;
    margin: 0.35em 0;
    padding: 0.5em;
    border: 0.5px solid #dddddd;
    border-radius: 4px;
    width: 230px;
    margin-bottom: 1.2em;
`;

const CompanyInput = styled.input.attrs({
    type: "text"
})`
    display: block;
    font-family: "Open Sans", "sans serif";
    color: #484848;
    font-size: 14px;
    margin: 0.35em 0;
    padding: 0.5em;
    border: 0.5px solid #dddddd;
    border-radius: 4px;
    width: 230px;
    margin-bottom: 1.2em;
`;

const TextArea = styled.textarea.attrs({
})`
    font-family: "Open Sans", "sans serif";
    color: #484848;
    font-size: 14px;
    margin: 0.35em 0;
    padding: 0.5em;
    border: 0.5px solid #dddddd;
    border-radius: 4px;
    width: 300px;
    height: 219px;
    margin-bottom: 1.2em;

    @media (max-width: 475px) {
        width: 230px;
    }

`;

const SubmitButton = styled.button.attrs({
})`
    font-family: "Montserrat", "sans serif";
    font-size: 13px;    
    color: white;
    background-color: #009688;
    cursor: pointer; 
    margin: 0;  
    border-color: white;
    border-radius: 5px;
    padding: 0.5em 2em;

    &:hover {
        background-color: white;
        color: #009688;
        transition: 0.2s;
        border-color: #009688;
    }
`;


const mapStateToProps = state => {
    return {cart: state.cart}
}

const mapDispatchToProps = dispatch => {
    return {
        removeCart: (index) => dispatch({ type: `REMOVE_CART`, payload: index }),
        resetCart: () => dispatch({ type: `RESET_CART` })
    }
}

function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            company: "",
            message: ""
        };
    }

    handleNavigate(link) {
        console.log("link clicked!");
        navigate(link);
    }

    handleRemove(index) {
        this.props.removeCart(index);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "enquiry", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
      };

    render() {
        const edges = this.props.cart;
        const { name, email, company, message } = this.state;
        return (
            <Layout>
                <Container>
                    <Title>Your Enquiry</Title>
                    {
                        (edges.length > 0) ?
                        <Content>
                            <MicroTextWrapper>
                                <MicroText>Product</MicroText>
                                <MicroText>SKU</MicroText>
                            </MicroTextWrapper>
                            <List>
                                {
                                    edges.map((node) => (
                                        <Listing>
                                            <ListingSection>
                                                <ProductGroup>
                                                    <ImageWrapper>
                                                        <Img fluid={node.thumbnail.fluid} alt={node.thumbnail.title}/>
                                                    </ImageWrapper>
                                                    <ProductTitle onClick={() => this.handleNavigate(`/products/${node.slug}`) }>{node.title}</ProductTitle>
                                                </ProductGroup>
                                            </ListingSection>
                                            <ListingSection>
                                                <ProductGroup style={{justifyContent: "space-between"}}>
                                                    {node.sku}
                                                    <Button onClick={() => this.handleRemove(edges.indexOf(node))}>X</Button>
                                                </ProductGroup>  
                                            </ListingSection>
                                        </Listing>
                                    ))
                                }
                            </List> 
                            {/* <Form>
                                <form name="enquiry" method="POST" data-netlify="true" onSubmit={this.handleSubmit} >
                                    <input type="hidden" name="form-name" value="enquiry"/>
                                    <FormSection>
                                        <InputGroup>
                                            <Label>Your Name</Label>
                                            <NameInput value={name} onChange={(e) => this.handleChange(e)}/>
                                            <Label>Email</Label>
                                            <EmailInput value={email} onChange={(e) => this.handleChange(e)}/>
                                            <Label>Company</Label>
                                            <CompanyInput value={company} onChange={(e) => this.handleChange(e)}/>
                                        </InputGroup>
                                        <InputGroup>
                                            <Label>Comments</Label>
                                            <TextArea value={message} onInput={e => this.setState({message: e.target.value})}/>
                                        </InputGroup>
                                    </FormSection>
                                    <FormSection>
                                        <SubmitButton>Submit</SubmitButton>
                                    </FormSection>
                                </form>
                            </Form> */}
                        </Content> :
                        <p>cart is empty</p>
                    }
                    <Form>
                        <form name="enquiry" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
                            <input type="hidden" name="form-name" value="enquiry"/>
                            <p hidden>
                                <label>
                                    Don’t fill this out:{" "}
                                    <input name="bot-field" onChange={this.handleChange} />
                                </label>
                            </p>
                            {/* <form onSubmit={this.handleSubmit}> */}
                            <FormSection>
                                <InputGroup>
                                    {/* <input name="bot-field" type="hidden"/> */}
                                    <Label>Your Name</Label>
                                    <NameInput value={name} name="name" onChange={this.handleChange}/>
                                    <Label>Email</Label>
                                    <EmailInput value={email} name="email" onChange={this.handleChange}/>
                                    <Label>Company</Label>
                                    <CompanyInput value={company} name="company" onChange={this.handleChange}/>
                                </InputGroup>
                                <InputGroup>
                                    <Label>Comments</Label>
                                    <TextArea value={message} name="message" onChange={this.handleChange}/>
                                </InputGroup>
                            </FormSection>
                            <FormSection>
                                <SubmitButton type="submit">Submit</SubmitButton>
                            </FormSection>
                        </form>
                    </Form>
                </Container>
            </Layout>
        )
    }
}

const connectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default connectedCart;