import React, { useState } from 'react';
import Button from "./components/Button";
import "./styles.css"
const StatisticLine = (props) => {
    return (
    <>
        <table>
            <tr>
            <td className='mr-2'>{props.text}</td>
            <td>
            {props.text === "average"
                ? props.value.toFixed(1)
                : props.text === "positive feedback"
                ? props.value.toFixed(1) + "%"
                : props.value}
            </td>
            </tr>
        </table>
    </>
    )
}
 const Statistics = (props) => {
    const feedbackStats = props.stats
    return (
    <>
        <StatisticLine text="good" value ={feedbackStats.good} />
        <StatisticLine text="neutral" value ={feedbackStats.neutral} />
        <StatisticLine text="all" value ={feedbackStats.total} />
        <StatisticLine text="average" value ={feedbackStats.average} />
        <StatisticLine text="positive feedback" value ={feedbackStats.positivePercentage} />
    </>
    )
}
const Unicafe = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const total = good + neutral + bad;
    const average = total === 0 ? 0 : (good - bad) / total;
    const positivePercentage = total === 0 ? 0 : (good / total) * 100;
    const stats = {
        good: good,
        bad: bad,
        neutral: neutral,
        total: total,
        average: average,
        positivePercentage: positivePercentage
    }
    return (
        <>
            <h1>give feedback</h1>
            <Button text="good" handleClick={() => setGood(good + 1)} />
            <Button text="neutal" handleClick={() => setNeutral(neutral + 1)} />
            <Button text="bad" handleClick={() => setBad(bad + 1)} />
             <h1>Statistics</h1>
             {total !== 0 ? 
                <Statistics stats={stats}/>
                : (
                    <p>No feedback given</p>
                )
            }
        </>
    )
}

export default Unicafe