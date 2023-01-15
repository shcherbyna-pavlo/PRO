import React from "react"


class Smile extends React.Component {
  constructor(props: { simb: any; count: number }) {
    super(props);

    this.state = {

      simb: props.simb.map((el: any) => {
        return {
          el,
          counterEl: props.count,
        };
      }),
    };

    this.plus = this.plus.bind(this);
  }

  plus(obj: string) {
    const fdndflkv = () => {
      return this.state.simb.map((obj1: any) => {
        if (obj1.el === obj) {
          obj1.counterEl += 1;
        }

        return this.state.simb;
      });
    };

    this.setState(fdndflkv);
  }

  render() {
    return this.state.simb.map((obj: any) => {
      return (
        <>
          <div key={obj.el}>
            <button onClick={() => this.plus(obj.el)}>{obj.el}</button>
            <span>{obj.counterEl}</span>
          </div>
        </>
      );
    });
  }
}


export default Smile