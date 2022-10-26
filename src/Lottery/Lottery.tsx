import React from 'react';
interface LotteryProps  extends  React.PropsWithChildren{
    numberOne:number;
    numberTwo:number;
    numberThree:number;
    numberFour:number;
    numberFive:number;
}


const Lottery: React.FC<LotteryProps> = props => {
    return (
        <div className="Lottery">
                <span>{props.numberOne}</span>
                <span>{props.numberTwo}</span>
                <span>{props.numberThree}</span>
                <span>{props.numberFour}</span>
                <span>{props.numberFive}</span>
        </div>
    );
};

export default Lottery;