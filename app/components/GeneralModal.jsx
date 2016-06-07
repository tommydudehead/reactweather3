var React = requir('react');

var GeneralModal = React.createClass({
  render: function() {
    return (
      <div id="general-modal" className="reveal full text-center" data-reveal="">
        <h4>The title</h4>
        <p>the message</p>
        <p>
          <button className="button hollow" data-close="">
            OK
          </button>
        </p>
      </div>
    );

  }

});

modules.export(ErrorModal);
