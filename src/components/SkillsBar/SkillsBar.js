import ProgressBar from 'react-bootstrap/ProgressBar';
import './SkillsBar.css'

function SkillsBar({data}) {
    const { title, percent} = data;
    let now=percent;
  return (
  <div className='skillsbars'>
  <div style={{color:'white', paddingBottom:'1%', fontWeight:'700'}}>
    {title}
  </div>
  
  <ProgressBar animated now={now} label={`${now}%`} />
  </div>
)};

export default SkillsBar;