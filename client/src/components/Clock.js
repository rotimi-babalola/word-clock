import React from 'react';
import classNames from 'classnames';
import { toWords } from 'number-to-words';
import initialTimeStructure from '../../time-structure';
import '../styles/clock.css';

/* eslint react/no-unused-state:0 */

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeStructure: initialTimeStructure,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateClock(new Date()), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  convertTo12Hour = (hour) => {
    if (hour >= 13) {
      return hour - 12;
    }
    if (hour === 0) {
      return 12;
    }
    return hour;
  };

  updateClock = (time) => {
    const hour = this.convertTo12Hour(time.getHours());
    const minutes = time.getMinutes();

    // clear clock elements
    this.setState(
      {
        timeStructure: initialTimeStructure,
      },
      this.parseTime(hour, minutes),
    );
  };

  parseTime = (hour, minutes) => {
    if (minutes === 32) {
      console.log('I am here');
      this.setState({
        timeStructure: {
          ...this.state.timeStructure,
          minute: true,
          past: true,
          // prefixes: {
          //   one: true,
          // },
        },
      });
    }
  };

  render() {
    return (
      <div className="clock">
        <word className="one prefix">
          <glyph>o</glyph>
          <glyph>n</glyph>
          <glyph>e</glyph>
        </word>

        <word className="two prefix">
          <glyph>t</glyph>
          <glyph>w</glyph>
          <glyph>o</glyph>
        </word>

        <word className="three prefix">
          <glyph>t</glyph>
          <glyph>h</glyph>
          <glyph>r</glyph>
          <glyph>e</glyph>
          <glyph>e</glyph>
        </word>

        <word className="four prefix">
          <glyph>f</glyph>
          <glyph>o</glyph>
          <glyph>u</glyph>
          <glyph>r</glyph>
        </word>

        <glyph>s</glyph>
        <glyph>a</glyph>
        <glyph>t</glyph>

        <word className="five prefix">
          <glyph>f</glyph>
          <glyph>i</glyph>
          <glyph>v</glyph>
          <glyph>e</glyph>
        </word>

        <word className="six prefix">
          <glyph>s</glyph>
          <glyph>i</glyph>
          <glyph>x</glyph>
        </word>

        <word className="seven prefix">
          <glyph>s</glyph>
          <glyph>e</glyph>
          <glyph>v</glyph>
          <glyph>e</glyph>
          <glyph>n</glyph>
        </word>

        <glyph>b</glyph>
        <glyph>e</glyph>

        <word className="eight prefix">
          <glyph>e</glyph>
          <glyph>i</glyph>
          <glyph>g</glyph>
          <glyph>h</glyph>
          <glyph>t</glyph>
        </word>

        <word className="nine prefix">
          <glyph>n</glyph>
          <glyph>i</glyph>
          <glyph>n</glyph>
          <glyph>e</glyph>
        </word>

        <word className="ten prefix">
          <glyph>t</glyph>
          <glyph>e</glyph>
          <glyph>n</glyph>
        </word>

        <glyph>s</glyph>
        <glyph>o</glyph>
        <glyph>o</glyph>
        <glyph>n</glyph>

        <word className="eleven prefix">
          <glyph>e</glyph>
          <glyph>l</glyph>
          <glyph>e</glyph>
          <glyph>v</glyph>
          <glyph>e</glyph>
          <glyph>n</glyph>
        </word>

        <word className="twelve prefix">
          <glyph>t</glyph>
          <glyph>w</glyph>
          <glyph>e</glyph>
          <glyph>l</glyph>
          <glyph>v</glyph>
          <glyph>e</glyph>
        </word>

        <word className="half">
          <glyph>h</glyph>
          <glyph>a</glyph>
          <glyph>l</glyph>
          <glyph>f</glyph>
        </word>

        <word className="quarter">
          <glyph>q</glyph>
          <glyph>u</glyph>
          <glyph>a</glyph>
          <glyph>r</glyph>
          <glyph>t</glyph>
          <glyph>e</glyph>
          <glyph>r</glyph>
        </word>

        <word className="minutes">
          <word className="minute">
            <glyph>m</glyph>
            <glyph>i</glyph>
            <glyph>n</glyph>
            <glyph>u</glyph>
            <glyph>t</glyph>
            <glyph>e</glyph>
          </word>
          <glyph>s</glyph>
        </word>

        <glyph>t</glyph>
        <glyph>o</glyph>

        <word className="twenty">
          <glyph>t</glyph>
          <glyph>w</glyph>
          <glyph>e</glyph>
          <glyph>n</glyph>
          <glyph>t</glyph>
          <glyph>y</glyph>
        </word>

        <words className="thirteen">
          <glyph>t</glyph>
          <glyph>h</glyph>
          <glyph>i</glyph>
          <glyph>r</glyph>
          <glyph>t</glyph>
          <glyph>e</glyph>
          <glyph>e</glyph>
          <glyph>n</glyph>
        </words>

        <glyph>a</glyph>
        <glyph>t</glyph>

        <words className="fourteen">
          <glyph>f</glyph>
          <glyph>o</glyph>
          <glyph>u</glyph>
          <glyph>r</glyph>
          <glyph>t</glyph>
          <glyph>e</glyph>
          <glyph>e</glyph>
          <glyph>n</glyph>
        </words>

        <words className="fifteen">
          <glyph>f</glyph>
          <glyph>i</glyph>
          <glyph>f</glyph>
          <glyph>t</glyph>
          <glyph>e</glyph>
          <glyph>e</glyph>
          <glyph>n</glyph>
        </words>

        <glyph>s</glyph>

        <words className="past">
          <glyph>p</glyph>
          <glyph>a</glyph>
          <glyph>s</glyph>
          <glyph>t</glyph>
        </words>

        <word className="to">
          <glyph>t</glyph>
          <glyph>o</glyph>
        </word>

        <word className="sixteen">
          <glyph>s</glyph>
          <glyph>i</glyph>
          <glyph>x</glyph>
          <glyph>t</glyph>
          <glyph>e</glyph>
          <glyph>e</glyph>
          <glyph>n</glyph>
        </word>

        <glyph>c</glyph>
        <glyph>k</glyph>
        <glyph>n</glyph>

        <word className="seventeen">
          <glyph>s</glyph>
          <glyph>e</glyph>
          <glyph>v</glyph>
          <glyph>e</glyph>
          <glyph>n</glyph>
          <glyph>t</glyph>
          <glyph>e</glyph>
          <glyph>e</glyph>
          <glyph>n</glyph>
        </word>

        <word className="twenty-minutes">
          <glyph>t</glyph>
          <glyph>w</glyph>
          <glyph>e</glyph>
          <glyph>n</glyph>
          <glyph>t</glyph>
          <glyph>y</glyph>
        </word>

        <glyph>a</glyph>

        <word className="eighteen">
          <glyph>e</glyph>
          <glyph>i</glyph>
          <glyph>g</glyph>
          <glyph>h</glyph>
          <glyph>t</glyph>
          <glyph>e</glyph>
          <glyph>e</glyph>
          <glyph>n</glyph>
        </word>

        <word className="nineteen">
          <glyph>n</glyph>
          <glyph>i</glyph>
          <glyph>n</glyph>
          <glyph>e</glyph>
          <glyph>t</glyph>
          <glyph>e</glyph>
          <glyph>e</glyph>
          <glyph>n</glyph>
        </word>

        <word className="thirty-minutes">
          <glyph>t</glyph>
          <glyph>h</glyph>
          <glyph>i</glyph>
          <glyph>r</glyph>
          <glyph>t</glyph>
          <glyph>y</glyph>
        </word>

        <word className="forty-minutes">
          <glyph>f</glyph>
          <glyph>o</glyph>
          <glyph>r</glyph>
          <glyph>t</glyph>
          <glyph>y</glyph>
        </word>

        <word className="fifty-minutes">
          <glyph>f</glyph>
          <glyph>i</glyph>
          <glyph>f</glyph>
          <glyph>t</glyph>
          <glyph>y</glyph>
        </word>

        <word className="oclock">
          <glyph>o</glyph>
          <glyph>c</glyph>
          <glyph>l</glyph>
          <glyph>o</glyph>
          <glyph>c</glyph>
          <glyph>k</glyph>
        </word>

        <word className="one suffix">
          <glyph>o</glyph>
          <glyph>n</glyph>
          <glyph>e</glyph>
        </word>

        <word className="two suffix">
          <glyph>t</glyph>
          <glyph>w</glyph>
          <glyph>o</glyph>
        </word>

        <glyph>m</glyph>
        <glyph>o</glyph>
        <glyph>o</glyph>
        <glyph>n</glyph>

        <word className="three suffix">
          <glyph>t</glyph>
          <glyph>h</glyph>
          <glyph>r</glyph>
          <glyph>e</glyph>
          <glyph>e</glyph>
        </word>

        <word className="four suffix">
          <glyph>f</glyph>
          <glyph>o</glyph>
          <glyph>u</glyph>
          <glyph>r</glyph>
        </word>

        <word className="five suffix">
          <glyph>f</glyph>
          <glyph>i</glyph>
          <glyph>v</glyph>
          <glyph>e</glyph>
        </word>

        <word className="six suffix">
          <glyph>s</glyph>
          <glyph>i</glyph>
          <glyph>x</glyph>
        </word>

        <word className="seven suffix">
          <glyph>s</glyph>
          <glyph>e</glyph>
          <glyph>v</glyph>
          <glyph>e</glyph>
          <glyph>n</glyph>
        </word>

        <word className="eight suffix">
          <glyph>e</glyph>
          <glyph>i</glyph>
          <glyph>g</glyph>
          <glyph>h</glyph>
          <glyph>t</glyph>
        </word>

        <word className="nine suffix">
          <glyph>n</glyph>
          <glyph>i</glyph>
          <glyph>n</glyph>
          <glyph>e</glyph>
        </word>

        <glyph>i</glyph>
        <glyph>o</glyph>

        <word className="ten suffix">
          <glyph>t</glyph>
          <glyph>e</glyph>
          <glyph>n</glyph>
        </word>

        <word className="eleven suffix">
          <glyph>e</glyph>
          <glyph>l</glyph>
          <glyph>e</glyph>
          <glyph>v</glyph>
          <glyph>e</glyph>
          <glyph>n</glyph>
        </word>

        <word className="twelve suffix">
          <glyph>t</glyph>
          <glyph>w</glyph>
          <glyph>e</glyph>
          <glyph>l</glyph>
          <glyph>v</glyph>
          <glyph>e</glyph>
        </word>

        <glyph>s</glyph>
      </div>
    );
  }
}

export default Clock;
