
import Image from "next/image";
import Header from "./component/Header";
import Hero from "./component/Hero";
import StatsSection from "./component/StatsSection";
import AboutUs from "./component/AboutUs";
import LMSSoftware from "./component/LMSSoftware";
import FourQuadrant from "./component/FourQuadrant";
import ETutorial from "./component/ETutorial";
import AssessmentSection from "./component/AssessmentSection";
import SalesSupport from "./component/SalesSupport";
import CustomizableFeatures from './component/CustomizableFeatures';
import SeamlessIntegration from "./component/SeamlessIntegration";
import ScalablePlatform from "./component/ScalablePlatform";
import RevenueModel from "./component/RevenueModel";
import SupportAndTraining from "./component/SupportAndTraining";
import PartnersSection from "./component/PartnersSection";
import UniversitySlider from "./component/UniversitySlider";



export default function Home() {
  return (
   <main>
    <Header/> 
    <Hero/> 
    <StatsSection/>
    <AboutUs/>
    <LMSSoftware/>
    <FourQuadrant/>
    <ETutorial/>
    <AssessmentSection/>
    <SalesSupport/>
    <CustomizableFeatures/>
    <SeamlessIntegration/>

    <ScalablePlatform/>
    <RevenueModel/>
    <SupportAndTraining/>
    <PartnersSection/>
    <UniversitySlider/>
    
  
    
    
    
   </main>
  );
}
