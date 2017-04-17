var React = require('react')


var AnswerList = React.createClass({
    render : function()
    {
        return (
        <div id="answers">
            <ul id="contents">
                    {
                        this.props.contents.map(function(msg, index) {
                        return <li key={index}>{msg}</li>
                    })
                    }  
            </ul>
        </div>
        )
        
    }
})

module.exports = AnswerList