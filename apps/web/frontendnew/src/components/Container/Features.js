import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const Features = ({ dark }) => {
  const features = [
    {
      name: "Cloud Synced",
      description:
        "Tired of not having the right info handy when you need it? Noteslify automatically saves notes online and syncs them to all your devices.",
      icon: GlobeAltIcon,
    },
    {
      name: "Reminders",
      description:
        "Create and assign your task with due dates and reminders. Find notes by searching for keywords, titles, or tags.",
      icon: ScaleIcon,
    },
    {
      name: "Capture Infinitely",
      description:
        "Store as many notes you can safely backed up on cloud. Get all arranged in one place safely and securely.",
      icon: BoltIcon,
    },
    {
      name: "Web application",
      description:
        "Many note-taking apps lack a fully functional web application. Noteslify offers a complete lineup of features from any major browser.",
      icon: DevicePhoneMobileIcon,
    },
  ];

  return (
    <section
      className={`${
        dark ? "bg-[#030414]" : "bg-white"
      } py-24 sm:py-32 lg:py-40 transition-all`}
      id="features"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-blue-600">
            Features
          </h2>
          <p
            className={`${
              dark ? "text-gray-200" : "text-gray-900"
            } mt-2 text-3xl font-bold tracking-tight sm:text-4xl`}
          >
            Why choose Noteslify?
          </p>
          <p
            className={`${
              dark ? "text-gray-400" : "text-gray-600"
            } mx-auto mt-6 max-w-2xl text-lg leading-8`}
          >
            Make plans. Keep a journal. Clip anything from the web. Noteslify
            lets you collect information quickly, organize it easily, and find
            it when you need it.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p
                    className={`${
                      dark ? "text-gray-200" : "text-gray-900"
                    } text-lg font-semibold leading-8 text-gray-900`}
                  >
                    {feature.name}
                  </p>
                  <p
                    className={`${
                      dark ? "text-gray-400" : "text-gray-600"
                    } mt-2 text-base leading-7 text-gray-600`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
