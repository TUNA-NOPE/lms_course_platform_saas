import Hero from "@/components/Hero";
import { CourseCard } from "@/components/CourseCard";
import { getCourses } from "@/public/sanity/lib/courses/getCourses";

export const revalidate = 0; // Always fetch fresh data

export default async function Home() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      {/* Courses Grid */}
      <div id="courses" className="container mx-auto px-4 pb-16 md:pb-24 scroll-mt-24">
        <div className="flex items-center gap-4 mb-6 md:mb-10">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm md:text-base font-semibold uppercase tracking-widest text-muted-foreground">Featured Courses</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
              href={`/courses/${course.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
