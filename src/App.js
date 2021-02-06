import React, { Component } from "react";
import News from "./News";
import SampleComponent from "./SampleComponent";
import logo from "./logo.svg";

import "./App.css";

const article1 =
  "OTTAWA -- Ottawa Mayor Jim Watson says Ottawa is ready to reopen restaurants, gyms and non-essential businesses, with the appropriate restrictions in place to limit the spread of COVID-19. More than a month after the COVID-19 lockdown began in Ontario, Premier Doug Ford met with his cabinet on Friday to discuss what measures could be eased. Sources tell CTV News Toronto that Ontario is considering extending the stay-at-home order across the province after being urged to do so by public health officials. Sources say the cabinet was urged by public health officials to extend the stay-at-home order for at least one more week – until Feb. 16 – across the entire province. Health officials pushed for an additional two weeks – until Feb. 22 – in Toronto, Peel Region and York Region.";

const article2 =
  'OTTAWA. People will have to wait to donate blood in eastern Ontario after five people at an Ottawa processing facility tested positive for COVID-19, Canadian Blood Services announced Friday. The Concourse Gate facility in Nepean, where the organization processes blood donations before distributing them to hospitals, was temporarily closed this week "due to a small cluster of COVID-19 infections," according to a news release. It said five staff members and contractors at the facility tested positive. The facility is not accessible to donors or the public, the organization said. Canadian Blood Services is working closely with Ottawa Public Health to notify those who may need testing, and says it has deep-cleaned the site. "We made the decision to close out of an abundance of caution," said Dr. Graham Sher, CEO of Canadian Blood Services, in the news release. "We plan for disruptions like these and benefit from a national network that enables the rest of the country to come to the aid of an impacted region or province."';

const articles = [article1, article2];

class App extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ response: res.express }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {articles.map((article) => (
            <News article={article} />
          ))}
          <SampleComponent color="blue" />
        </header>
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={(e) => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;
