import React, { Component } from "react";
import { saveProduct } from "../fakeServer/productChaillo";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {
      _id: "",
      title: "",
      content: "",
    },
    errors: {},
  };

  componentDidMount() {
    const itemId = this.props.match.params._id;
    if (itemId) {
      const value = this.getValueProduct(itemId);
      this.setState({ data: this.mapToViewModel(value) });
    }
  }

  schema = {
    title: Joi.string().required().label("Title"),
    content: Joi.string().required().label("Content"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  getValueProduct = (id) => {
    const { products } = this.props;
    for (let key in products) {
      if (products[key]._id === id) {
        return products[key];
      }
    }
    return "error in form";
  };

  mapToViewModel(item) {
    return {
      _id: item._id,
      title: item.title,
      content: item.content,
    };
  }

  cancelModal = () => {
    this.props.history.replace("/admin/all-products");
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    console.log(this.state.errors, this.validate())
    if (!errors.title && !errors.content ) {
      saveProduct(this.state.data);
      this.props.history.push("/admin/all-products");
    }

  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="modal-form">
        <div className="modal-body">
          <h1>Thêm Sản Phẩm</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title :</label>
              <input
                id="title"
                name="title"
                value={this.state.data.title}
                onChange={this.handleChange}
                type="text"
                className="form-control"
              />
              {errors.title && (
                <div className="alert alert-danger">{errors.title}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="content">Content :</label>
              <input
                id="content"
                name="content"
                value={this.state.data.content}
                onChange={this.handleChange}
                type="text"
                className="form-control"
              />
              {errors.content && (
                <div className="alert alert-danger">{errors.content}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="image">image :</label>
              <input id="image" type="file" multiple />
            </div>
            <div className="modal-button">
              <button onClick={this.cancelModal} className="modal-button-cancel">
                Hủy
              </button>
              <button onClick={this.handleSubmit} className="modal-button-save">
                Lưu
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
