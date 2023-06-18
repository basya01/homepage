const timelineYears = document.querySelector('.timeline__years');
const timelineYearsItems = document.querySelectorAll('.timeline__years-item');
const timelineInfoText = document.querySelector('.timeline__info');

const texts = {
  2019: 'Entering the university, learning the basics of programming in C++.',
  2020: 'Learning the basics of Python. Development of applications with a user interface in the field of machine vision using the OpenCV library. Writing and defending a course project on the topic: "Methods of processing video images in vision systems."',
  2021: 'Coursework defense on navigation using Python. An application with a user interface has been written that parses the necessary aircraft flight data from a file (RINEX), displays graphs and generates a markup file (KML) that opens in the Google Earth application. The flight path of the aircraft will be displayed there. Start learning web development, HTML, CSS.',
  2022: 'Learning the SCSS preprocessor, the basics of Javascript programming, working with the DOM tree. React development basics. Basics of working with GIT.',
  2023: 'Learning the basics of back-end development using Express, MongoDB, MySQL',
};

timelineYears.onclick = function (e) {
  if (!e.target.classList.contains('timeline__years-item')) {
    return;
  }
  const year = e.target.textContent;
  changeActive(year);
  timelineInfoText.textContent = texts[year];
};

function changeActive(active) {
  timelineYearsItems.forEach((item) => {
    if (item.textContent === active) {
      item.classList.add('timeline__years-item--active');
      return;
    }
    item.classList.remove('timeline__years-item--active');
  });
}
