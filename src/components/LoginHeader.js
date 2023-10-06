import React from "react";
import StudentLogo from "./images/loginStudent.svg";
import ParentLogo from "./images/loginParent.svg";
import StaffLogo from "./images/loginStaff.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Avatar } from "@mui/material";
import "./LoginHeader.css";
const LoginHeader = () => {
  const [student, setStudent] = useState(false);
  const [parent, setParent] = useState(false);
  const [staff, setStaff] = useState(false);
  const [state, setState] = useState(true);

  const handleStudentClick = () => {
    setStudent(true);
    setParent(false);
    setStaff(false);
  };

  const handleParentClick = () => {
    setParent(true);
    setStudent(false);
    setStaff(false);
  };

  const handleStaffClick = () => {
    setStaff(true);
    setParent(false);
    setStudent(false);
  };

  const handleState = () => {
    setState(false);
  };
  return (
    <>
      <div
        onClick={handleState}
        className={
          state
            ? "Active-Login-Header-Logo w-100 h-100 d-flex column-gap-3 justify-content-center"
            : "noActive-Login-Header-Logo w-100 h-100 d-flex column-gap-3 justify-content-center"
        }
      >
        {/*------------------------ Student Logo Start --------------------*/}
        <div className="Student-Logo d-flex">
          <Link
            to="student"
            onClick={handleStudentClick}
            className={
              student ? "activeStudent-Logo" : "no-Active-Student-Logo"
            }
          >
            {" "}
            <Avatar alt="Student-Logo" src={StudentLogo} />{" "}
          </Link>
          <Link
            to="student"
            onClick={handleStudentClick}
            className={
              student
                ? "activeStudent-Word mt-2 ms-2"
                : "no-Active-Student-Word mt-2 ms-2"
            }
          >
            {" "}
            Student{" "}
          </Link>
        </div>
        {/*------------------------ Student Logo End --------------------*/}
        {/*------------------------ Parent Logo Start --------------------*/}
        <div className="Parent-Logo d-flex">
          <Link
            to="parent"
            onClick={handleParentClick}
            className={parent ? "activeParent-Logo" : "no-Active-Parent-Logo"}
          >
            {" "}
            <Avatar alt="Parent-Logo" src={ParentLogo} />{" "}
          </Link>
          <Link
            to="parent"
            onClick={handleParentClick}
            className={
              parent
                ? "activeParent-Word mt-2 ms-2"
                : "no-Active-Parent-Word mt-2 ms-2"
            }
          >
            {" "}
            Parent{" "}
          </Link>
        </div>
        {/*------------------------ Parent Logo End --------------------*/}
        {/*------------------------ Staff Logo Start --------------------*/}
        <div className="Staff-Logo d-flex">
          <Link
            to="staff"
            onClick={handleStaffClick}
            className={staff ? "activeStaff-Logo" : "no-Active-Staff-Logo"}
          >
            {" "}
            <Avatar alt="Staff-Logo" src={StaffLogo} />{" "}
          </Link>
          <Link
            to="staff"
            onClick={handleStaffClick}
            className={
              staff
                ? "activeStaff-Word mt-2 ms-2"
                : "no-Active-Staff-Word mt-2 ms-2"
            }
          >
            {" "}
            Staff{" "}
          </Link>
        </div>
        {/*------------------------ Staff Logo End --------------------*/}
      </div>
    </>
  );
};

export default LoginHeader;
