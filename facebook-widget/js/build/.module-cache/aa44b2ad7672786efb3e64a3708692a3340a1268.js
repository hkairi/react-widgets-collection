var React;

var FacebookWidget= React.createClass({
  displayName: 'facebook-widget',
  url        : 'http://www.agendakar.com/api/events.json',

  render: function(){
    return(
      React.createElement("div", null
      )
    );
  }
});

React.render(
  React.createElement(FacebookWidget, null), document.getElementById('content')
);
