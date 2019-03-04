import React from "react";
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  componentDidMount() {
    document.getElementById("map").src = "https://geosync.cloud/maps/0a480ef3-ec0d-4a5f-adf3-c7e2d8f608ba" + this.props.location.search;
  }
  
  render() {
    return (
      <Layout>
      <iframe id="map" title="map" src="about:blank" allow="geolocation"></iframe>
      </Layout>
    )
  }
}
