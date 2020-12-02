import React from "react";
import "./InfoPage.scss";
import ReportTable from "../ReportTable";

const InfoPage = (props) => {
  return (
    <div>
      <div className="InfoPage">
            <h1 className="PageHeader">
              COVID-CT Info
            </h1>
            <hr/>
            <br/>
            <div class="row">
                <div class="column">
                    <h2 className="StatTitle">Total Stevens Cases</h2>
                    <h2 className="StatNumber">124</h2>
                </div>
                <div class="column">
                    <h2 className="StatTitle">Current Stevens Cases</h2>
                    <h2 className="StatNumber">6</h2>
                </div>
                <div class="column">
                    <h2 className="StatTitle">Worldwide Cases</h2>
                    <h2 className="StatNumber">63,360,234</h2>
                </div>
            </div>
            <br/>
            <p>As of 12/03/20 at 6:30pm</p>
            <br/>
            <hr/>
            <br/>
            <h2 className="SectionHeader">What is COVID-CT?</h2>
            <p>COVID-CT allows students at Stevens to self-report their COVID diagnosis and symptoms to assist the Stevens health department with contact tracing. Your partitipation in this service is essential so we ask that you report any symptoms and diagosis immediately.</p>
            <br/>
            <br/>
            <h2 className="SectionHeader">Latest COVID Update from Stevens</h2>
            <p>As we enter the last weeks of the semester, I ask that you do all you can to reduce or eliminate your interactions with those outside of your household.  Not only are you at risk when you are in contact with someone within six feet or without a mask, you put your roommates, teammates, friends, family, and neighbors at risk as well.  The health and safety of our families and communities depend on our behavior until a vaccine is available.</p>
            <br/>
            <p>Since my email of November 24, six students and three staff members have tested positive for COVID-19.  Of the three staff members, two have been working on campus and one has been working remotely.  Of the six students, four are studying remotely and two are studying on campus. We wish everyone a speedy and full recovery.</p>
            <br/>
            <p>All COVID-19 positive individuals are isolating and their close contacts have been identified and notified to quarantine.  In cases where students have attended classes or employees have been on campus, their classmates, instructors and co-workers who are not close contacts but may have had minimal contact have been notified to monitor their health for symptoms and continue weekly testing.  Please be aware that Stevens has a robust protocol for disinfecting areas on campus where those testing positive COVID-19 reside, take classes or work.  This is in addition to the cleaning already in place.</p>
            <br/>
            <br/>
            <h2 className="SectionHeader">Verified Cases On-Campus</h2>
            <ReportTable data={props.dataMemory} />
      </div>
    </div>
  );
};
export default InfoPage;
