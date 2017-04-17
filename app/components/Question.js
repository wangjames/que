var React = require('react')


var Question = React.createClass({
    render : function()
    {
        return (
        <div id="questionbox">
            <p id="question">
                {this.props.contents}
            </p>
        </div>
        )
        
    }
})

module.exports = Question;