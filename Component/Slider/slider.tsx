import React from 'react';
import Decimal from "decimal.js"
import "./slider.scss"
import _Slider from "bootstrap-slider"

interface IProps {
  value: number | string,
  min: number,
  max: number,
  onChange: (value: string | number) => void
  type?: string
}

interface IState {
}

class Slider extends React.Component<IProps, IState> {
  state = {
    id: `wkSlider${new Date().getTime()}`,
    slider: null
  }

  handleChange({ newValue: value }: { newValue: number | string }) {
    const { onChange } = this.props
    onChange(value)
  }

  getTicks() {
    const { max } = this.props
    const ticks = []
    const avg = new Decimal(max).div(4)
    for (let i = 0; i < 5; i++) {
      ticks.push(avg.mul(i).valueOf())
    }
    return ticks
  }

  initSlider() {
    const { id } = this.state
    const { value, min, max, type = "buy" } = this.props
    const option = {
      id: `wk-slider-${type}`,
      min: min,
      max: max,
      step: 0.0001,
      tooltip: "hide",
      ticks: this.getTicks(),
      value: value,
    }
    this.setState({
      slider: new _Slider(`#${id}`, option)
    }, () => {
      (this.state.slider as any).on("change", this.handleChange.bind(this))
    })
  }

  componentDidMount() {
    this.initSlider()
  }

  componentDidUpdate(prevProps: IProps) {
    if (this.props.value !== prevProps.value) {
      (this.state.slider as any).setValue(this.props.value)
    }
  }

  render() {
    const { id } = this.state
    return <div className="wayki-x-slider">
      <input type="text" id={id} />
    </div>
  }
}

export default Slider