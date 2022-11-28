import InfoBox from "./InfoBos"
import BuildIcon from '@mui/icons-material/Build';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DatasetIcon from '@mui/icons-material/Dataset';

const Main = () => {
    return (
        <div className="main--container">
            <InfoBox 
                icon={<BuildIcon fontSize="large"/>} 
                title="Build"
                text="Build and fully customize your own protocals across user defined timelines. Combine daily, weeky and monthly goals into one protocal. "
                />
            <InfoBox 
                icon={<ControlPointIcon fontSize="large"/>} 
                title="Complete"
                text="Monitor and update your progress. Maintain progress streaks and climb leader boards."
                />
                
            <InfoBox 
                icon={<DatasetIcon fontSize="large"/>} 
                title="Track"
                text="Share your best protocals with the world, vote for and browse a collection of the best that others have found useful. Adopt them for your own."
                
                />
                
        </div>

    )
}

export default Main