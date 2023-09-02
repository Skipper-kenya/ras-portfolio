import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { GraduationCap, Book, Medal } from "phosphor-react";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <Book size={20} color="orangered"  />
          <h3 className="vertical-timeline-element-title">
            Tambach High School, Iten-Kbt road.
          </h3>
          <p> High School education</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <Medal size={20} color="orangered"  />
          <h3 className="vertical-timeline-element-title">
            FreecodeCamp Courses
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Online, FreecodeCamp.
          </h4>

          <p>Certification in JavaScript Language.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <Medal size={20} color="orangered" />
          <h3 className="vertical-timeline-element-title">
            FreecodeCamp Courses
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            remote, FreecodeCamp.
          </h4>
          <p>Certification in ReactJS Framework.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <GraduationCap size={20} color="orangered"  />
          <h3 className="vertical-timeline-element-title">
            University of Eldoret, Eldoret.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's degree
          </h4>
          <p>Information Technology</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
