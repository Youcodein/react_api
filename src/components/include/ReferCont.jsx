import React from "react";
// const ReferText = ({ num, name, desc, star }) => {
//   return (
//     <li>
//       <a href="/">
//         <span className="num">{num}</span>
//         <span className="name">{name}</span>
//         <span className="desc">{desc}</span>
//         <span className="star">{star}</span>
//       </a>
//     </li>
//   );
// };

const ReferText = ({ num, title, desc }) => {
  return (
    <li>
      <a href="/">
        <span>{num}</span>
        <span>{title}</span>
        <span>{desc}</span>
      </a>
    </li>
  );
};

const ReferCont = ({ references }) => {
  return (
    <section className="cont__Refer">
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <ul className="refer__list">
            {references.map((refer, idx) => (
              <ReferText
                key={idx}
                num={refer.num}
                title={refer.title}
                desc={refer.desc}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default ReferCont;
