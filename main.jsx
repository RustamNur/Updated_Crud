import React from "react";
import "./main.css";
import { users } from "../mock";
import cleaning from "../assets/img/cleaning.png";
import up from "../assets/img/a-z.sort.png";
import down from "../assets/img/z-a.sort.png";
import up_num from "../assets/img/arr-up.png";
import down_num from "../assets/img/arr-down.png";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      lastName: "",
      age: "",
      country: "",
      status: "",
      know: "",
      dataList: users,
      select: "id",
    };
  }

  render() {
    // <----  clean imput or undo deleted  --->
    const onClear = () => {
      this.setState({ name: "", lastName: "" });
    };
    // <----   delete from datalist --->
    const onDelete = (id) => {
      let result = this.state.dataList.filter((value) => value.id !== id);
      this.setState({ dataList: result });
    };
    // <---- (Read) sort by alphabet datalist items --->
    const onSortedByNameAz = () => {
      let result = this.state.dataList.sort((value1, value2) =>
        value1.name.localeCompare(value2.name)
      );
      this.setState({ dataList: result });
    };
    const onSortedByNameZa = () => {
      let result = this.state.dataList.sort((value1, value2) =>
        value2.name.localeCompare(value1.name)
      );
      this.setState({ dataList: result });
    };
    const onSortedByLastNameAz = () => {
      let result = this.state.dataList.sort((value1, value2) =>
        value1.lastName.localeCompare(value2.lastName)
      );
      this.setState({ dataList: result });
    };
    const onSortedByLastNameZa = () => {
      let result = this.state.dataList.sort((value1, value2) =>
        value2.lastName.localeCompare(value1.lastName)
      );
      this.setState({ dataList: result });
    };
    // <---- (Read) search or find by category --->
    const onSearch = (e) => {
      let result = users.filter((value) =>
        `${value[this.state.select]}`
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      this.setState({ dataList: result });
    };

    const onSelect = (e) => {
      this.setState({ select: e.target.value });
    };

    // <---- (Read) sort by id number, up to bottom and bottom to up datalist items --->
    const onSortedById10 = () => {
      let result = this.state.dataList.sort(
        (value1, value2) => value1.id - value2.id
      );
      this.setState({ dataList: result });
    };
    const onSortedById01 = () => {
      let result = this.state.dataList.sort(
        (value1, value2) => value2.id - value1.id
      );
      this.setState({ dataList: result });
    };
    // <---- (Read) sort by age, up to bottom and bottom to up datalist items --->
    const onSortedByAgeYoung = () => {
      let result = this.state.dataList.sort(
        (value1, value2) => value1.age - value2.age
      );
      this.setState({ dataList: result });
    };
    const onSortedByAgeOld = () => {
      let result = this.state.dataList.sort(
        (value1, value2) => value2.age - value1.age
      );
      this.setState({ dataList: result });
    };
    // <---- (Create) data to  datalist items --->
    const onCreate = () => {
      let newUser = {
        id: Date.now(),
        name: this.state.name,
        lastName: this.state.lastName,
        age: this.state.age,
        country: this.state.country,
        status: this.state.status,
        know: this.state.know,
      };
      this.setState({
        dataList: [...this.state.dataList, newUser],
        name: " ",
        lastName: " ",
        age: " ",
        country: " ",
        status: " ",
        know: " ",
      });
    };

    const onChanged = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    return (
      <div className="container">
        <div>
          <form className="wrapper">
            <select className="select_style" name="" id="" onChange={onSelect}>
              <option value="id">ID</option>
              <option value="name">Name</option>
              <option value="lastName">Last Name</option>
              <option value="age">Age</option>
              <option value="country">Country</option>
              <option value="status">Status</option>
            </select>
            <input
              onChange={onSearch}
              className="input_style"
              type="text"
              placeholder="Search by Name"
            />
            <button onClick={onClear} className="button-30">
              <img src={cleaning} width={30} alt="clean" />
              Reset
            </button>
          </form>
        </div>
        <div className="add_container">
          <input
            value={this.state.name}
            name="name"
            onChange={onChanged}
            className="input_style_add"
            type="text"
            placeholder="Name..."
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={onChanged}
            className="input_style_add"
            type="text"
            placeholder="Last Name..."
          />
          <input
            value={this.state.age}
            name="age"
            onChange={onChanged}
            className="input_style_add"
            type="text"
            placeholder="Age..."
          />
          <input
            value={this.state.country}
            name="country"
            onChange={onChanged}
            className="input_style_add"
            type="text"
            placeholder="Country..."
          />
          <input
            value={this.state.status}
            name="status"
            onChange={onChanged}
            className="input_style_add"
            type="text"
            placeholder="Status..."
          />
          <input
            value={this.state.know}
            name="know"
            onChange={onChanged}
            className="input_style_add"
            type="text"
            placeholder="Programming Language..."
          />
          <button onClick={onCreate} className="button-30">
            Create
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>
                Id{" "}
                <div className="btn_center">
                  <button onClick={onSortedById10} className="button-33">
                    <img src={up_num} width={23} alt="arr-up" />
                  </button>
                  <button onClick={onSortedById01} className="button-33">
                    <img src={down_num} width={23} alt="arr-up" />
                  </button>
                </div>{" "}
              </th>
              <th>
                Name{" "}
                <div className="btn_center">
                  <button onClick={onSortedByNameAz} className="button-33">
                    <img src={up} width={23} alt="arr-up" />
                  </button>
                  <button onClick={onSortedByNameZa} className="button-33">
                    <img src={down} width={23} alt="arr-up" />
                  </button>
                </div>
              </th>
              <th>
                Last Name{" "}
                <div className="btn_center">
                  <button onClick={onSortedByLastNameAz} className="button-33">
                    <img src={up} width={23} alt="arr-up" />
                  </button>
                  <button onClick={onSortedByLastNameZa} className="button-33">
                    <img src={down} width={23} alt="arr-up" />
                  </button>
                </div>
              </th>
              <th>
                Age
                <div className="btn_center">
                  <button onClick={onSortedByAgeYoung} className="button-33">
                    <img src={up_num} width={23} alt="arr-up" />
                  </button>
                  <button onClick={onSortedByAgeOld} className="button-33">
                    <img src={down_num} width={23} alt="arr-up" />
                  </button>
                </div>{" "}
              </th>
              <th>Country</th>
              <th>Status</th>
              <th>Programming Language</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataList.length ? (
              this.state.dataList.map((value) => {
                return (
                  <tr key={value.id} className="item">
                    <td>{value.id}</td>
                    <td>{value.name} </td>
                    <td>{value.lastName}</td>
                    <td>{value.age}</td>
                    <td>{value.country}</td>
                    <td>{value.status}</td>
                    <td>{value.know}</td>
                    <td>
                      <button className="button-30">Edit</button>
                      <button
                        onClick={() => onDelete(value.id)}
                        className="button-30"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <th colSpan={8}>
                  <h2>...No Data...</h2>
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
