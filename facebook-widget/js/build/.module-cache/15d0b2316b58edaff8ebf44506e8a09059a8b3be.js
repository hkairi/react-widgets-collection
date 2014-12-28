var React;

var FacebookWidget= React.createClass({
  displayName: 'facebook-widget',
  url        : 'http://www.agendakar.com/api/events.json',

  getInitialState: function(){
    return {
      image_url : 'https://graph.facebook.com/hkairi/picture?width=200'
    };
  },

  clickHandler: function(e){
    console.log( this.refs );
  },

  render: function(){
    return(
      React.createElement("div", null, 
        React.createElement("img", {src: this.state.image_url}), 
        React.createElement("input", {type: "text", ref: "f_id", placeholder: "Votre ID Facebook"}), 
        React.createElement("input", {type: "submit", onClick: this.clickHandler})
      )
    );
  }
});

React.render(
  React.createElement(FacebookWidget, null), document.getElementById('content')
);
