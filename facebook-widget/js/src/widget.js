var React, $;

var FacebookWidget= React.createClass({
  displayName: 'facebook-widget',
  url        : 'http://www.agendakar.com/api/events.json',

  getInitialState: function(){
    return {
      graph_url : 'https://graph.facebook.com/',
      pseudo    : 'hkairi',
      taille    : 200,
      options   : 'picture?width=200',
      image_url : '',
      fullName  : ''
    };
  },

  set_image_url: function( pseudo ){
    var _url = this.state.graph_url + pseudo + '/' + this.state.options;
    this.setState({ image_url : _url });

    $.getJSON(this.state.graph_url + pseudo).then(
      function(data){
        this.setState({ fullName: data.name });
      }.bind(this)
    );
  },

  fetchImage: function(){
    var _pseudo = this.refs.f_id.getDOMNode().value.trim() ;
    if ( _pseudo !== '' ) { this.set_image_url( _pseudo ); }
  },

  render: function(){
    return(
      <div className="facebookWidget">
        <h3>{this.state.fullName}</h3>
        <img src={this.state.image_url} />
        <input type='text'
               ref ='f_id'
               placeholder='Votre ID Facebook'
               onChange={this.fetchImage} />
      </div>
    );
  }
});

React.render(
  <FacebookWidget />, document.getElementById('facebook-widget')
);
