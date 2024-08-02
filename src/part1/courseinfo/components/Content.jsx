import Part from './Part'
 const Content = ({parts}) => {
    return(
        
        <>
        {/* Exercise 1.1 */}
            {/* <p>
                {part1} {exercises1}
            </p>
            <p>
                {part2} {exercises2}
            </p>
            <p>
                {part3} {exercises3}
            </p> */}
            {/* Exercise 1.2 */}
            {/* <div>
                <Part part={part1} exercises={exercises1} />
                <Part  part={part2} exercises={exercises2}/>
                <Part part={part3} exercises={exercises3}/>
            </div> */}
             <Part part={parts[0].name} exercises={parts[0].exercises}/>
            <Part  part={parts[1].name} exercises={parts[1].exercises}/>
            <Part part={parts[2].name} exercises={parts[2].exercises}/>
        </>
    )
}

export default Content