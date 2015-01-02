var React;

var AgendakarSearch = React.createClass({displayName: "AgendakarSearch",
  render: function(){
    return(
      React.createElement("div", {id: "search-box"}, 
        React.createElement("input", {id: "searchField", 
               ref: "searchField", 
               type: "text", 
               placeholder: "Recherche sur Agendakar.com"}), 

        React.createElement("i", {className: "fa fa-search button"})
      )
    );
  }
});

React.render(
  React.createElement(AgendakarSearch, null), document.getElementById('agendakar-search')
);
