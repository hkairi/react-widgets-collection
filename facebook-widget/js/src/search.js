var React;

var AgendakarSearch = React.createClass({
  render: function(){
    return(
      <div id='search-box'>
        <input id='searchField'
               ref='searchField'
               type='text'
               placeholder='Recherche sur Agendakar.com' />
        <i className='fa fa-search button'></i>
      </div>
    );
  }
});

React.render(
  <AgendakarSearch />, document.getElementById('agendakar-search')
);
