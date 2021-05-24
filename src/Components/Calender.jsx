import React, { Component } from 'react'
import '../css/Calender.css'

class Calender extends Component {
  state = {
    calenderClass: 'calender-button',
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  }
  componentDidMount = () => {
    const monday = []
    const tuesday = []
    const wednesday = []
    const thursday = []
    const friday = []
    const saturday = []
    const sunday = []
    const currMonth = new Date().getMonth() + 1
    const currentMonth = currMonth.toLocaleString('default', { month: 'long' })
    const datesArray = []
    const daysArray = []
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    var date = new Date(year, month, 1)
    var days = []
    while (date.getMonth() === month) {
      days.push(new Date(date))
      date.setDate(date.getDate() + 1)
    }

    days.map((d) => {
      return datesArray.push({
        number: d.getDate(),
        day: d.toLocaleString('en-us', { weekday: 'long' }),
      })
    })

    const mon = datesArray.filter((d) => d.day === 'Monday')
    const tues = datesArray.filter((d) => d.day === 'Tuesday')
    const wed = datesArray.filter((d) => d.day === 'Wednesday')
    const thurs = datesArray.filter((d) => d.day === 'Thursday')
    const fri = datesArray.filter((d) => d.day === 'Friday')
    const sat = datesArray.filter((d) => d.day === 'Saturday')
    const sun = datesArray.filter((d) => d.day === 'Sunday')
    mon.map((m) => {
      return monday.push({
        number: m.number,
      })
    })
    tues.map((m) => {
      return tuesday.push({
        number: m.number,
      })
    })
    wed.map((m) => {
      return wednesday.push({
        number: m.number,
      })
    })
    thurs.map((m) => {
      return thursday.push({
        number: m.number,
      })
    })
    fri.map((m) => {
      return friday.push({
        number: m.number,
      })
    })
    sat.map((m) => {
      return saturday.push({
        number: m.number,
      })
    })
    sun.map((m) => {
      return sunday.push({
        number: m.number,
      })
    })
    this.setState({
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    })
    console.log(monday)
    console.log(this.state.monday)
  }
  render() {
    return (
      <div style={{ width: '100%' }} className="d-flex justify-content-between">
        <div>
          <p>Mon</p>
          {this.state.monday.map((mon) => {
            return (
              <div className={this.state.calenderClass}>
                <p>{mon.number}</p>
              </div>
            )
          })}
        </div>
        <div>
          <p>Tues</p>
          {this.state.tuesday.map((mon) => {
            return (
              <div className={this.state.calenderClass}>
                <p>{mon.number}</p>
              </div>
            )
          })}
        </div>
        <div>
          <p>Wed</p>
          {this.state.wednesday.map((mon) => {
            return (
              <div className={this.state.calenderClass}>
                <p>{mon.number}</p>
              </div>
            )
          })}
        </div>
        <div>
          <p>Thu</p>
          {this.state.thursday.map((mon) => {
            return (
              <div className={this.state.calenderClass}>
                <p>{mon.number}</p>
              </div>
            )
          })}
        </div>
        <div>
          <p>Fri</p>
          {this.state.friday.map((mon) => {
            return (
              <div className={this.state.calenderClass}>
                <p>{mon.number}</p>
              </div>
            )
          })}
        </div>
        <div>
          <p>Sat</p>
          {this.state.saturday.map((mon) => {
            return (
              <div className={this.state.calenderClass}>
                <p>{mon.number}</p>
              </div>
            )
          })}
        </div>
        <div>
          <p>Sun</p>
          {this.state.sunday.map((mon) => {
            return (
              <div className={this.state.calenderClass}>
                <p>{mon.number}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Calender
