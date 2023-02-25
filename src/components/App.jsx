import React, { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";
import { Section } from "./Section";
import { Notification } from "./Notification";

class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }; 
  
  onLeaveFeedback = (state) => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }))
  }
countTotalFeedback = () => {
    const {good,neutral,bad}=this.state
    const total = good+neutral+bad;
    return total;
    }
countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state
    const total = good+neutral+bad;
    const perGood = Math.round((good * 100) / (total));
    return perGood;
}
    
  render() {
    const { good, neutral, bad } = this.state;
    const option = Object.keys(this.state)
    return (
      <div className="general-section">
        <Section title="Please leave feedback">
        <FeedbackOptions
          options={option}
          onLeaveFeedback={this.onLeaveFeedback}>
          </FeedbackOptions>
          <Section title="Statisticks"></Section>
          {good!==0 || bad!==0 || neutral!==0 ?<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}>
          </Statistics> : 
        <Notification message="There is no feedback"></Notification>}
        
        </Section>
    </div>
  );
  }

}
export default App;
