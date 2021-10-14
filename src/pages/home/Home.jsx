import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
<<<<<<< HEAD
=======
import Chartjs from "../../components/chart/Chartjs";
>>>>>>> e83a228 (first commit)
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
<<<<<<< HEAD

=======
  
>>>>>>> e83a228 (first commit)
export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="Agriculture performance." grid dataKey="Active User"/>
<<<<<<< HEAD
=======
      <Chartjs/>
>>>>>>> e83a228 (first commit)
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
