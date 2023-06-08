import Link from "next/link";

type Props = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  isPaginationPage: boolean;
}

const SinglePost = (props: Props) => {
  const { title, description, date, tags, slug, isPaginationPage } = props;

  return (
    <>
      {isPaginationPage ? (
        <section className="bg-teal-300 mb-8 mx-auto rounded-md p-5 shadow-2xl hover:shadow-none hover:translate-y-1 transition-all duration-300">
          <div className="lg:flex items-center">
            <h2 className="text-gray-100 text-lg font-medium mb-2">
              <Link href={`/posts/${slug}`}>{title}</Link>
            </h2>
            <div className="text-gray-200 mr-2">{date}</div>
            {tags.map((tag: string, index: number) => (
              <span className="text-white bg-gray-500 rounded-xl px-2 font-medium mr-2" key={index}>
                <Link href={`/posts/tag/${tag}/page/1`}>
                  {tag}
                </Link>
              </span>
            ))}
          </div>
          <p className="text-gray-100">{description}</p>
        </section>
      ) : (
        <section className="lg:w-1/2 bg-teal-300 mb-8 mx-auto rounded-md p-5 shadow-2xl hover:shadow-none hover:translate-y-1 transition-all duration-300">
          <div className="">
            <h2 className="text-gray-100 text-lg font-medium mb-2">
              <Link href={`/posts/${slug}`}>{title}</Link>
            </h2>
            <div className="text-gray-200 mb-2">{date}</div>
            {tags.map((tag: string, index: number) => (
              <span className="text-white bg-gray-500 rounded-lg p-1 mr-2" key={index} >
                <Link href={`/posts/tag/${tag}/page/1`}>
                  {tag}
                </Link>
              </span>
            ))}
          </div>
          <p className="text-gray-100">{description}</p>
        </section>
      )}
    </>
  );
};

export default SinglePost;