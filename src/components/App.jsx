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
      return { [event.target.name]: prevState[event.target.name] + 1 };
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
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handelClick}
          />
        </Section>
        {!!this.total() && (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.total()}
              positivePercentage={this.positivePercentage()}
            ></Statistics>
          </Section>
        )}
        {!this.total() && <Notification message="There is no feedback" />}
      </div>
    );
  }
}
