import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;
    const marksChartData = marksData.map(studentData =>{
        const student = {
            id:studentData.student_id,
            name:studentData.name,
            physics:studentData.marks.physics,
            math:studentData.marks.math,
            chemistry:studentData.marks.chemistry
        }
        const avg = (student.physics +student.chemistry + student.math)/3
        student.avg = avg
        
        return student;
    })
    // console.log(marksChartData)
    return (
        <div>
            <BarChart width={500}
          height={300}
          data={marksChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5, 
            }}>
            
            <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Bar dataKey={"physics"} stroke='blue' fill='Yellow'></Bar>
            <Bar dataKey={"chemistry"} stroke='purple' fill='purple'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;