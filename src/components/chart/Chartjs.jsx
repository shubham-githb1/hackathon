import React from 'react'
import { Pie } from 'react-chartjs-2'

const Chartjs = () => {

    const colours = [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 13)',
        'rgb(225, 05, 86)',
        'rgb(54, 162, 35)',
  ]

  const pieName  = ['buyer1','buyer2','buyer3','buyer4','buyer5']
  const pieData = [23,45,67,34,12]

    const data = {
        labels: pieName,
        datasets: [{
          label: 'Manager Info',
          data: pieData,
          backgroundColor: colours,
          hoverOffset: 4
        }]
    }
    return (
        
        <div className="chart" style={{height : '250px', width : '960px', margin: 'auto',position:"relative", top:"35px", padding: '10px 60px 60px 60px'}} >
            <h2 className="chartTitle">Buyer's Data</h2>
            <Pie 
              height={400}
              width={600}
              options = {{
                maintainAspectRatio: false,
              }}
              data={data}
            />
        </div>
    )
}

export default Chartjs
