var React = require('react')


var Question = React.createClass({
    render : function()
    {
        return (
   
            <p id="question">
                {this.props.contents}
            </p>

        )
        
    }
})

module.exports = Question;