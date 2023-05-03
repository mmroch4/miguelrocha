import { randomNumber } from "@/utils/randomNumber";
import cuid from "cuid";
import { format, formatDistanceToNow } from "date-fns";
import { decorationColorVariants } from "./decorationColorVariants";

const COLOR_VARIANTS = Object.keys(decorationColorVariants);

export function Card({
  to,
  title,
  date,
  tags,
}: {
  to: string;
  title: string;
  date: Date;
  tags: string[];
}) {
  const formattedDate = format(
    date,
    "eee', the 'do' of 'MMMM' 'uuuu' at 'h':'mm' 'aaa"
  );

  const dateDistanceToNow = formatDistanceToNow(date, { includeSeconds: true });

  return (
    <div className="w-full flex flex-col gap-0.5 px-5 py-3 border border-gray-4 rounded-lg">
      <h2 className="text-xl font-bold hover:underline focus:underline">
        <a href={to} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>

      <p>
        {dateDistanceToNow} ago &#8226; {formattedDate}
      </p>

      <ul className="flex items-center gap-2">
        {tags.map((tag) => {
          return (
            <li
              key={cuid()}
              className={`underline decoration-solid decoration-2 ${
                decorationColorVariants[
                  COLOR_VARIANTS[
                    randomNumber(0, COLOR_VARIANTS.length - 1)
                  ] as keyof typeof decorationColorVariants
                ]
              }`}
            >
              #{tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
