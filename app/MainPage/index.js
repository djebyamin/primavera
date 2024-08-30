// pages/index.js
import CourseCard from '../MainPage/page';

const courses = [
  {
    image: '/images/course-image.jpg',
    date: '12-08-2024 14:30',
    price: '$14.00',
    oldPrice: '$26.00',
    title: 'Gestion d’un projet aeronautique avec primavera p6',
    instructor: 'Kevin Gilbert',
    rating: 5.0,
    reviews: '357,914',
    slotsLeft: '7/12',
    duration: '6 hour'
  },
  {
    image: '/images/course-image.jpg',
    date: '12-08-2024 14:36',
    price: '$14.00',
    oldPrice: '$26.00',
    title: 'Gestion d’un projet aeronautique avec primavera p6',
    instructor: 'Kevin Gilbert',
    rating: 5.0,
    reviews: '357,914',
    slotsLeft: '7/12',
    duration: '6 hour'
  },
  // Add more courses as needed
];

export default function Home() {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Nos cours live</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
}
