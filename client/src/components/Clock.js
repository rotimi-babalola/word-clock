/* eslint-disable default-case */
/* eslint-disable no-fallthrough */
import React from 'react';
import classNames from 'classnames';
import { toWords } from 'number-to-words';
// import initialTimeStructure from '../../time-structure';
import '../styles/clock.css';

/* eslint react/no-unused-state:0 */

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeObject: {},
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

    if (minutes === 1) {
      this.setState({
        timeObject: {
          prefixes: {
            one: true,
          },
          minute: true,
          past: true,
          suffixes: {
            [toWords(hour)]: true,
          },
        },
      });
      return;
    }

    if (minutes <= 12 && minutes >= 2) {
      this.setState({
        timeObject: {
          prefixes: {
            [toWords(minutes)]: true,
          },
          minutes: true,
          past: true,
          suffixes: {
            [toWords(hour)]: true,
          },
        },
      });
      return;
    }

    switch (minutes) {
      case 0:
        this.setState({
          timeObject: {
            prefixes: {
              [toWords(hour)]: true,
            },
            oclock: true,
          },
        });
        return;

      case 13:
        this.setState({
          timeObject: {
            prefixes: {
              [toWords(hour)]: true,
            },
            thirteen: true,
          },
        });
        return;

      case 14:
        this.setState({
          timeObject: {
            prefixes: {
              [toWords(hour)]: true,
            },
            fourteen: true,
          },
        });
        return;

      case 15:
        this.setState({
          timeObject: {
            prefixes: {
              [toWords(hour)]: true,
            },
            quarter: true,
            past: true,
          },
        });
        return;

      case 16:
        this.setState({
          timeObject: {
            prefixes: {
              [toWords(hour)]: true,
            },
            sixteen: true,
          },
        });
        return;

      case 17:
        this.setState({
          timeObject: {
            prefixes: {
              [toWords(hour)]: true,
            },
            seventeen: true,
          },
        });
        return;

      case 18:
        this.setState({
          timeObject: {
            prefixes: {
              [toWords(hour)]: true,
            },
            eighteen: true,
          },
        });
        return;

      case 19:
        this.setState({
          timeObject: {
            prefixes: {
              [toWords(hour)]: true,
            },
            nineteen: true,
          },
        });
        return;

      case 20:
        this.setState({
          timeObject: {
            twenty: true,
            past: true,
            suffixes: {
              [toWords(hour)]: true,
            },
          },
        });
        return;

      case 30:
        this.setState({
          timeObject: {
            half: true,
            past: true,
            suffixes: {
              [toWords(hour)]: true,
            },
          },
        });
        return;

      case 40:
        this.setState({
          timeObject: {
            twenty: true,
            to: true,
            suffixes: {
              [toWords(hour + 1)]: true,
            },
          },
        });
        return;

      case 45:
        this.setState({
          timeObject: {
            quarter: true,
            to: true,
            suffixes: {
              [toWords(hour + 1)]: true,
            },
          },
        });
        return;

      case 50:
        this.setState({
          timeObject: {
            ten: true,
            to: true,
            suffixes: {
              [toWords(hour + 1)]: true,
            },
          },
        });
        return;

      case 55:
        this.setState({
          timeObject: {
            five: true,
            to: true,
            suffixes: {
              [toWords(hour + 1)]: true,
            },
          },
        });
        return;
    }

    const tensPart = minutes - (minutes % 10);
    const unitsPart = minutes % 10;

    // set hour in state
    this.setState({
      timeObject: {
        prefixes: {
          [toWords(hour)]: true,
        },
        [`${toWords(tensPart)}-minutes`]: true,
        suffixes: unitsPart
          ? {
              [toWords(unitsPart)]: true,
            }
          : undefined,
      },
    });
  };

  render() {
    const { timeObject } = this.state;
    return (
      <div className="clock">
        <word
          className={classNames('one', 'prefix', {
            on: timeObject?.prefixes?.one,
          })}
        >
          <glyph>o</glyph>
          <glyph>n</glyph>
          <glyph>e</glyph>
        </word>

        <word
          className={classNames('two', 'prefix', {
            on: timeObject?.prefixes?.two,
          })}
        >
          <glyph>t</glyph>
          <glyph>w</glyph>
          <glyph>o</glyph>
        </word>

        <word
          className={classNames('three', 'prefix', {
            on: timeObject?.prefixes?.three,
          })}
        >
          <glyph>t</glyph>
          <glyph>h</glyph>
          <glyph>r</glyph>
          <glyph>e</glyph>
          <glyph>e</glyph>
        </word>

        <word
          className={classNames('four', 'prefix', {
            on: timeObject?.prefixes?.four,
          })}
        >
          <glyph>f</glyph>
          <glyph>o</glyph>
          <glyph>u</glyph>
          <glyph>r</glyph>
        </word>

        <glyph>s</glyph>
        <glyph>a</glyph>
        <glyph>t</glyph>

        <word
          className={classNames('five', 'prefix', {
            on: timeObject?.prefixes?.five,
          })}
        >
          <glyph>f</glyph>
          <glyph>i</glyph>
          <glyph>v</glyph>
          <glyph>e</glyph>
        </word>

        <word
          className={classNames('six', 'prefix', {
            on: timeObject?.prefixes?.six,
          })}
        >
          <glyph>s</glyph>
          <glyph>i</glyph>
          <glyph>x</glyph>
        </word>

        <word
          className={classNames('seven', 'prefix', {
            on: timeObject?.prefixes?.seven,
          })}
        >
          <glyph>s</glyph>
          <glyph>e</glyph>
          <glyph>v</glyph>
          <glyph>e</glyph>
          <glyph>n</glyph>
        </word>

        <glyph>b</glyph>
        <glyph>e</glyph>

        <word
          className={classNames('eight', 'prefix', {
            on: timeObject?.prefixes?.eight,
          })}
        >
          <glyph>e</glyph>
          <glyph>i</glyph>
          <glyph>g</glyph>
          <glyph>h</glyph>
          <glyph>t</glyph>
        </word>

        <word
          className={classNames('nine', 'prefix', {
            on: timeObject?.prefixes?.nine,
          })}
        >
          <glyph>n</glyph>
          <glyph>i</glyph>
          <glyph>n</glyph>
          <glyph>e</glyph>
        </word>

        <word
          className={classNames('ten', 'prefix', {
            on: timeObject?.prefixes?.ten,
          })}
        >
          <glyph>t</glyph>
          <glyph>e</glyph>
          <glyph>n</glyph>
        </word>

        <glyph>s</glyph>
        <glyph>o</glyph>
        <glyph>o</glyph>
        <glyph>n</glyph>

        <word
          className={classNames('eleven', 'prefix', {
            on: timeObject?.prefixes?.eleven,
          })}
        >
          <glyph>e</glyph>
          <glyph>l</glyph>
          <glyph>e</glyph>
          <glyph>v</glyph>
          <glyph>e</glyph>
          <glyph>n</glyph>
        </word>

        <word
          className={classNames('twelve', 'prefix', {
            on: timeObject?.prefixes?.twelve,
          })}
        >
          <glyph>t</glyph>
          <glyph>w</glyph>
          <glyph>e</glyph>
          <glyph>l</glyph>
          <glyph>v</glyph>
          <glyph>e</glyph>
        </word>

        <word className={classNames('half', { on: timeObject?.half })}>
          <glyph>h</glyph>
          <glyph>a</glyph>
          <glyph>l</glyph>
          <glyph>f</glyph>
        </word>

        <word className={classNames('quarter', { on: timeObject.quarter })}>
          <glyph>q</glyph>
          <glyph>u</glyph>
          <glyph>a</glyph>
          <glyph>r</glyph>
          <glyph>t</glyph>
          <glyph>e</glyph>
          <glyph>r</glyph>
        </word>

        <word className={classNames('minutes', { on: timeObject?.minutes })}>
          <word className={classNames('minute', { on: timeObject?.minute })}>
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
