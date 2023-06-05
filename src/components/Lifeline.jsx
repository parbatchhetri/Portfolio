import React, { useState } from "react";
import { LuGraduationCap } from "react-icons/lu";
import { BiBriefcaseAlt2, BiCalendar } from "react-icons/bi";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const Lifeline = () => {
  const[showTimeLine, setShowTimeLine] =useState(true);

  function clickHandler(){
    setShowTimeLine(true);
    setShow(false)
  }

  const [showEx, setShow] =useState(false)

  function clickHandler2(){
    setShowTimeLine(false);
    setShow(true)
  }
  return (
    <div>
      <div className="flex flex-col items-center mt-36 gap-2">
        <h1 className="font-bold text-3xl">Qualification</h1>
        <p className="text-[12px] text-gray-500 text-xs">my personal journey</p>
      </div>
      <div className="flex justify-center items-center gap-7 mt-10">
        <div className="flex justify-center items-center gap-1">
          <LuGraduationCap className="" />
          <h1 onClick={clickHandler2} className="text-lg font-medium  cursor-pointer"> Education </h1>
        </div>
        <div className="flex justify-center items-center gap-1">
          <BiBriefcaseAlt2 className="" />
          <h1 onClick={clickHandler}  className="text-lg font-medium cursor-pointer "> Experience </h1>
        </div>
      </div>

        {showEx  &&  <Timeline position="left">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-col justify-end">
                <h1 className="text-sm text-black font-semibold">Web Design</h1>
                <h1 className="text-[10px] text-gray-500 font-semibold">
                  Tribhuvan University
                </h1>
                <div className="flex justify-end">
                  <BiCalendar className="text-xs" />
                  <p className="text-[10px]">2022-Present</p>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem position="right">
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-col justify-end">
                <h1 className="text-sm text-black font-semibold">BSc.CSIT</h1>
                <p className="text-[10px] text-gray-500 font-semibold">
                  Tribhuvan University
                </p>
                <div className="flex justify-start">
                  <BiCalendar className="text-xs" />
                  <p className="text-[10px]">2022-Present</p>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem position="left">
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-col justify-end">
                <h1 className="text-sm text-black font-semibold">Web Design</h1>
                <p className="text-[10px] text-gray-500 font-semibold">
                  Tribhuvan University
                </p>
                <div className="flex justify-end">
                  <BiCalendar className="text-xs" />
                  <p className="text-[10px]">2022-Present</p>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>}
        

        {showTimeLine && <div className="div">
        <Timeline position="left">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-col justify-end">
                <h1 className="text-sm text-black font-semibold">Video Editor</h1>
                <h1 className="text-[10px] text-gray-500 font-semibold">
                  Chhetri Company
                </h1>
                <div className="flex justify-end">
                  <BiCalendar className="text-xs" />
                  <p className="text-[10px]">2022-Present</p>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem position="right">
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-col justify-end">
                <h1 className="text-sm text-black font-semibold">UX Designer</h1>
                <p className="text-[10px] text-gray-500 font-semibold">
                  Freelancing--Nepal
                </p>
                <div className="flex justify-start">
                  <BiCalendar className="text-xs" />
                  <p className="text-[10px]">2022-Present</p>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem position="left">
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-col justify-end">
                <h1 className="text-sm text-black font-semibold">Web Designer</h1>
                <p className="text-[10px] text-gray-500 font-semibold">
                  Figma-Nepal
                </p>
                <div className="flex justify-end">
                  <BiCalendar className="text-xs" />
                  <p className="text-[10px]">2022-Present</p>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        </div> }
       
     
    </div>
  );
};

export default Lifeline;
