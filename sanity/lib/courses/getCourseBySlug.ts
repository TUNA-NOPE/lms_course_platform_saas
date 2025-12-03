import { sanityFetch } from "../live";
import { defineQuery } from "groq";
import { draftMode } from "next/headers";
import { client } from "../client";

async function getCourseBySlug(slug: string) {
  const getCourseBySlugQuery =
    defineQuery(`*[_type == "course" && slug.current == $slug][0] {
      ...,
      "category": category->{...},
      "instructor": instructor->{...},
      "modules": modules[]-> {
        ...,
        "lessons": lessons[]-> {...}
      }
    }`);

  // Check if we're in draft mode
  const isDraftMode = (await draftMode()).isEnabled;
  
  if (isDraftMode) {
    // Use sanityFetch for draft mode (with token and live updates)
    const course = await sanityFetch({
      query: getCourseBySlugQuery,
      params: { slug },
    });
    return course.data;
  } else {
    // Use regular client for published content (no token)
    const course = await client.fetch(getCourseBySlugQuery, { slug });
    return course;
  }
}

export default getCourseBySlug;
