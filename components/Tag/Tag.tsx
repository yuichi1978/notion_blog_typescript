import Link from "next/link";

type Props = {
  tags: string[];
}

const Tag = (props: Props) => {
  const { tags } = props;

  return (
    <div className="mx-4">
      <section className="lg:w-1/2 mb-8 mx-auto bg-gray-200 rounded-md p-5 shadow-2xl hover:shaodw-none hover:translate-y-1 duration-300 transition-all">
        <div className="font-medium mb-4">タグ検索</div>
        <div className="h-50 grid grid-row-3 grid-flow-col gap-4 text-center">
          {tags.map((tag: string, index: number) => (
            <span className="cursor-pointer font-medium pd-1 rounded-xl bg-green-200 inline-block" key={index}>
              <Link href={`/posts/tag/${tag}/page/1`}>
                {tag}
              </Link>
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Tag;