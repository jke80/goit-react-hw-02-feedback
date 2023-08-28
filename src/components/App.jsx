import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedBackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelClick = event => {
    this.setState(prevState => {
      const { name } = event.target;
      return { [name]: prevState[name] + 1 };
    });
  };

  total() {
    return this.state.good + this.state.bad + this.state.neutral;
  }

  positivePercentage() {
    if (!this.total()) return 0;
    return Math.round((this.state.good / this.total()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.total();
    const positivePercentage = this.positivePercentage();
    const options = Object.keys(this.state);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={options}
            onLeaveFeedback={this.handelClick}
          />
        </Section>
        {total ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
