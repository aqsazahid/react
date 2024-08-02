const Total = ({total}) => {
    const exercies = total.map((item)=>item.exercises)
    const totalExercises = exercies.reduce((sum,value) => sum + value, 0)
    return (
        <h3>Total of  {totalExercises} exercises</h3>
    )
}
export default Total;