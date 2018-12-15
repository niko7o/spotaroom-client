import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Homelist extends Component {
  render() {
    return (
      <div className="Homelist">
        <h1>{this.props.sort}</h1>
        {this.props.homes.map(home => (
          <div className="Homecard" key={home.id}>
            <div className="Homecard__photo">
              <img src={home.photoUrls.homecardHidpi} alt={home.title} />
            </div>
            <span className="Homecard__title">{home.title}</span>
            <div className="Homecard__price">{`${home.pricePerMonth}€`}</div>
            <div className="Homecard__divider">
              <button type="button">More details</button>
              <button type="button">Book now</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

Homelist.defaultProps = {
  homes: [],
  sort: 'asc',
};

Homelist.propTypes = {
  homes: PropTypes.arrayOf(PropTypes.object),
  sort: PropTypes.string,
};

export default Homelist;

// filterArray = () => {
//   if(this.state.sort === 'asc') {
//     const asc = this.state.homes.sort((a,b)=>a-b);
//     this.setState({
//       homes: asc
//     })
//   } else {
//     const desc = this.state.homes.sort((a,b)=>b-a);
//     this.setState({
//       homes: desc
//     })
//   }
// }
