var React;

var FacebookWidget= React.createClass({
  displayName: 'facebook-widget',
  url        : 'http://www.agendakar.com/api/events.json',

  getInitialState: function(){
    return {
      graph_url : 'https://graph.facebook.com/',
      pseudo    : 'hkairi',
      taille    : 200,
      options   : 'picture?width=200',
      image_url : ''
    };
  },

  set_image_url: function( pseudo ){
    var _url = this.state.graph_url + pseudo + '/' + this.state.options;
    this.setState({ image_url : _url });
  },

  fetchImage: function(){
    var _pseudo = this.refs.f_id.getDOMNode().value.trim() ;
    if ( _pseudo !== '' ) { this.set_image_url( _pseudo ); }
  },

  render: function(){
    return(
      React.createElement("div", {className: "facebookWidget"}, 
        React.createElement("img", {src: this.state.image_url}), 
        React.createElement("input", {type: "text", 
               ref: "f_id", 
               placeholder: "Votre ID Facebook", 
               onChange: this.fetchImage})
      )
    );
  }
});

React.render(
  React.createElement(FacebookWidget, null), document.getElementById('facebook-widget')
);
React.render(
  React.createElement(FacebookWidget, null), document.getElementById('facebook-widget2')
);
