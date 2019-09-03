import * as React from 'react';
import PropTypes from 'prop-types';

export default class ChatInput extends React.Component {
	static propTypes = {
    sendMessage: PropTypes.func,
    isLoading: PropTypes.bool,
  };

  componentDidMount() {
    this.refs.txtMessage.focus();
  }

	onSubmit = (e) => {
	  e.preventDefault();
	  const message = this.refs.txtMessage.value;
		if (message.length === 0) {
		  return;
		}
		this.props.sendMessage(message);

		// Clear the input field and set focus
    this.refs.txtMessage.value = '';
    this.refs.txtMessage.focus();
	};

  render() {
  	const { props, onSubmit } = this;

    return (<header className="teal">
		  <form className="container" onSubmit={ onSubmit }>
		    <div className="row">
		      <div className="input-field col s10">
		        <i className="prefix mdi-communication-chat" />
		        <input ref="txtMessage" type="text" placeholder="Type license. e.g AA1234 or aa1234 or Aa1234" />
            <span className="chip left">
              <span>資料來源自TG group。準確性請自行判斷。小心為上。</span>
            </span>
		      </div>
		      <div className="input-field col s2">
		        <button type="submit" className="btn waves-effect waves-light btn-floating btn-large" disabled={ props.isLoading }>
		          <i className="mdi-content-send" />
		        </button>
		      </div>
		    </div>
		  </form>
		</header>);
  }
}