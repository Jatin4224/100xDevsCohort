"use client";
import { createFileRoute } from "@tanstack/react-router";
import { ReviewCard } from "@/components/review-card";
import { reviewData, Review } from "@/constants/data";

export const Route = createFileRoute("/reviews")({
  component: Reviews,
});

export function Reviews() {
  const distributeReviews = (reviews: Review[]) => {
    const columns: Review[][] = [[], [], []];
    reviews.forEach((review, index) => {
      columns[index % 3].push(review);
    });
    return columns;
  };

  const [column1, column2, column3] = distributeReviews(reviewData);

  return (
    <section className="flex flex-col gap-y-4">
      <h1 className="text-2xl font-medium sm:text-center sm:text-3xl">
        Everyone Loves Chai
      </h1>

      <p className="mx-auto max-w-3xl text-gray-600 sm:mt-2 sm:text-center sm:text-lg dark:text-gray-300">
        The community says it better than we ever could. Thousands of
        developers, freelancers, and teams rely on Chai every day — sharing real
        results, tips, and stories.
      </p>

      <div
        aria-label="Our Reviews"
        className="mt-6 mb-8 grid grid-cols-1 gap-5 mask-b-from-85% sm:my-16 md:grid-cols-3 lg:gap-8"
      >
        {[column1, column2, column3].map((col, i) => (
          <div key={i} className="flex flex-col gap-5 lg:gap-8">
            {col.map((review, index) => (
              <ReviewCard review={review} key={`${i}-${index}`} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
