var React = require('react')
var Question = require('../components/Question')
var AnswerList = require('../components/AnswerList')
var QuizContainer = React.createClass({
    getInitialState : function()
    {
        var questionArray = ["Question 1", "Question 2"];
        var answersArray = [["A", "B", "C", "D"], ["A", "B", "C", "D"]];
        var currentSelection = 0;
        return {
            questions : questionArray,
            answers : answersArray,
            currentNumber : currentSelection,
            currentAnswers : answersArray[currentSelection],
            currentQuestion : questionArray[currentSelection]
        }
    },
    
    changeAnswer : function()
    {
        var nextSelection = this.state.currentNumber + 1;
        this.setState({
            currentNumber : nextSelection,
            currentAnswers : this.state.answers[nextSelection],
            currentQuestion : this.state.questions[nextSelection]
        })
    },
    render: function () {
        return (<div>
            <Question contents={this.state.currentQuestion} />
            <AnswerList contents={this.state.currentAnswers} />
            <div onClick={this.changeAnswer}>hey</div>
            </div>);
    }
});

module.exports = QuizContainer;