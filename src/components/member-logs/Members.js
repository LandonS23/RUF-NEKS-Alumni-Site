import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import ReactTable from "react-table";
import 'react-table/react-table.css'

import './Members.css';

let link, db, pageStart, size = null;

class Members extends Component {
  state = {
		loading: true,
		page: 0,
		pageSize: 10,
    total: 1973,
		currentPageData: [],
		pages: 0,
    members: []
  };

  onPageChange = (pageIndex) => {
		const members = this.state.members;
		const total = this.state.total;

		if((!members[pageIndex * this.state.pageSize] || !members[(pageIndex * this.state.pageSize) + this.state.pageSize - 1]) && members.length !== total) {
			const batchSize = this.state.pageSize > 30 ? this.state.pageSize : 30;

			if(pageIndex === this.state.page - 1) {
        link = db.collection("members").orderBy("index").startAt((pageIndex - 2) * this.state.pageSize).limit(batchSize);
        pageStart = (pageIndex - 2) * this.state.pageSize;
        size = this.state.pageSize;

				this.setState({
					loading: true,
					page: pageIndex
				});

				this.setState({previous: true});
			} else {
        console.log(pageIndex * this.state.pageSize, batchSize);
        link = db.collection("members").orderBy("index").startAt(pageIndex * this.state.pageSize).limit(batchSize);
        pageStart = pageIndex * this.state.pageSize
        size = this.state.pageSize;

				this.setState({
					loading: true,
					page: pageIndex
				});
			}
		} else {
			const currentPageData = members.slice(pageIndex * this.state.pageSize, (pageIndex * this.state.pageSize) + this.state.pageSize);

			this.setState({
				page: pageIndex,
				currentPageData
			});
		}
	}

	onPageSizeChange = (pageSize, pageIndex) => {
		let pages = (this.state.total / pageSize) > 1 ? (this.state.total / pageSize) : 1;
		pages = Math.ceil(pages);

		if(pageIndex > pages) {
			pageIndex = pages;
		}

		let needData = false;

		for(let i = 0; i < pageSize; i++) {
			if(!this.state.members[(pageIndex * pageSize) + i]) {
				needData = true;
				break;
			}
		}


		if(needData) {
			const batchSize = pageSize > 30 ? pageSize : 30;
      link = db.collection("members").orderBy("index").startAt(pageIndex * pageSize).limit(batchSize);
      pageStart = pageIndex * pageSize;
      size = pageSize;

			this.setState({
				loading: true,
				pages,
				page: pageIndex,
				pageSize
			});
		} else {
			const currentPageData = this.state.members.slice(pageIndex * pageSize, (pageIndex * pageSize) + pageSize);

			this.setState({
				pageSize,
				pages,
				page: pageIndex,
				currentPageData
			});
		}
	}

	getMembers = async () => {
		try {
			if(this.state.members.length === 0) {
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
        db = firebase.firestore();
        const settings = {timestampsInSnapshots: true};
        db.settings(settings);

        /* Create reference to members in Firebase Database */
        let members = await db.collection("members").orderBy("index").limit(this.state.pageSize).get();
        this.setState({members: members.docs})


				let pages = (this.state.total / this.state.pageSize) > 1 ? (this.state.total / this.state.pageSize) : 1;
				pages = Math.ceil(pages);

				const currentPageData = members.docs.slice(0, this.state.pageSize);

				this.setState({
					currentPageData,
					pages,
					loading: false
				});
			} else if(link && !this.state.gettingLink) {
        let index;
        let {previous, pageSize} = this.state;

				this.setState({gettingLink: true});
				let members = [...this.state.members];
				index = pageStart;
        let data = await link.get();

        for(let member of data.docs) {
          members[index] = member;
          index++;
        }

        link = null;

        console.log(members, size, members.slice(pageStart, pageStart + size));
        this.setState({
          members,
          currentPageData: !previous ? members.slice(pageStart, pageStart + size) : members.slice(pageStart + (size * 2), pageStart + (size * 2) + size),
          loading: false,
          gettingLink: false,
          previous: false
        });
			} else {
				this.setState({
					loading: false
				});
			}
		} catch (e) {
			console.error(e); // eslint-disable-line
		}
	}

  render() {
    return (
      <div className="members-view">
          <ReactTable
            page={this.state.page}
					  loading={this.state.loading}
					  data={this.state.currentPageData}
					  defaultPageSize={this.state.pageSize}
					  pages={this.state.pages}
					  manual
					  onPageChange={this.onPageChange}
					  onPageSizeChange={this.onPageSizeChange}
					  onFetchData={this.getMembers}
            columns={[
              {
                Header: 'Alumni Association Members',
                columns: [
                  {
                    Header: "First Name",
                    id: "firstName",
                    sortable: false,
                    accessor: d => d.data()["First Name"]
                  },
                  {
                    Header: "Last Name",
                    id: "lastName",
                    sortable: false,
                    accessor: d => d.data()["Last Name"]
                  },
                  {
                    Header: "Pledge Year",
                    id: "year",
                    sortable: false,
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
            className="-striped -highlight"
          />
      </div>
    );
  }
}

export default Members;
