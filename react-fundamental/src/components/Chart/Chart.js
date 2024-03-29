import CharBar from 'ChartBar'
import './Chart.css'

const Chart = (props) => {
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <CharBar key={dataPoint.label} value={dataPoint.value} maxValue={null}
                                                        label={dataPoint.label}/>)}
        </div>
    )
}

export default Chart