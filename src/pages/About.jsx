import {Outlet} from "react-router-dom";

function About() {
  return (
    <>
      <Outlet />
      <button>회사소개</button>
      <button>연혁</button>
      <button>오시는 길</button>
    </>
  );
}

export default About;
