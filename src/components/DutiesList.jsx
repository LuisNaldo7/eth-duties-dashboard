import React from 'react';
import axios from 'axios';
import './DutiesList.css';

export default class DutiesList extends React.Component {
  state = {
    duties: [],
  };

  formatTime(val) {
    if (val != null) {
      let ts = new Date(val * 1000);
      val =
        ts.getFullYear() +
        '-' +
        (ts.getMonth() + 1).toString().padStart(2, '0') +
        '-' +
        ts.getDate().toString().padStart(2, '0') +
        ' ' +
        ts.getHours().toString().padStart(2, '0') +
        ':' +
        ts.getMinutes().toString().padStart(2, '0') +
        ':' +
        ts.getSeconds().toString().padStart(2, '0');
    }
    return val;
  }

  // replace by highlight function
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  componentDidMount() {
    setInterval(() => {
      axios.get(process.env.REACT_APP_SERVER + `/duties`).then((res) => {
        const duties = res.data.duties;
        console.log(duties);
        this.setState({ duties });
      });
    }, 1000);
  }

  getCell_Attestation(duty) {
    if (!duty.nextAttestationDuty) {
      return <td>{'n/a'}</td>;
    }
    if (this.getRandomInt(2) % 2 == 0) {
      return (
        <td>
          <font color="#FFA579">
            {this.formatTime(duty.nextAttestationDuty)}
          </font>
        </td>
      );
    } else {
      return <td>{this.formatTime(duty.nextAttestationDuty)}</td>;
    }
  }

  getCell_BlockProposal(duty) {
    if (!duty.nextBlockProposalDuty) {
      return <td>{'n/a'}</td>;
    }
    if (this.getRandomInt(2) % 2 == 0) {
      return (
        <td>
          <font color="#FFA579">
            {this.formatTime(duty.nextBlockProposalDuty)}
          </font>
        </td>
      );
    } else {
      return <td>{this.formatTime(duty.nextBlockProposalDuty)}</td>;
    }
  }

  getCell_SyncCommittee(duty) {
    if (!duty.nextSyncCommitteeDuty) {
      return <td>{'n/a'}</td>;
    }
    if (this.getRandomInt(2) % 2 == 0) {
      return (
        <td>
          <font color="#FFA579">
            {this.formatTime(duty.nextSyncCommitteeDuty)}
          </font>
        </td>
      );
    } else {
      return <td>{this.formatTime(duty.nextSyncCommitteeDuty)}</td>;
    }
  }

  render() {
    return (
      <div class="wrap-table">
        <table>
          <thead>
            <tr class="table100-head">
              <th>Validator</th>
              <th>Attestation</th>
              <th>Block Proposal</th>
              <th>Sync Committee</th>
            </tr>
          </thead>
          <tbody>
            {this.state.duties
              // .sort((a, b) => {
              //   return a.validatorIndex
              //     .toLowerCase()
              //     .localeCompare(b.validatorIndex.toLowerCase());
              // })
              .map((duty, index) => {
                return (
                  <tr>
                    <td>{duty.validatorIndex}</td>
                    {this.getCell_Attestation(duty)}
                    {this.getCell_BlockProposal(duty)}
                    {this.getCell_SyncCommittee(duty)}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
