import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns" />
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Email :sana.chowdhury86@gmail.com</h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
