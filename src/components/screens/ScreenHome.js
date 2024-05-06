import React from "react";
// import NavSub from "../nav/NavSub";

// const homeArr = [
//   { task: "avatar", hovered: true },
//   { task: "favorites", hovered: false },
//   { task: "learn", hovered: false },
//   { task: "friends", hovered: false },
//   { task: "misc", hovered: false },
// ];

const ScreenHome = () => {
  return (
    <div className="screen_container_pages">
      {/* <NavSub>
        <ul className="sub_nav_ul">
          {homeArr.map((s, i) => (
            <li key={i} className={s.hovered ? "active_link" : ""}>
              {s.task}
            </li>
          ))}
        </ul>
      </NavSub> */}

      <p style={{ fontSize: "1.75rem", marginTop: "5rem" }}>
        Sign Up or Log In to View/Access
      </p>
    </div>
  );
};

export default ScreenHome;
