import React from "react"


class Smile extends React.Component {

  constructor(props: { symbol: any; count: number }) {
    super(props);

    this.state = {

      symbolObj: props.symbol.map((symbolEl: any) => {
        return {
          symbolEl,
          counterEl: props.count,
        };
      }),
    };

    this.plus = this.plus.bind(this);
  }

  plus(symbol: string) {

    this.setState(() => {
      return this.state.symbolObj.map((obj: any) => {
        if (obj.symbolEl === symbol) {
          obj.counterEl += 1;
        }

        return this.state.symbolObj;
      });
    });
  }

  render() {
    return this.state.symbolObj.map((obj: any) => {
      return (
        <>
          <div key={obj.symbolEl}>
            <button onClick={() => this.plus(obj.symbolEl)}>{obj.symbolEl}</button>
            <span>{obj.counterEl}</span>
          </div>
        </>
      );
    });
  }
}

export default Smile