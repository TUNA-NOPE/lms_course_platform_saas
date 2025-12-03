import { sanityFetch } from "../live";
import { defineQuery } from "groq";
import { draftMode } from "next/headers";
import { client } from "../client";

export async function getCourses() {
  const getCoursesQuery = defineQuery(`*[_type == "course"] {
    ...,
    "slug": slug.current,
    "category": category->{...},
    "instructor": instructor->{...}
  }`);

  // Check if we're in draft mode
  const isDraftMode = (await draftMode()).isEnabled;
  
  if (isDraftMode) {
    // Use sanityFetch for draft mode (with token and live updates)
    const courses = await sanityFetch({ query: getCoursesQuery });
    return courses.data;
  } else {
    // Use regular client for published content (no token)
    const courses = await client.fetch(getCoursesQuery);
    return courses;
  }
}
