import { sanityFetch } from "../live";
import { defineQuery } from "groq";
import { draftMode } from "next/headers";
import { client } from "../client";

async function getCourseById(id: string) {
  const getCourseByIdQuery =
    defineQuery(`*[_type == "course" && _id == $id][0] {
      ...,  // Spread all course fields
      "category": category->{...},  // Expand the category reference, including all its fields
      "instructor": instructor->{...},  // Expand the instructor reference, including all its fields
      "modules": modules[]-> {  // Expand the array of module references
        ...,  // Include all module fields
        "lessons": lessons[]-> {...}  // For each module, expand its array of lesson references
      }
    }`);

  // Check if we're in draft mode
  const isDraftMode = (await draftMode()).isEnabled;
  
  if (isDraftMode) {
    // Use sanityFetch for draft mode (with token and live updates)
    const course = await sanityFetch({
      query: getCourseByIdQuery,
      params: { id },
    });
    return course.data;
  } else {
    // Use regular client for published content (no token)
    const course = await client.fetch(getCourseByIdQuery, { id });
    return course;
  }
}

export default getCourseById;
