/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FErraNgFucp
 */


export default function BottomBar() {
  return (
    <div className="flex flex-col px-4 py-2 bg-[#282828] text-white justify-between">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2 w-80">
          <img
            alt="Album art"
            className="rounded-md object-cover"
            height="48"
            src="/placeholder.svg"
            style={{
              aspectRatio: "48/48",
              objectFit: "cover",
            }}
            width="48"
          />
          <div className="flex items-center gap-2 text-sm">
            <div>
              <div className="font-medium">Song Title</div>
              <div className="text-xs text-zinc-300">Artist Name</div>
            </div>
            <button>
              <svg
                className=" w-6 h-6 text-zinc-300 hover:text-zinc-50 transition-all"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <span className="sr-only">Save to My Library</span>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button >
            <svg
              className=" w-6 h-6 text-zinc-300 hover:text-zinc-50 transition-all"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            <span className="sr-only">Previous Track</span>
          </button>
          <button >
            <svg
              className=" w-8 h-8 text-zinc-300 hover:text-zinc-50 transition-all"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="16" width="4" x="6" y="4" />
              <rect height="16" width="4" x="14" y="4" />
            </svg>
            <span className="sr-only">Play/Pause</span>
          </button>
          <button>
            <svg
              className=" w-6 h-6 text-zinc-300 hover:text-zinc-50 transition-all"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
            <span className="sr-only">Next Track</span>
          </button>
        </div>
        <button className="w-80 flex justify-end">
          <svg
            className=" w-6 h-6 text-zinc-300 hover:text-zinc-50 transition-all"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          </svg>
          <span className="sr-only">Volume Control</span>
        </button>
      </div>
      <div className="flex items-center gap-4 text-sm mt-2">
        <div className="text-xs text-zinc-300">0:00</div>
        <div className="w-full h-1 bg-zinc-500 rounded">
          <div
            className="h-full bg-zinc-300 rounded"
            style={{
              width: "30%",
            }}
          />
        </div>
        <div className="text-xs text-zinc-300">3:45</div>
      </div>
    </div>
  )
}

