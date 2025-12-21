import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SegmentedControl } from "@radix-ui/themes";
import type { Wallpaper } from "@/pages/api/pictures/wallpaper";

import { Icons } from "@/icons";
import type { Airing, Media } from "@/types";
import {
  format,
  formatDistanceToNowStrict,
  fromUnixTime,
  isPast,
} from "date-fns";

interface WallpaperListProps {
  data: Wallpaper[];
  isMobile?: boolean;
}

export default function ButtonGroupsRoundedSmSecondaryLeadingIcon() {
  return (
    <>
      {/*<!-- Component: Sm sized secondary button group with leading icon and badge --> */}
      <div className="inline-flex divide-x divide-gray-200 overflow-hidden rounded">
        <button className="inline-flex h-8 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-gray-50 px-4 text-xs font-medium tracking-wide text-gray-500 transition duration-300 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-200 focus:text-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:shadow-none">
          <span className="order-2">最近更新</span>
          <span className="relative only:-mx-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-label="Button icon"
              role="graphics-symbol"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="absolute -right-0.5 -top-0.5 rounded-full bg-pink-500 p-1">
              <span className="sr-only">8 new emails</span>{" "}
            </span>
          </span>
        </button>
        <button className="inline-flex h-8 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-gray-50 px-4 text-xs font-medium tracking-wide text-gray-500 transition duration-300 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-200 focus:text-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:shadow-none">
          <span className="order-2">最多访问</span>
          <span className="relative only:-mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-label="Button icon"
              role="graphics-symbol"
            >
              <path
                fill-rule="evenodd"
                d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
        <button className="inline-flex h-8 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-gray-50 px-4 text-xs font-medium tracking-wide text-gray-500 transition duration-300 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-200 focus:text-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:shadow-none">
          <span className="order-2">最多收藏</span>
          <span className="relative only:-mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-label="Button icon"
              role="graphics-symbol"
            >
              <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
            </svg>
          </span>
        </button>
      </div>
      {/*<!-- End Sm sized secondary button group with leading icon and badge --> */}
    </>
  );
}

export function WallpaperList({ data, isMobile }: WallpaperListProps) {
  return (
    <div>
      {/* {ButtonGroupsRoundedSmSecondaryLeadingIcon()} */}
      {/* <div className="flex flex-row flex-wrap gap-4 justify-center w-full my-4"> */}
      <div className="grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12">
        {data?.map((paper, i) => (
          <WallpaperCard isMobile={isMobile} key={i} data={paper} />
        ))}
      </div>
    </div>
  );
}

function WallpaperCard({
  data,
  isMobile,
}: {
  data: Wallpaper;
  isMobile?: boolean;
}) {
  const sizeClass = isMobile ? "aspect-[9/16]" : "aspect-[16/9]";
  return (
    <div
      className={`col-span-4 lg:col-span-3 ${sizeClass} rounded-md bg-muted-foreground/10 hover:scale-[1.02] transition-transform cursor-pointer shadow-md`}
      style={{
        backgroundImage: `url(${data.thumb_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <a href={data.origin_site} target="_blank" rel="noopener noreferrer">
        {/* <div className="flex w-full flex-col justify-center">{data.title}</div> */}
      </a>
    </div>
  );
}
