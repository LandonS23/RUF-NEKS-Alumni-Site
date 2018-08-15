import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import ReactTable from "react-table";
import 'react-table/react-table.css'

import './Members.css';

class Members extends Component {
  constructor(props) {
    super(props);
    this.state = { members: [] };
  }

  async componentDidMount() {
    if(firebase.apps.length === 0) {
      let config = {
        apiKey: "AIzaSyDcKAvszJ5f8WfdjLSOvK7vYcL3ak08TOE",
        authDomain: "rufneks-alumni-association.firebaseapp.com",
        databaseURL: "https://rufneks-alumni-association.firebaseio.com",
        projectId: "rufneks-alumni-association",
        storageBucket: "rufneks-alumni-association.appspot.com",
        messagingSenderId: "311894999395"
      };

      firebase.initializeApp(config);
    }

    // Initialize Cloud Firestore through Firebase
    let db = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    db.settings(settings);

    /* Create reference to members in Firebase Database */
    let members = await db.collection("members").get();
    this.setState({members: members.docs})

    // db.collection("members").onSnapshot(function(doc) {
    //   members = db.collection("members").get();
    //   this.setState({members: members.docs})
    // }.bind(this));
  }

  render() {
    return (
      <div className="members-view">
          <ReactTable
            data={this.state.members}
            loading={this.state.members.length === 0}
            columns={[
              {
                Header: 'Alumni Association Members',
                columns: [
                  {
                    Header: "First Name",
                    id: "firstName",
                    accessor: d => d.data()["First Name"]
                  },
                  {
                    Header: "Last Name",
                    id: "lastName",
                    accessor: d => d.data()["Last Name"]
                  },
                  {
                    Header: "Pledge Year",
                    id: "year",
                    accessor: d => d.data()["Pledge Class"]
                  }
                ]
              }
            ]}

            defaultSorted={[
              {
                id: "year",
                desc: false
              }
            ]}

            defaultPageSize={25}
            className="-striped -highlight"
          />
      </div>
    );
  }
}

export default Members;
