import Image from "next/image";
import Link from "next/link";
import avatarImage from "app/assets/imgs/avatar.jpeg";
import { BlogPosts } from "app/components/posts";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";

export default function Page() {
  return (
    <main className="max-w-4xl flex-auto mt-6 flex flex-col mx-auto">
      <section className="overflow-hidden lg:bg-transparent px-2 mx-4">
        <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] pt-16 md:pt-20 lg:grid-cols-12 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
          <div className="relative flex items-start lg:col-span-4">
            {/* <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-[2rem] bg-slate-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-48">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div> */}

            <div className="flex flex-col gap-4 mx-auto z-10 w-64 md:w-80 lg:w-auto">
              <div className="relative flex rounded-xl overflow-hidden bg-slate-600 shadow-xl">
                <Image className="w-full" src={avatarImage} alt="" priority />
              </div>
              <div>
                <h3 className="mb-2 text-xl">Ali Moallim</h3>
                <p>
                  <span className="text-neutral-600 dark:text-slate-400">
                    GitHub:{" "}
                  </span>
                  <span>
                    <Link href="https://github.com/amoallim15" target="_blank">
                      @amoallim15
                    </Link>
                  </span>
                </p>
                <p>
                  <span className="text-neutral-600 dark:text-slate-400">
                    Linkedin:{" "}
                  </span>
                  <span>
                    <Link
                      href="https://linkedin.com/in/amoallim"
                      target="_blank"
                    >
                      amoallim
                    </Link>
                  </span>
                </p>
                <p>
                  <span className="text-neutral-600 dark:text-slate-400">
                    Newsletter:{" "}
                  </span>
                  <span>
                    <Link
                      href="https://amoallim.substack.com/"
                      target="_blank"
                    >
                      amoallim
                    </Link>
                  </span>
                </p>
                <small className="text-blue-300">
                  <Link href="/cv.pdf" target="_blank">
                    Curriculum Vitae
                  </Link>
                </small>
                <br />
                <br />
                <small>
                  News [
                  <span className="text-blue-300">
                    <Link href="/updates">More Updates</Link>
                  </span>
                  ]
                </small>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="pt-16 lg:col-span-8 lg:bg-transparent lg:pl-8 lg:pt-0 xl:pl-20">
            <Navbar />
            <div className="mx-auto">
              <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                {`Turtle Bites.`}
              </h1>
              <p className="mb-4">
                {`Find me here when my machine’s stuck looping :)`}
              </p>
              <p className="mb-4">
                {`
                  This is where I share my thoughts on linguistics, machines, and people, all with a dash of humor and the occasional turtle bites.
                  Expect a mix of tech insights, personal stories, and reflections on the questions that keep me up at night.
                `}
              </p>
              <div className="my-8">
                <BlogPosts />
              </div>
            </div>
            <footer className="mb-16">
              <p className="mt-8 text-neutral-600 dark:text-neutral-300">
                <small>© {new Date().getFullYear()} MIT Licensed</small>
              </p>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}
