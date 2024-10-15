
import { FaPaintBrush, FaChartArea, FaDesktop, FaPencilRuler, FaBullhorn, FaQuestionCircle } from "react-icons/fa";

const DynamicIcon = ({ icon }) => {
    // Use a template string to dynamically access the icon component
   
  console.log(icon)
  
    // If the icon is found, render it; otherwise, render a default icon or nothing
    return icon ? `<${icon}  className="icon w-full h-full" />`:"";
  };

  export default DynamicIcon;