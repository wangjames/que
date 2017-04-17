var React = require('react')
var Question = require('../components/Question')
var AnswerList = require('../components/AnswerList')
var style = require('../index.css')
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
        return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                </div>
                
                <div className="col-md-10">
                <div id="questionbox">
                <Question contents={this.state.currentQuestion} />
                </div>
                </div>
                
                <div className="col-md-2">
                </div>
            </div>
            <div className="row">
                
                <div className="col-md-2">
                </div>
                
                <div className="col-md-10">
                    <AnswerList contents={this.state.currentAnswers} />
                </div>
            
                <div className="col-md-2">
                </div>
            
                <div onClick={this.changeAnswer}>hey</div>
                </div>
            </div>
            );
    }
});

module.exports = QuizContainer;