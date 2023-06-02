import React from "react";
import { VscPass } from "react-icons/vsc";
const Skills = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-36 gap-2">
        <h1 className="font-bold text-3xl">Skills</h1>
        <p className="text-[12px] tex-white">My technical level</p>
      </div>
      <div className="flex gap-10 mt-12 justify-center">
        <div className="w-[300px] h-[220px] bg-white rounded-2xl border-[2px] flex flex-col items-center justify-center gap-3 ">
          <h1 className="">Frontend developer</h1>
          <div className=" flex gap-14 ">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col   ">
                <div className="flex items-center gap-2">
                  <VscPass className="text-xs" />
                  <h1 className="text-sm">HTML</h1>
                </div>
                <p className="text-[10px] ml-5">Intermediate</p>
              </div>
              <div className="flex flex-col    ">
                <div className="flex items-center gap-2">
                  <VscPass className="text-xs" />
                  <h1 className="text-sm">CSS</h1>
                </div>
                <p className="text-[10px] ml-5">Advanced</p>
              </div>
              <div className="flex flex-col    ">
                <div className="flex items-center gap-2">
                  <VscPass className="text-xs" />
                  <h1 className="text-sm">JavaScript</h1>
                </div>
                <p className="text-[10px] ml-5">Basic</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col   ">
                <div className="flex items-center gap-2">
                  <VscPass className="text-xs" />
                  <h1 className="text-sm">Saas</h1>
                </div>
                <p className="text-[10px] ml-5">Intermediate</p>
              </div>
              <div className="flex flex-col   ">
                <div className="flex items-center gap-2">
                  <VscPass className="text-xs" />
                  <h1 className="text-sm">Git</h1>
                </div>
                <p className="text-[10px] ml-5">Intermediate</p>
              </div>
              <div className="flex flex-col   ">
                <div className="flex items-center gap-2">
                  <VscPass className="text-xs" />
                  <h1 className="text-sm">React</h1>
                </div>
                <p className="text-[10px] ml-5">Intermediate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[220px] bg-white rounded-2xl border-[2px] flex flex-col items-center justify-center gap-3">
        <h1 className="">Frontend developer</h1>
          <div className=" flex gap-14 ">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col   ">
                <div className="flex items-center gap-2">
                  <VscPass className="text-xs" />
                  <h1 className="text-sm">Node js</h1>
                </div>
                <p className="text-[10px] ml-5">Basic</p>
              </div>
              <div className="flex flex-col    ">
                <div className="flex items-center gap-2">
                  <VscPass className="text-xs" />
                  <h1 className="text-sm">Firebase</h1>
                </div>
                <p className="text-[10px] ml-5">Intermediate</p>
              </div>
              <div className="flex flex-col    ">
                <div className="flex items-center gap-2">
                  <VscPass className="text-xs" />
                  <h1 className="text-sm">Python</h1>
                </div>
                <p className="text-[10px] ml-5">Basic</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col   ">
                <div className="flex items-center gap-2">
                  <VscPass className="text-xs" />
                  <h1 className="text-sm">Java</h1>
                </div>
                <p className="text-[10px] ml-5">Basic</p>
              </div>
              <div className="flex flex-col   ">
                <div className="flex items-center gap-2">
                  <VscPass className="text-xs" />
                  <h1 className="text-sm">Mysql</h1>
                </div>
                <p className="text-[10px] ml-5">Basic</p>
              </div>
              <div className="flex flex-col   ">
                <div className="flex items-center gap-2">
                  <VscPass className="text-xs" />
                  <h1 className="text-sm">PHP</h1>
                </div>
                <p className="text-[10px] ml-5">Basic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
