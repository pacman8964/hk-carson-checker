import * as React from 'react';
import PropTypes from 'prop-types';

export default class ChatHistory extends React.Component {
	static propTypes = {
    history: PropTypes.array,
  };

  render() {
  	const { props } = this;
		return (
		<ul className="collection">
			{ props.history.map((messageObj) => {
        const messageDate = new Date(messageObj.ts);
        const messageDateTime = messageDate.toLocaleDateString() +
          ' at ' + messageDate.toLocaleTimeString();
        return (
          <li className="collection-item avatar" key={ messageObj.ts }>
            <p>
              <i className="prefix mdi-action-alarm" />
              <span className="message-date">{ messageDateTime }</span>
              <br />
              <span className="license">{ messageObj.license }</span>
              {
                messageObj.safe ? <span className="safe"> is Safe</span> : <span className="alert"> is Dangerous</span>
              }
              <br />
              <span>{ messageObj.desc }</span>
            </p>
          </li>
        );
      }) }
		</ul>);
  }
}