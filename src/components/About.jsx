import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        As a dynamic and highly motivated Computer Science and Software Engineering graduate, I am adept
        in JavaScript and React for interactive and scalable user interfaces, proficient in Python and Flask
        for full-stack software development, and skilled in crafting visually appealing web pages
        using HTML, CSS, and frameworks such as Tailwind and Bootstrap. Additionally, I possess proficiency 
        in database management systems such as MySQL and PostgreSQL, with a strong grasp of data modeling and 
        optimization techniques. My experience extends to networking principles and proficiency in hardware and 
        software management, ensuring seamless integration and optimal performance. I am also proficient in 
        Google Suite and Microsoft Office applications for productivity and collaboration, and well-versed in 
        inventory management practices.
        </p>

        <br />

        <p className="text-xl">
        With a fervent passion for innovation and a knack for problem-solving, I excel in collaborative
        environments, leveraging my technical expertise to develop scalable solutions and drive project success. 
        My skill set includes proficiency in programming languages such as JavaScript, Python, and
        PHP, web development tools like Flask and React, database management with SQL, MySQL, and PostgreSQL, and 
        Rest API development using Postman and Thunderclient. I am also experienced in software configuration and
        deployment, utilize Git for software development, and have expertise in operating systems like Linux and
        Windows.
        </p>
      </div>
    </div>
  );
};

export default About;